import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box, Button, Typography, keyframes } from "@mui/material";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const CameraStreamer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [streaming, setStreaming] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const websocketRef = useRef<WebSocket | null>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const initializeCamera = async () => {
    try {
      setLoading(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      return stream;
    } catch (err) {
      setError("Camera access denied or not available");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const startStreaming = async () => {
    const stream = await initializeCamera();
    if (!stream) return;

    try {
      websocketRef.current = new WebSocket("wss://your-backend-websocket-url");
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "video/webm; codecs=vp9",
      });

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (websocketRef.current?.readyState === WebSocket.OPEN) {
          websocketRef.current.send(event.data);
        }
      };

      mediaRecorderRef.current.start(1000);
      setStreaming(true);
    } catch (err) {
      setError("Failed to start streaming");
    }
  };

  const stopStreaming = () => {
    mediaRecorderRef.current?.stop();
    websocketRef.current?.close();
    setStreaming(false);

    if (videoRef.current?.srcObject) {
      (videoRef.current.srcObject as MediaStream)
        .getTracks()
        .forEach((track) => track.stop());
    }
  };

  useEffect(() => {
    return () => stopStreaming();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at center, #0f0c29 0%, #03001C 100%)",
        overflow: "hidden",
      }}
    >
      <Particles
        init={particlesInit}
        options={{
          fullScreen: false,
          particles: {
            number: { value: 40 },
            color: { value: "#60efff" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              outModes: "bounce",
            },
          },
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          animation: `${float} 6s infinite ease-in-out`,
          padding: 4,
          borderRadius: 4,
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 0 40px rgba(96,239,255,0.1)",
          border: "1px solid rgba(96,239,255,0.2)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            background: "linear-gradient(45deg, #00ff87, #60efff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
            textShadow: "0 0 20px rgba(96,239,255,0.3)",
            mb: 2,
          }}
        >
          Live Camera Streaming
        </Typography>
        <Box
          sx={{
            width: "100%",
            maxWidth: 800,
            height: 450,
            backgroundColor: "grey.800",
            mb: 2,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        {!streaming ? (
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 1.5,
              fontSize: "1.1rem",
              background: "linear-gradient(45deg, #60efff 0%, #0061ff 100%)",
              border: "1px solid rgba(255,255,255,0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 10px 20px rgba(96,239,255,0.3)",
              },
            }}
            onClick={startStreaming}
            disabled={loading}
          >
            {loading ? "Initializing..." : "Start Streaming"}
          </Button>
        ) : (
          <Button variant="contained" color="secondary" onClick={stopStreaming}>
            Stop Streaming
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CameraStreamer;
