export default function AtividadeLista({atividades, atividade, setAtividades, setAtividadeSelecionada}) {
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
        return prioridades[prioridade] ?? prioridadeNaoDefinida;
    }

    function deletarAtividade(id) {
        const atividadesFiltradas = atividades.filter(a => a.id !== id);
        setAtividades([...atividadesFiltradas]);
    }

    function selecionarAtividade(id) {
        const atividade = atividades.filter(a => a.id === id);
        console.log(...atividade);
        setAtividadeSelecionada(...atividade);
    }

    return (
        <div className="card mb-2 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title"><span className="badge rounded-pill bg-primary">
                        {atividade.id}</span> - {atividade.titulo}
                    </h5>
                    <h6>
                        Prioridade:
                        <i className={retornaPrioridade(atividade.prioridade).icone + " mx-1"}></i>
                        {retornaPrioridade(atividade.prioridade).prioridade}
                    </h6>
                </div>
                <p className="card-text">{atividade.id} - {atividade.descricao}</p>
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => selecionarAtividade(atividade.id)}
                    >
                        <i className="fas fa-pen"></i> editar
                    </button>
                    <button
                        className="btn btn-sm btn-outline-danger ms-2"
                        onClick={() => deletarAtividade(atividade.id)}>
                        <i className="fas fa-trash"></i> excluir
                    </button>
                </div>
            </div>
        </div>
    );
}