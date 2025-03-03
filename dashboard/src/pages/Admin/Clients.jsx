import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import {useNavigate} from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const clientsData = [
  { id: 1, nom: "Dupont", prenom: "Jean", email: "jean.dupont@example.com" },
  { id: 2, nom: "Martin", prenom: "Sophie", email: "sophie.martin@example.com" },
  { id: 3, nom: "Durand", prenom: "Paul", email: "paul.durand@example.com" },
  { id: 4, nom: "Lefevre", prenom: "Emma", email: "emma.lefevre@example.com" },
  { id: 5, nom: "Morel", prenom: "Lucas", email: "lucas.morel@example.com" },
  { id: 6, nom: "Simon", prenom: "Clara", email: "clara.simon@example.com" },
  { id: 7, nom: "Roux", prenom: "Hugo", email: "hugo.roux@example.com" },
  { id: 8, nom: "Fournier", prenom: "Léa", email: "lea.fournier@example.com" },
  { id: 9, nom: "Girard", prenom: "Noah", email: "noah.girard@example.com" },
  { id: 10, nom: "Andre", prenom: "Julie", email: "julie.andre@example.com" },
  { id: 11, nom: "Mercier", prenom: "Tom", email: "tom.mercier@example.com" },
  { id: 12, nom: "Dupuis", prenom: "Chloé", email: "chloe.dupuis@example.com" },
  { id: 13, nom: "Lemoine", prenom: "Nathan", email: "nathan.lemoine@example.com" },
];

function ClientsAdmin() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  const filtreClients = search.length >= 3
    ? clientsData.filter(client =>
        client.nom.toLowerCase().includes(search.toLowerCase()) ||
        client.prenom.toLowerCase().includes(search.toLowerCase()) ||
        client.email.toLowerCase().includes(search.toLowerCase())
      )
    : clientsData.slice(0, 12);

  return (
    <div className="page-contenu">
      <div className="d-flex">
        <Sidebar role="admin" />
        <div className="container mt-4 px-5 ">
          <h1>Clients</h1>
          
          <div className="d-flex justify-content-between align-items-center mb-3">
            <input
              type="text"
              className="form-control me-2 bg-primary text-white border-0 w-75 rounded-pill p-3"
              placeholder="Rechercher un client..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
             
            />
            <button className="btn btn-primary btn-lg rounded-pill" onClick={() => navigate("/admin/client/add")}>
              <FaPlus className="me-2" /> Ajouter un client
            </button>
          </div>
          
          <div className="row mt-5">
            {filtreClients.map(client => (
              <div key={client.id} onClick={() => navigate(`/admin/client/details/${client.id}`)} className="col-lg-4 col-md-6 mb-3 choisir-carte">
                <div className="card shadow-sm p-3 rounded-4">
                  <div className="card-body">
                    <h5 className="card-title">{client.prenom} {client.nom}</h5>
                    <p className="card-text">{client.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsAdmin;