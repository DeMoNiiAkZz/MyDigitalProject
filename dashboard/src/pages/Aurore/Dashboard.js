import React from "react";
import Sidebar from "../../components/Sidebar";
import { FaHome } from "react-icons/fa";


function ClientDashboard() {
  return (
    <div className="d-flex">
      <Sidebar role="client" />
      <div className="container mt-4">
        <h1 className="text-white ms-3"> <FaHome size={30}/> Tableau de bord Client </h1>
        <div className="row">
         
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
