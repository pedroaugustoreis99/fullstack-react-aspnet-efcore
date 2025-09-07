import api from '../api/atividade';

export default function AtividadeForm({
    atividades,
    setAtividades,
    atividadeForm,
    setAtividadeForm
}) {
    const addAtividade = async (e) => {
        e.preventDefault();
        
        atividadeForm.prioridade = parseInt(atividadeForm.prioridade);

        console.log(atividadeForm);
        const response = await api.post('atividade', atividadeForm);
        if (response.status == 201) 
            setAtividades([...atividades, response.data]);
        setAtividadeForm({});
            
    }

    function inputTextHandler(e) {
        const {name, value} = e.target;
        setAtividadeForm({...atividadeForm, [name]: value});
    }

    function handleCancelar() {
        setAtividadeForm({});
    }

    const handleSalvarEdicao = async (e) => {
        e.preventDefault();

        const response = await api.put(`atividade/${atividadeForm.id}`, atividadeForm);

        setAtividades(atividades.map(a => a.id === atividadeForm.id ? atividadeForm : a));
        setAtividadeForm({});
    }

    return (
        <form className="row g-3 mb-2">
            <div className="col-sm-9">
                <input type="text" id="titulo" name="titulo" onChange={inputTextHandler} value={atividadeForm.titulo ?? ''} className="form-control" placeholder="Título"/>
            </div>
            <div className="col-sm-3">
                <select id="prioridade" name="prioridade" onChange={inputTextHandler} value={atividadeForm.prioridade ?? 0} className="form-select">
                    <option defaultValue="0">Selecione a prioridade</option>
                    <option value="1">Baixa</option>
                    <option value="2">Normal</option>
                    <option value="3">Alta</option>
                </select>
            </div>
            <div className="col-sm-12">
                <textarea type="text" id="descricao" name="descricao" onChange={inputTextHandler} value={atividadeForm.descricao ?? ''} className="form-control" placeholder="Descrição"></textarea>
            </div>
            <div className="col-12 d-flex justify-content-end">
                {
                    atividadeForm.id === undefined ?
                        <button onClick={addAtividade} className="btn btn-outline-success"><i className="fas fa-plus me-2"></i>Adicionar</button> :
                        <>
                            <button onClick={handleSalvarEdicao} className="btn btn-outline-success me-2"><i className="fas fa-plus me-2"></i>Salvar</button>
                            <button onClick={handleCancelar} className="btn btn-outline-warning"><i className="fas fa- me-2"></i>Cancelar</button>
                        </>
                }
            </div>
        </form>
    );
}