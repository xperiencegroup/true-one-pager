import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import Home from "./pages/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/es" replace />} />
        <Route path="/:lang" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
