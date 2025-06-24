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
        <form>
          <input type="number" id="id" placeholder="ID" />
          <input type="text" id="descricao" placeholder="Descrição" />
          <button onClick={addAtividade}>Adicionar</button>
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












