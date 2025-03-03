import React from "react";
import Sidebar from "../../components/Sidebar";
import Button from '@mui/material/Button';


function AdminDashboard() {
  return (
    <div className="d-flex">
      <Sidebar role="admin" />
      <div className="container mt-4 px-5">
        <h1> Tableau de bord Admin</h1>
        
        <div className="row">
         
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
