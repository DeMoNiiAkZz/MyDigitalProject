import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { FaUser } from "react-icons/fa";
import config from "../../config";

function DetailsClient() {
  const { id_client } = useParams();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/client?id_client=${id_client}`)
      .then((response) => {
        setClient(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Une erreur est survenue lors du chargement des données.");
        setLoading(false);
      });
  }, [id_client]);

  return (
    <>
      <div className="d-flex">
        <Sidebar role="admin" />
        <div className="container mt-4 px-5">
          <h1>
            <FaUser className="ms-2 mb-3" size={40} /> Détails du Client
          </h1>

          {loading && <p>Chargement...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {client && (
            <div className="box mb-4">
              <h2>Informations du Client</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="nom">Nom :</label>
                  <span>{client.nom}</span>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="prenom">Prénom :</label>
                  <span>{client.prenom}</span>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email">Email :</label>
                  <span>{client.email}</span>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="telephone">Téléphone :</label>
                  <span>{client.telephone}</span>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="date_naissance">Date de Naissance :</label>
                  <span>{client.date_naissance}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DetailsClient;
