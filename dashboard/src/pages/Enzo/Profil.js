import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";

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

  // Fonction pour gérer le changement des valeurs dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Fonction de soumission (pour le moment juste un log dans la console)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="d-flex">
      <Sidebar role="admin" />
      <div className="container mt-4">
        <h1>🏢 Profil</h1>
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="prenom" className="form-label">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="telephone" className="form-label">Téléphone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="dateNaissance" className="form-label">Date de naissance</label>
                <input
                  type="date"
                  className="form-control"
                  id="dateNaissance"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="motDePasseActuel" className="form-label">Mot de passe actuel</label>
                <input
                  type="password"
                  className="form-control"
                  id="motDePasseActuel"
                  name="motDePasseActuel"
                  value={formData.motDePasseActuel}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="nouveauMotDePasse" className="form-label">Nouveau mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="nouveauMotDePasse"
                  name="nouveauMotDePasse"
                  value={formData.nouveauMotDePasse}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmerNouveauMotDePasse" className="form-label">Confirmer nouveau mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmerNouveauMotDePasse"
                  name="confirmerNouveauMotDePasse"
                  value={formData.confirmerNouveauMotDePasse}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">Mettre à jour</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilAdmin;
