import { Box, Typography, Button, TextField, keyframes } from "@mui/material";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { Engine } from "tsparticles-engine";
import useLogin from "../hooks/useLogin";
import { useAuth } from "../context/AuthContext";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const LoginPage = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const { loginUser, loading, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleSubmit = async () => {
    await loginUser({ email, password });
  };

  return (
    !token && (
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at center, #0f0c29 0%, #03001C 100%)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0.3,
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
          />
        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            animation: `${float} 6s infinite ease-in-out`,
          }}
        >
          <Box
            sx={{
              position: "relative",
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
                background: "linear-gradient(45deg, #00ff87 30%, #60efff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                mb: 2,
                textShadow: "0 0 20px rgba(96,239,255,0.3)",
              }}
            >
              ورود به حساب کاربری
            </Typography>

            {error && (
              <Typography color="error" sx={{ mb: 2 }}>
                {error.general?.[0] || "خطایی رخ داده است."}
              </Typography>
            )}

            <TextField
              fullWidth
              variant="standard"
              label="ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                input: { color: "white" },
                label: { color: "rgba(255,255,255,0.7)" },
                mb: 2,
                "& .MuiInput-underline:before": {
                  borderBottomColor: "rgba(96,239,255,0.5)",
                },
                "&:hover .MuiInput-underline:before": {
                  borderBottomColor: "#60efff",
                },
                "& .MuiInput-underline:after": { borderBottomColor: "#60efff" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#60efff" },
              }}
            />

            <TextField
              fullWidth
              variant="standard"
              label="رمز عبور"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                input: { color: "white" },
                label: { color: "rgba(255,255,255,0.7)" },
                mb: 3,
                "& .MuiInput-underline:before": {
                  borderBottomColor: "rgba(96,239,255,0.5)",
                },
                "&:hover .MuiInput-underline:before": {
                  borderBottomColor: "#60efff",
                },
                "& .MuiInput-underline:after": { borderBottomColor: "#60efff" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#60efff" },
              }}
            />

            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              disabled={loading}
              sx={{
                px: 6,
                py: 1.5,
                fontSize: "1.1rem",
                background: "linear-gradient(45deg, #60efff 0%, #0061ff 100%)",
                border: "1px solid rgba(255,255,255,0.3)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 20px rgba(96,239,255,0.3)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {loading ? "در حال ورود..." : "ورود"}
            </Button>
          </Box>
        </Box>
      </Box>
    )
  );
};

export default LoginPage;
