import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import {FaUser} from "react-icons/fa";

function DetailsClient() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({

  })
  
  return (
      <div className="d-flex">
        <Sidebar role="admin" />
        <div className="container mt-4 px-5">
       
        </div>
      </div>
  );
}

export default DetailsClient;
