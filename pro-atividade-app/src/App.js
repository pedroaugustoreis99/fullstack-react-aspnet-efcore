import './App.css';
import {useState} from "react";

function App() {
    const [atividades, setAtividades] = useState([
        {
            id: 1,
            descricao: "Ler HQ de the walking dead"
        },
        {
            id: 2,
            descricao: "Ir pro Accioly assistir atlético x volta redonda"
        }
    ]);

  function addAtividade(e) {
      e.preventDefault();
      const atividade = {
          id: document.getElementById("id").value,
          descricao: document.getElementById("descricao").value
      }
      setAtividades([...atividades, atividade]);
  }

  return (
      <>
          <form className="row g-3 mb-2">
              <div className="col-sm-6">
                  <input type="number" className="form-control" id="id" placeholder="ID"/>
              </div>
              <div className="col-sm-6">
                  <input type="text" id="descricao" className="form-control" placeholder="Descrição"/>
              </div>
              <div className="col-12 d-flex justify-content-end">
                  <button onClick={addAtividade} className="btn btn-outline-success">Adicionar</button>
              </div>
          </form>

          {atividades.map(a => (
              <div className="card mb-2 shadow-sm" key={a.id}>
                  <div className="card-body">
                      <div className="d-flex justify-content-between">
                          <h5 className="card-title"><span className="badge rounded-pill bg-primary">{a.id}</span> - título</h5>
                          <h6>Prioridade: <i className="fa-solid fa-face-smile"></i></h6>
                      </div>
                      <p className="card-text">{a.id} - {a.descricao}</p>
                  </div>
              </div>
          ))}
      </>
  );
}

export default App;












