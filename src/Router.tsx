import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PatientFormParent from "./components/PatientFormParent";
import ArticleDetail from "./components/ArticleDetail";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PatientFormParent />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
