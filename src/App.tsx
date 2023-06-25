import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// custom components
import StreamAppBar from "./components/AppBar/StreamAppBar";
// Route components
const StreamPage = lazy(() => import("./pages/StreamPage/StreamPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NoAccessPage = lazy(() => import("./pages/NoAccessPage/NoAccessPage"));

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/403" && <StreamAppBar />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/streams" element={<StreamPage />} />
          <Route path="/403" element={<NoAccessPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
