import React from "react";
import Sidebar from "../../components/Sidebar";
import { useParams, Link } from "react-router-dom";


const DataModules = [
  { id: 1, name: "Module 1", description: "Description du module 1" },
  { id: 2, name: "Module 2", description: "Description du module 2" },
  { id: 3, name: "Module 3", description: "Description du module 3" },
  { id: 4, name: "Module 4", description: "Description du module 4" }
];

const DataSeances = [
  { id: 1, name: "Séance 1", description: "Description de la séance 1" },
  { id: 2, name: "Séance 2", description: "Description de la séance 2" },
  { id: 3, name: "Séance 3", description: "Description de la séance 3" },
  { id: 4, name: "Séance 4", description: "Description de la séance 4" }
];

function ModulesDetails() {
  const { id_module } = useParams();
  const module = DataModules.find((module) => module.id === parseInt(id_module));

  if (!module) {
    return <h2 className="text-white">Module introuvable</h2>;
  }

  return (
    <div className="page-contenu">
      <div className="d-flex">
        <Sidebar role="client" />

        <div className="container mt-4">

          <h1 className="text-white">Mes Modules</h1>

          <div className="box">
            <img src="/assets/images/modules.png" className="img-fluid rounded h-50" alt="logo" />
            <h2 >{module.name}</h2>
            <p>{module.description}</p>
          </div>

          <div className="box">
            <div className="row">
              {DataSeances.map((seance) => (
                <div key={seance.id} className="col-4 col-sm-12 col-md-4">

                  <Link to={`/seance/${seance.id}`} className="text-decoration-none">
                    <div className="Module p-2 mb-4">
                      <img src="/assets/images/modules.png" className="img-fluid rounded" alt="logo" />
                      <h3>{seance.name}</h3>
                      <p>{seance.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ModulesDetails;
