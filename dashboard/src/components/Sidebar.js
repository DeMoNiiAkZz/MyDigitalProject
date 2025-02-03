import React from "react";
import { Link } from "react-router-dom";


function Sidebar({ role }) {
  return (
    <div className="d-flex flex-column p-3 bg-light vh-100" style={{ width: "250px" }}>
      <h2>{role === "admin" ? "Admin Panel" : "Espace Client"}</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to={role === "admin" ? "/admin" : "/"}>
            📊 Dashboard
          </Link>
          <Link className="nav-link" to={role === "admin" ? "/testadmin" : "/404"}>
            TEST
          </Link>
        </li>
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
