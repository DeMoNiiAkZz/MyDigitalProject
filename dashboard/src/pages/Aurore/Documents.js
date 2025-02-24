import React from "react";
import Sidebar from "../../components/Sidebar";
import { FaFilePdf } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";


const DataClients = [
  { id: 1, name: "Jean Dupont", email: " ", phone: " ", address: " " },
];

const DataDocuments = [
  { id: 1, name: "CV", url: "test.pdf", date: "", id_client: 1 },
  { id: 2, name: "LM", url: "", date: "", id_client: 1 },
  { id: 3, name: "Diplome", url: "", date: "", id_client: 1 },
  { id: 4, name: "Permis de conduire", url: "", date: "", id_client: 1 },
  { id: 5, name: "Carte d'identité", url: "", date: "", id_client: 2 },
  { id: 6, name: "Carte d'identité", url: "", date: "", id_client: 3 },
];


function Documents() {
  return (
    <div className="d-flex">
      <Sidebar role="client" />
      <div className="container mt-4">
        <h1><IoDocument className="ms-2 mb-3" size={40}/> Documents</h1>
        <div className="row">
          {DataDocuments.map((document) => (
            <div key={document.id} className="col-4 col-sm-12 col-md-4 ">
                <div className="box p-2 mb-4">
                  <h3>{document.name}</h3>
                  <p> Date: {document.date}</p>
                  <div className="text-decoration-none"><FaFilePdf/><a href={document.url} download className="text-decoration-none">Télécharger le document</a></div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Documents;
