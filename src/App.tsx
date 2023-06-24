import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Route components
const StreamPage = lazy(() => import("./pages/StreamPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/streams" element={<StreamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
