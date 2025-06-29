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
    function retornaAtividadeId() {
        const todosOsIds = atividades.map(a => a.id);
        if (todosOsIds.length === 0) {
            return 1;
        } else {
            const maiorId = Math.max(...todosOsIds);
            return maiorId + 1;
        }
    }
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

  function retornaPrioridade(prioridade) {
      const prioridades = {
          1: {
              prioridade: "Baixa",
              icone: "fa-solid fa-face-smile"
          },
          2: {
              prioridade: "Normal",
              icone: "fa-solid fa-face-meh"
          },
          3: {
              prioridade: "Alta",
              icone: "fa-solid fa-face-frown-open"
          }
      }
      const prioridadeNaoDefinida = {
          prioridade: "Não definida",
          icone: ""
      }
      if (!prioridades[prioridade]) return prioridadeNaoDefinida;
      return prioridades[prioridade];
  }

  function deletarAtividade(id) {
        const atividadesFiltradas = atividades.filter(a => a.id !== id);
        setAtividades([...atividadesFiltradas]);
  }

  return (
      <>
          <form className="row g-3 mb-2">
              <div className="col-sm-4">
                  <input type="number" className="form-control" id="id" readOnly value={retornaAtividadeId()} />
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
                          <h6>
                              Prioridade:
                              <i className={retornaPrioridade(a.prioridade).icone + " mx-1"}></i>
                              {retornaPrioridade(a.prioridade).prioridade}
                          </h6>
                      </div>
                      <p className="card-text">{a.id} - {a.descricao}</p>
                      <div className="d-flex justify-content-end">
                          <button className="btn btn-sm btn-outline-primary"><i className="fas fa-pen"></i> editar</button>
                          <button
                              className="btn btn-sm btn-outline-danger ms-2"
                              onClick={() => deletarAtividade(a.id)}>
                              <i className="fas fa-trash"></i> excluir
                          </button>
                      </div>
                  </div>
              </div>
          ))}
      </>
  );
}

export default App;












