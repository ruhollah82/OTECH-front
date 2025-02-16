import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./components/PatientFormParent";
import ArticlePage from "./components/ArticlePage";
import ArticleDetail from "./components/ArticleDetail";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<ArticlePage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
