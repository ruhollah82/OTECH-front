import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Box,
  Button,
  Typography,
  keyframes,
  Skeleton,
  Divider,
  Avatar,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(0px); }
  100% { transform: translateY(0px); }
`;

interface PatientData {
  name: string;
  age: number;
  gender: string;
  lastVisit: string;
  medicalHistory: string[];
  diagnosis?: string;
  confidence?: number;
}

const PatientDetails = ({
  data,
  loading,
}: {
  data?: PatientData;
  loading: boolean;
}) => (
  <Box
    sx={{
      background: "rgba(255,255,255,0.05)",
      borderRadius: 4,
      p: 3,
      height: "100%",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(96,239,255,0.2)",
      boxShadow: "0 0 40px rgba(96,239,255,0.1)",
    }}
  >
    <Typography
      variant="h5"
      sx={{
        background: "linear-gradient(45deg, #00ff87, #60efff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        mb: 2,
      }}
    >
      برسی اجمالی بیمار
    </Typography>

    {loading ? (
      Array.from({ length: 5 }).map((_, i) => (
        <Skeleton
          key={i}
          variant="rectangular"
          width="100%"
          height={40}
          sx={{ mb: 1 }}
        />
      ))
    ) : data ? (
      <>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar sx={{ bgcolor: "#60efff", mr: 2 }}>{data.name[0]}</Avatar>
          <Box>
            <Typography variant="h6" sx={{ color: "#60efff" }}>
              {data.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#60efff" }}>
              {data.age}yrs • {data.gender}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(96,239,255,0.3)", my: 2 }} />

        <Typography variant="subtitle1" sx={{ color: "#60efff" }}>
          سابقه پزشکی
        </Typography>
        <ul style={{ paddingLeft: 20, margin: "8px 0" }}>
          {data.medicalHistory.map((item, i) => (
            <li key={i} style={{ color: "rgba(255,255,255,0.8)" }}>
              {item}
            </li>
          ))}
        </ul>

        {data.diagnosis && (
          <>
            <Divider sx={{ borderColor: "rgba(96,239,255,0.3)", my: 2 }} />
            <Typography variant="subtitle1" sx={{ color: "#60efff" }}>
              معاینه هوشمند
            </Typography>
            <Box
              sx={{
                background: "rgba(96,239,255,0.1)",
                borderRadius: 2,
                p: 2,
                mt: 1,
              }}
            >
              <Typography>{data.diagnosis}</Typography>
              <Typography variant="body2" sx={{ color: "#00ff87", mt: 1 }}>
                Confidence: {(data.confidence || 0 * 100).toFixed(1)}%
              </Typography>
            </Box>
          </>
        )}
      </>
    ) : (
      <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.6)" }}>
        اطلاعات بیمار یافت نشد. برای شروع، معاینه هوشمند را آغاز کنید.
      </Typography>
    )}
  </Box>
);

const CameraStreamer = () => {
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [patientInfo, setPatientInfo] = useState<PatientData>();
  const [loadingPatientData, setLoadingPatientData] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const websocketRef = useRef<WebSocket | null>(null);
  const [error, setError] = useState<string | null>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    if (streaming) {
      setLoadingPatientData(true);
      const timeout = setTimeout(() => {
        setPatientInfo({
          name: "John Doe",
          age: 34,
          gender: "Male",
          lastVisit: "2024-02-15",
          medicalHistory: ["ام اس نوع دو", "نیازمند ویلچر"],
          diagnosis: "وضعیت بیمار متعادل است و نیازمند ویزیت پزشک نیست.",
          confidence: 0.92,
        });
        setLoadingPatientData(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [streaming]);

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
      setError("عدم دسترسی به وبکم");
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
      setError("مشکل در استریم به سرور");
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
        width: "100vw",
        display: "flex",
        background:
          "radial-gradient(circle at center, #0f0c29 0%, #03001C 100%)",
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
      {/* <AppBar
        position="sticky"
        sx={{
          background: "rgba(3, 0, 28, 0.8)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(96,239,255,0.3)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              background: "linear-gradient(45deg, #00ff87, #60efff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            تست گیت
          </Typography>
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              color: "#60efff",
              "&:hover": { bgcolor: "rgba(96,239,255,0.1)" },
            }}
          >
            <ArrowBack />
          </IconButton>
        </Toolbar>
      </AppBar> */}

      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: 4,
          p: 4,
          position: "relative",
          zIndex: 2,
          height: "calc(100vh - 64px)",
        }}
      >
        <Box
          sx={{
            width: "35%",
            animation: `${float} 6s infinite ease-in-out`,
          }}
        >
          <PatientDetails data={patientInfo} loading={loadingPatientData} />
        </Box>

        <Box
          sx={{
            flex: 1,
            animation: `${float} 6s infinite ease-in-out`,
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              borderRadius: 4,
              p: 3,
              border: "1px solid rgba(96,239,255,0.2)",
              boxShadow: "0 0 40px rgba(96,239,255,0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                background: "linear-gradient(45deg, #00ff87, #60efff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              پنل معاینه آنلاین
            </Typography>

            <Box
              sx={{
                flex: 1,
                backgroundColor: "grey.800",
                borderRadius: 2,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />

              {!streaming && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.7)",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#60efff" }}>
                    وبکم غیر فعال است
                  </Typography>
                </Box>
              )}
            </Box>

            <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
              {!streaming ? (
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 6,
                    background:
                      "linear-gradient(45deg, #60efff 0%, #0061ff 100%)",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                  onClick={startStreaming}
                >
                  شروع معاینه
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={stopStreaming}
                  sx={{
                    px: 6,
                    background:
                      "linear-gradient(45deg, #60efff 0%, #0061ff 100%)",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                >
                  توقف معاینه
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CameraStreamer;
