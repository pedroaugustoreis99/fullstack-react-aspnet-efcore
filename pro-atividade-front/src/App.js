import './App.css';
import { useState, useEffect } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";
import api from './api/atividade';

function App() {
    const [atividades, setAtividades] = useState([]);
    const [atividadeSelecionada, setAtividadeSelecionada] = useState({});

    const requestAtividades = async () => {
        const response = await api.get('atividade');
        return response.data;
    }

    useEffect(() => {
        const getAtividades = async () => {
            const todasAtividades = await requestAtividades();
            if (todasAtividades) setAtividades(todasAtividades);
        }
        getAtividades();
    }, []);

  return (
      <>
          <AtividadeForm
            atividades={atividades}
            setAtividades={setAtividades}
            atividadeSelecionada={atividadeSelecionada}
            setAtividadeSelecionada={setAtividadeSelecionada}
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












