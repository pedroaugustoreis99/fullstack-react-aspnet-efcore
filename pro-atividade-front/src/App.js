import './App.css';
import { useState, useEffect } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";
import api from './api/atividade';
import { Button, Modal } from 'react-bootstrap';

function App() {
    const [showAtividadeModal, setAtividadeModalShow] = useState(false);

    const handleModalAtividadeShow = () => setAtividadeModalShow(true);
    const handleModalAtividadeClose = () => {
        setAtividadeModalShow(false);
        setAtividadeForm({});
    }

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
          <Button 
              variant="outline-primary" 
              size="lg"
              className="mb-4 px-4 py-2 d-block mx-auto"
              onClick={handleModalAtividadeShow}
          >
              <i className="fas fa-plus-circle me-2"></i>
              Nova Atividade
          </Button>

          <Modal show={showAtividadeModal} onHide={handleModalAtividadeClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {atividadeForm.id === undefined ? (
                    <>
                        <i className="fas fa-plus-circle me-2 text-primary"></i>
                        Criar Nova Atividade
                    </>
                  ) : (
                    <>Editar atividade {atividadeForm.id}</>
                  )}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AtividadeForm
                    atividades={atividades}
                    setAtividades={setAtividades}
                    atividadeForm={atividadeForm}
                    setAtividadeForm={setAtividadeForm}
                    handleModalAtividadeClose={handleModalAtividadeClose}
                />
              </Modal.Body>
          </Modal>

          {atividades.length !== 0 ? (
              atividades.map(atividade => (
                  <AtividadeLista
                      key={atividade.id}
                      atividades={atividades}
                      atividade={atividade}
                      setAtividades={setAtividades}
                      setAtividadeForm={setAtividadeForm}
                      handleModalAtividadeShow={handleModalAtividadeShow}
                  />
              ))
          ) : (
              <p className='text-center'>Nenhuma atividade cadastrada</p>
          )}
      </>
  );
}

export default App;












