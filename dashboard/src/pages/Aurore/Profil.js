import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../pages/Aurore/style.css";
import "../../styles/style.css";
import { FaUser } from "react-icons/fa";



function Profil() {
  return (
    <div className="d-flex">
      <Sidebar role="client" />
      <div className="container mt-4">

        <h1 className="text-white ms-3"> <FaUser size={30}/> Profil </h1>

          <div className="box">
             <h2> Vos informations</h2>

            <form>  
              <div className='row'>
                <div className='col-md-6'>
                  <label for='name'>Nom </label>
                  <input type='text' id='name' name='name' required />
                </div>
                <div className='col-md-6'>
                  <label for='prenom'>Prenom</label>
                  <input type='text' id='prenom' name='prenom' required />
                </div>
                <div className='col-md-12'>
                  <label htmlFor='date_naissance'>Date de naissance:</label>
                  <input type='date' id='date_naissance' name='date_naissance' required />
                </div>

              </div>
            </form >
          </div>

          <div className="box">

            <h2> Informations de contacts </h2>

            <form>  
              <div className='row'>
                <div className='col-md-12'>
                  <label for='email'>Email </label>
                  <input type='email' id='email' name='email' required />
                </div>
                <div className='col-md-12'>
                  <label for='numero'>Numero </label>
                  <input type='tel' id='numero' name='numero' required />
                </div>
              </div>
            </form >

          </div>


        <div className="box mb-4">
          <h2>Changer le mot de passe</h2>
          <form >
            <div className="row">
              <div className="col-md-12 mb-3">
                <label htmlFor="motDePasseActuel" className="">Mot de passe actuel :</label>
                <input
                  type="password"
                  id="motDePasseActuel"
                  name="motDePasseActuel"
                  className=""
                  
                   
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

export default Profil;
