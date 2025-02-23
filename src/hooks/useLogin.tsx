import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

interface LoginForm {
  email: string;
  password: string;
}

interface ApiResponse {
  success?: boolean;
  token?: string;
  errors?: Record<string, string[]>;
}

const useLogin = () => {
  const { setToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Record<string, string[]> | null>(null);

  const loginUser = async (formData: LoginForm) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post<ApiResponse>(
        "http://localhost:8000/api/patients/login/",
        formData
      );
      console.log("uselogin : ", formData);
      console.log("uselogin : ", data);

      if (data.token) {
        setToken(data.token);
      }
    } catch (error: any) {
      setError(
        error.response?.data?.errors || {
          general: ["Invalid credentials. Please try again."],
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading, error };
};

export default useLogin;
