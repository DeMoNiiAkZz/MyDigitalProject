import React from "react";
import Sidebar from "../../components/Sidebar";


function ClientsAdmin() {
  return (
    <div className="page-contenu">
      <div className="d-flex">
        <Sidebar role="admin" />
        <div className="container mt-4">
          <h1>Clients</h1>
          <div className="row">

          </div>
        </div>
      </div>
    </div>


  );
}

export default ClientsAdmin;
