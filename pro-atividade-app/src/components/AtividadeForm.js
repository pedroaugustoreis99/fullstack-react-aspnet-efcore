export default function AtividadeForm() {
    return (
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
    );
}