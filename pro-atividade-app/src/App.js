import './App.css';
import {useState} from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";

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
    const [atividadeSelecionada, setAtividadeSelecionada] = useState({});
  return (
      <>
          <AtividadeForm
            atividades={atividades}
            setAtividades={setAtividades}
            atividadeSelecionada={atividadeSelecionada}
          />

          {atividades.map(atividade => (
              <AtividadeLista
                key={atividade.id}
                atividades={atividades}
                atividade={atividade}
                setAtividades={setAtividades}
                setAtividadeSelecionada={setAtividadeSelecionada}
              />
          ))}
      </>
  );
}

export default App;












