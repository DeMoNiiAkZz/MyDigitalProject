import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaUsers, FaHome, FaCalendar, FaBook, FaChevronRight, FaChevronDown, FaBars } from "react-icons/fa";
import { IoDocumentsOutline, IoExitOutline } from "react-icons/io5";
import '../styles/style.css';

function Sidebar({ role }) {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const basculerDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const basculerSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <button className="btn text-light d-md-none" onClick={basculerSidebar}>
        <FaBars />
      </button>
      <div className={`sidebar d-flex flex-column p-3 bg-light ${showSidebar ? 'show' : ''}`}>
        <img src="/assets/images/logo_les_audacieuses_orange.png" alt="Profile" className="img-fluid" />
        <ul className="nav flex-column fs-5 link mt-4">

          {role === "admin" && (
            <>
              <li className="nav-item p-2">
                <Link className={`nav-link ${location.pathname === "/admin/profil" ? "active" : ""}`} to="/admin/profil">
                  <FaUser className="mb-2 me-2" size={30} />  Profil
                </Link>
              </li>

              <li className="nav-item p-2">
                <Link className={`nav-link ${location.pathname === "/admin" ? "active" : ""}`} to="/admin">
                  <FaHome className="mb-1 me-2" size={30} /> Accueil
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className={`nav-link ${location.pathname === "/admin/clients" ? "active" : ""}`} to="/admin/clients">
                  <FaUsers className="mb-1 me-2" size={30} /> Clients
                </Link>
              </li>
              <li className="nav-item p-2">
                <div className="nav-link d-flex align-items-center" onClick={basculerDropdown} style={{ cursor: "pointer" }}>
                  <FaBook className="me-2" size={30} /> Ressources
                  {showDropdown ? <FaChevronDown className="mx-2 mt-1" size={15} /> : <FaChevronRight className="mx-2 mt-1" size={15} />}
                </div>
                {showDropdown && (
                  <ul className="nav flex-column ms-3">
                    <li className="nav-item p-2">
                      <Link className={`nav-link ${location.pathname === "/admin/modules" ? "active" : ""}`} to="/admin/modules">
                        Modules
                      </Link>
                    </li>
                    <li className="nav-item p-2">
                      <Link className={`nav-link ${location.pathname === "/admin/seances" ? "active" : ""}`} to="/admin/seances">
                        Séances
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item p-2">
                <Link className={`nav-link ${location.pathname === "/admin/planning" ? "active" : ""}`} to="/admin/planning">
                  <FaCalendar className="mb-2 me-2" size={30} /> Planning
                </Link>
              </li>
            </>
          )}

          {role === "client" && (
            <>
              <li className="nav-item p-2">
                <Link className={`nav-link ${location.pathname === "/profil" ? "active" : ""}`} to="/profil">
                  <FaUser  className="mb-2 me-2" /> Profil
                </Link>
              </li>

              <li className="nav-item p-2">
                <Link className={`nav-link ${location.pathname === "/client" ? "active" : ""}`} to="/client">
                  <FaHome  className="mb-2 me-2" /> Accueil
                </Link>
              </li>

              <li className="nav-item p-2">
                <Link className={`nav-link ${location.pathname === "/planning" ? "active" : ""}`} to="/planning">
                  <FaCalendar  className="mb-2 me-2" /> Mon Planning
                </Link>
              </li>

              <li className="nav-item p-2">
                <Link className={`nav-link ${location.pathname === "/modules" ? "active" : ""}`} to="/modules">
                  <FaBook  className="mb-2 me-2" /> Mes Modules
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className={`nav-link ${location.pathname === "/documents" ? "active" : ""}`} to="/documents">
                  <IoDocumentsOutline  className="mb-2 me-2" /> Mes Documents
                </Link>
              </li>
              <hr />
            </>
          )}

        </ul>
        <li className="nav-item mt-auto fs-5 link my-4">
          <Link className="nav-link text-danger" to="/">
            <IoExitOutline className="mb-1"/> Déconnexion
          </Link>
        </li>

      </div>
      {showSidebar && <div className="overlay" onClick={basculerSidebar}></div>}
    </>
  );
}

export default Sidebar;