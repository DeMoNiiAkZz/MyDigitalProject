import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import AdminDashboard from "./pages/Enzo/Dashboard";

import ClientDashboard from "./pages/Aurore/Dashboard";
import DocumentsClient from "./pages/Aurore/Documents";
import ModulesClient from "./pages/Aurore/Modules";
import PlanningClient from "./pages/Aurore/Planning";
import ProfilClient from "./pages/Aurore/Profil";

import Test from "./pages/Enzo/Test";

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

        <Route path="/" element={<ClientDashboard />} />
        <Route path="/documents" element={<DocumentsClient />} />
        <Route path="/profil" element={<ProfilClient />} />
        <Route path="/modules" element={<ModulesClient />} />
        <Route path="/planning" element={<PlanningClient />} />

        <Route path="*" element={<h1 className="text-center mt-5">404 - Page non trouvée ❌</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
