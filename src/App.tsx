import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Route components
const StreamPage = lazy(() => import("./pages/StreamPage/StreamPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/streams" element={<StreamPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
