import { lazy, Suspense } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// Route components
const StreamPage = lazy(() => import("./pages/StreamPage/StreamPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NoAccessPage = lazy(() => import("./pages/NoAccessPage/NoAccessPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/streams" element={<StreamPage />} />
          <Route path="/403" element={<NoAccessPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
