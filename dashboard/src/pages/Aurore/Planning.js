import React from "react";
import Sidebar from "../../components/Sidebar";

// Données fictives
const DataPlanning = [
{
  id: 1,
  Titre: "Mon titre",
  ligne_planning : { Durée: "1h", Date: "2025-06-05", Phase: "1", Description: "Description de ma séance"}
},
{
  id: 2,
  Titre: "Mon titre",
  ligne_planning : { Durée: "2h", Date: "2025-06-16", Phase: "1", Description: "Description de ma séance"}
},
{
  id: 3,
  Titre: "Mon titre",
  ligne_planning : { Durée: "3h", Date: "2021-06-01", Phase: "1", Description: "Description de ma séance"}
},
{
  id: 4,
  Titre: "Mon titre",
  ligne_planning : { Durée: "4h", Date: "2021-06-14", Phase: "1", Description: "Description de ma séance"}
}  
]


function sortByDate(a, b) {
  return new Date(a.ligne_planning.Date) - new Date(b.ligne_planning.Date);
}


function Planning() {

  const headers = Object.keys(DataPlanning[0].ligne_planning);
  const sortedDataPlanning = [...DataPlanning].sort(sortByDate);
  const currentDate = new Date();

  const futureData = sortedDataPlanning.filter(item => new Date(item.ligne_planning.Date) >= currentDate);
  const pastData = sortedDataPlanning.filter(item => new Date(item.ligne_planning.Date) < currentDate);

  
  return (
    <div className="d-flex">
      <Sidebar role="client" />
      <div className="container mt-4">
        <h1 className="text-white">Votre planning d’accompagnement</h1>

       
        <div className="box">
          <div className="row">

          <h2 className=" mt-4"> Prochaine séances </h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {futureData.map((item) => (
                  <tr key={item.id}>
                    {headers.map((header, index) => (
                      <td key={index}>{item.ligne_planning[header]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 className=" mt-4">Séances passées</h2>
            <table className="table table-striped" style={{ opacity: 0.5 }}>
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pastData.map((item) => (
                  <tr key={item.id}>
                    {headers.map((header, index) => (
                      <td key={index}>{item.ligne_planning[header]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>




      </div>
    </div>
  );
}

export default Planning;
