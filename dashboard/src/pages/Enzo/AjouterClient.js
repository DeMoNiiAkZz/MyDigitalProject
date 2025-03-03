import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import {FaUser} from "react-icons/fa";

function AddClient() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    telephone: "",
    email: "",
  });

  const inputChangement = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const envoieForm = (e) => {
    e.preventDefault();
    console.log("Données soumises :", formData);
    navigate("/admin/clients");
  };

  return (
      <div className="d-flex">
        <Sidebar role="admin" />
        <div className="container mt-4 px-5">
          <h1><FaUser className="ms-2 mb-3" size={40} /> Ajouter un client</h1>
          <form onSubmit={envoieForm} className="box rounded shadow-sm">
            <div className="mb-3">
              <label className="">Nom</label>
              <input type="text" className="" name="nom" value={formData.nom} onChange={inputChangement} required />
            </div>
            <div className="mb-3">
              <label className="">Prénom</label>
              <input type="text" className="" name="prenom" value={formData.prenom} onChange={inputChangement} required />
            </div>
            <div className="mb-3">
              <label className="">Date de naissance</label>
              <input type="date" className="" name="dateNaissance" value={formData.dateNaissance} onChange={inputChangement} required />
            </div>
            <div className="mb-3">
              <label className="">Téléphone (facultatif)</label>
              <input type="tel" className="" name="telephone" value={formData.telephone} onChange={inputChangement} />
            </div>
            <div className="mb-3">
              <label className="">Adresse email</label>
              <input type="email" className="" name="email" value={formData.email} onChange={inputChangement} required />
            </div>
            <div className="mb-3 text-center">

            <button type="submit" className="btn btn-primary btn-lg rounded-pill w-50">Ajouter un client</button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default AddClient;
