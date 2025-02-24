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

            
                <div className="col-12 mt-3"> Vous souhaitez modifier votre mot de passe ? </div>

                <div className='col-md-4'>
                  <label htmlFor='mot_de_passe'>Mot de passe :</label>
                  <input type='password' id='mot_de_passe' name='mot_de_passe' required />
                </div>
                <div className='col-md-4'>
                  <label htmlFor='nouveau_mot_de_passe'>Nouveau mot de passe :</label>
                  <input type='password' id='nouveau_mot_de_passe' name='nouveau_mot_de_passe' required />
                </div>
                <div className='col-md-4'>
                  <label htmlFor='confirmer_nouveau_mot_de_passe'>Confirmer nouveau mot de passe :</label>
                  <input type='password' id='confirmer_nouveau_mot_de_passe' name='confirmer_nouveau_mot_de_passe' required />
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
         
        </div>
      </div>
    
  );
}

export default Profil;
