import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const DataSeances = [
  { id: 1, name: "Séance 1", description: "Description de la séance 1" },
  { id: 2, name: "Séance 2", description: "Description de la séance 2" },
  { id: 3, name: "Séance 3", description: "Description de la séance 3" },
  { id: 4, name: "Séance 4", description: "Description de la séance 4" }
];

const DataContenu = [
  { id: 1, type: "titre", ordre: 1, contenu: "Je suis un titre", id_seance: 1 },
  { id: 1, type: "texte", ordre: 2, contenu: "Je suis une descrription", id_seance: 1 },
  { id: 1, type: "titre", ordre: 3, contenu: "Quiz 1", id_seance: 1 },
  { id: 1, type: "saisi-text", ordre: 4, contenu: "Repondez ici", id_seance: 1 },
  { id: 1, type: "titre", ordre: 5, contenu: "Je suis un titre 2", id_seance: 1 },
  { id: 1, type: "texte", ordre: 6, contenu: "Je suis une descrription 2", id_seance: 1 },
  { id: 1, type: "titre", ordre: 7, contenu: "Quiz 2", id_seance: 1 },
  { id: 1, type: "saisi-text", ordre: 8, contenu: "Repondez ici", id_seance: 1 },
  { id: 2, type: "titre", ordre: 1, contenu: "Je suis un titre", id_seance: 2 },
  { id: 2, type: "texte", ordre: 3, contenu: "Je suis une description", id_seance: 2 },
  { id: 2, type: "saisi-text", ordre: 2, contenu: "Repondez ici", id_seance: 2 },
  { id: 2, type: "titre", ordre: 4, contenu: "Je suis un titre 2", id_seance: 2 },
  
];

function Seances() {

  const { id_seance } = useParams();
  const seance = DataSeances.find((seance) => seance.id === parseInt(id_seance));
  const contenuSeance = DataContenu.filter((contenu) => contenu.id_seance === parseInt(id_seance));

  if (!module) {
    return <h2 className="text-white">Module introuvable</h2>;
  }

  const renderContenu = (contenu) => {
    switch (contenu.type) {
      case "titre":
        return <h3 key={contenu.ordre}>{contenu.contenu}</h3>;
      case "texte":
        return <p key={contenu.ordre}>{contenu.contenu}</p>;
      case "saisi-text":
        return <input key={contenu.ordre} type="text" placeholder={contenu.contenu} />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex">
      <Sidebar role="client" />
      <div className="container mt-4">
        <h1 className="text-white">Ma séance</h1>

        <div className="box">
          <img src="/assets/images/modules.png" className="img-fluid rounded h-50" alt="logo" />
          <h2 >{seance.name}</h2>
          <p>{seance.description}</p>
        </div>

        <div className="box">
          {contenuSeance.map(renderContenu)}
        </div>



      </div>
    </div>
  );
}

export default Seances;
