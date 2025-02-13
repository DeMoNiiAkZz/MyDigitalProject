import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ role }) {
  return (
    <div className="d-flex flex-column p-3 bg-light vh-100" style={{ width: "350px" }}>
      <h2>{role === "admin" ? "Admin Panel" : "Espace Client"}</h2>
      <ul className="nav flex-column">
        
        {role === "admin" && (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                📊 Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/users">
                👥 Gestion des utilisateurs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/settings">
                ⚙️ Paramètres
              </Link>
            </li>
          </>
        )}

        
        {role === "client" && (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/client">
                🏠 Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/documents">
                📄 Documents
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profil">
                👤 Profil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/modules">
                📚 Modules
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planning">
                🗓️ Planning
              </Link>
            </li>
          </>
        )}

        
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/">
            🚪 Déconnexion
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
