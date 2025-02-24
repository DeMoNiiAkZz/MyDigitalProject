import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHome, FaCalendar, FaBook } from "react-icons/fa";
import { IoDocumentsOutline, IoExitOutline  } from "react-icons/io5";

function Sidebar({ role }) {
  return (
    <div className="d-flex flex-column p-3 bg-light vh-100" style={{ width: "350px" }}>
      <h2>{role === "admin" ? "Admin Panel" : "Espace Client"}</h2>
      <ul className="nav flex-column">

        {role === "admin" && (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/profil">
                <FaUser /> Profil
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/client">
                <FaHome /> Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/settings">
                 Paramètres
              </Link>
            </li>
          </>
        )}


        {role === "client" && (
          <>

            <li className="nav-item">
              <Link className="nav-link" to="/profil">
                <FaUser /> Profil
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/client">
                <FaHome /> Accueil
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/planning">
                <FaCalendar /> Mon Planning
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/modules">
                <FaBook /> Mes Modules
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/documents">
                <IoDocumentsOutline /> Mes  Documents
              </Link>
            </li>
            <hr />


          </>
        )}


        <li className="nav-item">
          <Link className="nav-link text-danger" to="/">
            <IoExitOutline />  Déconnexion
          </Link>
        </li>
      </ul>
    </div >
  );
}

export default Sidebar;
