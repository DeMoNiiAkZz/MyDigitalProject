import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { FaUser } from "react-icons/fa";

function ProfilAdmin() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    dateNaissance: "",
    email: "",
    motDePasseActuel: "",
    nouveauMotDePasse: "",
    confirmerNouveauMotDePasse: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="d-flex">
      <Sidebar role="admin" />
      <div className="container mt-4">
        <h1><FaUser className="ms-2 mb-3" size={40} /> Profil</h1>

        <div className="box mb-4">
          <h2>Vos informations personnelles</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="nom" className="">Nom :</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  className=""
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="prenom" className="">Prénom :</label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  className=""
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="">Email :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=""
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="telephone" className="">Téléphone :</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  className=""
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="date" className="">Date de Naissance :</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className=""
                  value={formData.dateNaissance}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </form>
        </div>

        <div className="box mb-4">
          <h2>Changer le mot de passe</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12 mb-3">
                <label htmlFor="motDePasseActuel" className="">Mot de passe actuel :</label>
                <input
                  type="password"
                  id="motDePasseActuel"
                  name="motDePasseActuel"
                  className=""
                  value={formData.motDePasseActuel}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="nouveauMotDePasse" className="">Nouveau mot de passe :</label>
                <input
                  type="password"
                  id="nouveauMotDePasse"
                  name="nouveauMotDePasse"
                  className=""
                  value={formData.nouveauMotDePasse}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="confirmerNouveauMotDePasse" className="">Confirmer nouveau mot de passe :</label>
                <input
                  type="password"
                  id="confirmerNouveauMotDePasse"
                  name="confirmerNouveauMotDePasse"
                  className=""
                  value={formData.confirmerNouveauMotDePasse}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary p-2 fw-bold fs-5">Mettre à jour le profil</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfilAdmin;
