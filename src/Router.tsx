import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";

import CameraStreamer from "./components/Pages/GateTest";
import PatientFormParent from "./components/Pages/PatientFormParent";
import ArticleDetail from "./components/Articles/ArticleDetail";
import LoginPage from "./components/Pages/LoginPage";

const AppRouter = () => {
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
