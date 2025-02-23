import {
  Box,
  Typography,
  Button,
  TextField,
  keyframes,
  CircularProgress,
} from "@mui/material";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { Engine } from "tsparticles-engine";
import useLogin from "../../hooks/useLogin";
import { useAuth } from "../../context/AuthContext";
import { AccountCircle, Lock } from "@mui/icons-material";

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const inputStyles = {
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
  "& .MuiSvgIcon-root": {
    color: "rgba(96,239,255,0.7)",
    mr: 1.5,
  },
};

const loginButtonStyles = (loading: boolean) => ({
  px: 6,
  py: 1.5,
  fontSize: "1.1rem",
  background: loading
    ? "linear-gradient(45deg, #60efff88 0%, #0061ff88 100%)"
    : "linear-gradient(45deg, #60efff 0%, #0061ff 100%)",
  border: "1px solid rgba(255,255,255,0.3)",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 10px 20px rgba(96,239,255,0.3)",
    background: "linear-gradient(45deg, #60efff 0%, #0061ff 100%)",
  },
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
});

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
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `
            radial-gradient(circle at 75% 30%, #0f0c29 0%, 
            #03001C 70%, #000318 100%)
          `,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0.3,
            filter: "blur(1px)",
          }}
        >
          <Particles
            init={particlesInit}
            options={{
              fullScreen: false,
              particles: {
                number: { value: 25 },
                color: { value: "#60efff" },
                shape: { type: "circle" },
                opacity: { value: 0.3 },
                size: { value: { min: 1, max: 2 } },
                move: {
                  enable: true,
                  speed: 0.3,
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
            animation: `${fadeIn} 0.6s ease-out`,
            width: { xs: "90%", sm: 400 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              padding: 4,
              borderRadius: 4,
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 0 40px rgba(96,239,255,0.15)",
              border: "1px solid rgba(96,239,255,0.3)",
              "&:before": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: 4,
                padding: "2px",
                background: "linear-gradient(45deg, #60efff33, #0061ff33)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                background: "linear-gradient(45deg, #00ff87 30%, #60efff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                mb: 3,
                letterSpacing: "-0.5px",
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60%",
                  height: 2,
                  background:
                    "linear-gradient(90deg, transparent, #60efff, transparent)",
                },
              }}
            >
              ورود به حساب کاربری
            </Typography>

            {error && (
              <Typography
                color="error"
                sx={{
                  mb: 2,
                  animation: `${fadeIn} 0.3s ease-out`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <span>⚠️</span>
                {error.general?.[0] || "خطایی رخ داده است."}
              </Typography>
            )}

            <TextField
              fullWidth
              variant="standard"
              label="ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={inputStyles}
              InputProps={{
                startAdornment: <AccountCircle />,
              }}
            />
            <TextField
              fullWidth
              variant="standard"
              label="رمز عبور"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={inputStyles}
              InputProps={{
                startAdornment: <Lock />,
              }}
            />

            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              disabled={loading}
              sx={loginButtonStyles(loading)}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "ورود"
              )}
            </Button>

            <Box
              sx={{
                mt: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                حساب کاربری ندارید؟
              </Typography>
              <Button
                variant="text"
                size="medium"
                onClick={() => navigate("/register")}
                sx={{
                  color: "#60efff",
                  "&:hover": {
                    backgroundColor: "rgba(96,239,255,0.1)",
                    transform: "translateX(4px)",
                  },
                  transition: "all 0.2s ease",
                  ml: 1,
                }}
              >
                ثبت‌نام
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  );
};

export default LoginPage;
