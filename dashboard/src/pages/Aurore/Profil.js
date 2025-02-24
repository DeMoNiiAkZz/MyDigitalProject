import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../pages/Aurore/style.css";
import "../../styles/style.css";



function Profil() {
  return (
    <div className="d-flex">
      <Sidebar role="client" />
      <div className="container mt-4">

        <h1 className="text-white"> Profil </h1>

          <div className="box">
            <h2> Vos informations</h2>

            <form>  
              <div className='row'>
                <div className='col-md-6'>
                  <label for='name'>Name:</label>
                  <input type='text' id='name' name='name' required />
                </div>
                <div className='col-md-6'>
                  <label for='prenom'>Prenom:</label>
                  <input type='text' id='prenom' name='prenom' required />
                </div>
              </div>
            </form >
          </div>

          <div className="box">

            <h2> Informations de contacts </h2>

            <form>  
              <div className='row'>
                <div className='col-md-12'>
                  <label for='email'>Email :</label>
                  <input type='email' id='email' name='email' required />
                </div>
                <div className='col-md-12'>
                  <label for='numero'>Numero :</label>
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
