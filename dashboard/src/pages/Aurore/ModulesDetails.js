import React from "react";
import Sidebar from "../../components/Sidebar";


const DataModules = [
  {
    id: 1,
    name: "Module 1",
    description: "Description du module 1",
    image: "logo192.png"
  },
  {
    id: 2,
    name: "Module 2",
    description: "Description du module 2",
    image: "logo192.png"
  },
  {
    id: 3,
    name: "Module 3",
    description: "Description du module 3",
    image: "logo192.png"
  },
  {
    id: 4,
    name: "Module 4",
    description: "Description du module 4",
    image: "logo192.png"
  }
]

function ModulesDetails() {
  return (
    <div className="d-flex">
      <Sidebar role="client" />
      <div className="container mt-4">
        <h1 className="text-white" > Mes Modules</h1>

        <div className="box">
          <h2> Mes Modules </h2>

          <div className='row'>
            {DataModules.map((module) =>
              <div className='col-md-4'>
                <div key={module.id} className="">
                  <img src={module.image} alt="logo" />
                  <h3>{module.name}</h3>
                  <p>{module.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>


    </div>

  );
}

export default ModulesDetails;
