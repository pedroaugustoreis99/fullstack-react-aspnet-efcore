import api from '../api/atividade';

export default function AtividadeLista({
    atividades,
    atividade,
    setAtividades,
    setAtividadeForm
}) {
    function retornaPrioridade(prioridade) {
        switch (prioridade) {
            case 1:
                return {
                    prioridade: "Baixa",
                    icone: "fa-solid fa-face-smile"
                }
            case 2:
                return {
                    prioridade: "Normal",
                    icone: "fa-solid fa-face-meh"
                }
            case 3:
                return {
                    prioridade: "Alta",
                    icone: "fa-solid fa-face-frown-open"
                }
            default:
                return {
                    prioridade: "Não definida",
                    icone: ""
                }
        }
    }
    
    const deletarAtividade = async (id) => {
        const response = await api.delete(`atividade/${id}`);
        if (response.status == 204) {
            const atividadesFiltradas = atividades.filter(a => a.id !== id);
            setAtividades([...atividadesFiltradas]);
        } else
            alert("Erro ao excluir atividade");
    }

    function selecionarAtividade(id) {
        const atividade = atividades.find(a => a.id === id);
        setAtividadeForm(atividade);
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