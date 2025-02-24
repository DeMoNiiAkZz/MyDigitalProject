import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const DataModules = [
  { id: 1, name: "Module 1", description: "Description du module 1" },
  { id: 2, name: "Module 2", description: "Description du module 2" },
  { id: 3, name: "Module 3", description: "Description du module 3" },
  { id: 4, name: "Module 4", description: "Description du module 4" }
];

function Modules() {
 
  return (
    <div className="d-flex">
      <Sidebar role="client" />
      <div className="container mt-4">
        <h1 className="text-white">Mes Modules</h1>

        <div className="box">
          <div className="row">
            {DataModules.map((module) => (
              <div key={module.id} className="col-4 col-sm-12 col-md-4">
                
                <Link to={`/module/${module.id}`} className="text-decoration-none">
                  <div className="Module p-2 mb-4">
                    <img src="./assets/images/modules.png" className="img-fluid rounded" alt="logo" />
                    <h3>{module.name}</h3>
                    <p>{module.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modules;
