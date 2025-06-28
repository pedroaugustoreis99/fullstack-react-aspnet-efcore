import './App.css';
import {useState} from "react";

function App() {
    const [atividades, setAtividades] = useState([
        {
            id: 1,
            prioridade: 1,
            titulo: "Leitura",
            descricao: "Ler HQ de the walking dead"
        },
        {
            id: 2,
            prioridade: 3,
            titulo: "Assistir o dragão",
            descricao: "Ir pro Accioly assistir atlético x volta redonda"
        }
    ]);

  function addAtividade(e) {
      e.preventDefault();
      const atividade = {
          id: document.getElementById("id").value,
          prioridade: document.getElementById("prioridade").value,
          titulo: document.getElementById("titulo").value,
          descricao: document.getElementById("descricao").value
      }
      setAtividades([...atividades, atividade]);
  }

  return (
      <>
          <form className="row g-3 mb-2">
              <div className="col-sm-4">
                  <input type="number" className="form-control" id="id" placeholder="ID"/>
              </div>
              <div className="col-sm-8">
                  <select id="prioridade" className="form-select">
                      <option defaultValue="0">Selecione a prioridade</option>
                      <option value="1">Baixa</option>
                      <option value="2">Normal</option>
                      <option value="3">Alta</option>
                  </select>
              </div>
              <div className="col-sm-12">
                  <input type="text" id="titulo" className="form-control" placeholder="Título"/>
              </div>
              <div className="col-sm-12">
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
                      <h5 className="card-title"><span className="badge rounded-pill bg-primary">{a.id}</span> - {a.titulo}</h5>
                          <h6>Prioridade: <i className="fa-solid fa-face-smile"></i> {a.prioridade}</h6>
                      </div>
                      <p className="card-text">{a.id} - {a.descricao}</p>
                      <div className="d-flex justify-content-end">
                          <button className="btn btn-sm btn-outline-primary"><i className="fas fa-pen"></i> editar</button>
                          <button className="btn btn-sm btn-outline-danger ms-2"><i className="fas fa-trash"></i> excluir</button>
                      </div>
                  </div>
              </div>
          ))}
      </>
  );
}

export default App;












