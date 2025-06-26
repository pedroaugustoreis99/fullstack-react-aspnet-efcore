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
        <form className="row g-3">
            <div className="col-sm-6">
                <input type="number" className="form-control" id="id" placeholder="ID" />
            </div>
            <div className="col-sm-6">
                <input type="text" id="descricao" className="form-control" placeholder="Descrição" />
            </div>
            <div className="col-12 d-flex justify-content-end">
                <button onClick={addAtividade} className="btn btn-outline-success">Adicionar</button>
            </div>
        </form>
        <div className="mt-3">
          <ul className="list-group">
            {atividades.map(a => (
                <li key={a.id} className="list-group-item">{a.id} - {a.descricao}</li>
            ))}
          </ul>
        </div>
      </>
  );
}

export default App;












