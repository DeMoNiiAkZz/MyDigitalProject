import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import Error404 from "./pages/404";

import AdminDashboard from "./pages/Enzo/Dashboard";
import ProfilAdmin from "./pages/Enzo/Profil";

import ClientsAdmin from "./pages/Enzo/Clients";
import AddClient from "./pages/Enzo/AjouterClient";
import DetailsClient from "./pages/Enzo/DetailsClient";

import PlanningAdmin from "./pages/Enzo/Planning";
import DocumentsAdmin from "./pages/Enzo/Documents";
import ModulesAdmin from "./pages/Enzo/Modules";
import SeancesAdmin from "./pages/Enzo/Seances";


// Aurore
import ClientDashboard from "./pages/Aurore/Dashboard";
import DocumentsClient from "./pages/Aurore/Documents";
import ModulesClient from "./pages/Aurore/Modules";
import PlanningClient from "./pages/Aurore/Planning";
import ProfilClient from "./pages/Aurore/Profil";
import ModulesDetails from "./pages/Aurore/ModulesDetails";
import Seance from "./pages/Aurore/Seance";



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
        <Route path="/admin/profil" element={<ProfilAdmin />} />
        <Route path="/admin/clients" element={<ClientsAdmin />} />
        <Route path="/admin/client/add" element={<AddClient />} />
        <Route path="/admin/client/details/:id" element={<DetailsClient />} />
        
        <Route path="/admin/planning" element={<PlanningAdmin />} />
        <Route path="/admin/documents" element={<DocumentsAdmin />} />
        <Route path="/admin/modules" element={<ModulesAdmin />} />
        <Route path="/admin/seances" element={<SeancesAdmin />} />


        {/* Aurore */}
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/documents" element={<DocumentsClient />} />
        <Route path="/profil" element={<ProfilClient />} />
        <Route path="/modules" element={<ModulesClient />} />
        <Route path="/module/:id_module" element={<ModulesDetails/>} />
        <Route path="/seance/:id_seance" element={<Seance/>} />
        <Route path="/planning" element={<PlanningClient />} />

        <Route path="*" element={<Error404/>} />
      </Routes>
    </Router>
  );
}

export default App;
