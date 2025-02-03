import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import AdminDashboard from "./pages/Enzo/Dashboard";
import ClientDashboard from "./pages/Aurore/Dashboard";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="mb-4">Bienvenue 👋</h1>
      <div className="d-flex gap-3">
        <button className="btn btn-primary btn-lg" onClick={() => navigate("/admin", { replace: true })}>
          🏢 Admin
        </button>
        <button className="btn btn-success btn-lg" onClick={() => navigate("/client", { replace: true })}>
          👤 Client
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="*" element={<h1 className="text-center mt-5">404 - Page non trouvée ❌</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
