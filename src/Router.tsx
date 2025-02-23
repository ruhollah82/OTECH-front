import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PatientFormParent from "./components/PatientForm";
import ArticleDetail from "./components/ArticleDetail";
import LoginPage from "./components/LoginPage";
import CameraStreamer from "./components/GateTest";

const AppRouter = () => {
  // const { loginUser, loading, error, token } = useLogin();

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<PatientFormParent />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/gatetest" element={<CameraStreamer />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
