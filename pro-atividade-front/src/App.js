import './App.css';
import { useState, useEffect } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";
import api from './api/atividade';

function App() {
    const [atividades, setAtividades] = useState([]);
    const [atividadeForm, setAtividadeForm] = useState({});

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
            atividadeForm={atividadeForm}
            setAtividadeForm={setAtividadeForm}
          />

          {atividades.map(atividade => (
              <AtividadeLista
                key={atividade.id}
                atividades={atividades}
                atividade={atividade}
                setAtividades={setAtividades}
                setAtividadeForm={setAtividadeForm}
              />
          ))}
      </>
  );
}

export default App;












