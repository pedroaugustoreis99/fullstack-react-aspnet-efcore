import { useState, useEffect } from "react";

const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: ''
}

export default function AtividadeForm(props) {
    const [atv, setAtv] = useState(atividadeAtual());

    useEffect(() => {
        if (props.atividadeSelecionada.id !== 0)
            setAtv(props.atividadeSelecionada);
    }, [props.atividadeSelecionada]);

    function addAtividade(e) {
        e.preventDefault();
        const atividade = {
            id: retornaAtividadeId(),
            prioridade: document.getElementById("prioridade").value,
            titulo: document.getElementById("titulo").value,
            descricao: document.getElementById("descricao").value
        }
        props.setAtividades([...props.atividades, atividade]);
    }

    function atividadeAtual() {
        if (props.atividadeSelecionada.id !== 0) {
            return props.atividadeSelecionada;
        } else {
            return atividadeInicial;
        }
    }

    function retornaAtividadeId() {
        const todosOsIds = props.atividades.map(a => a.id);
        if (todosOsIds.length === 0) {
            return 1;
        } else {
            const maiorId = Math.max(...todosOsIds);
            return maiorId + 1;
        }
    }

    function inputTextHandler(e) {
        const {name, value} = e.target;
        setAtv({...atv, [name]: value});
    }

    return (
        <form className="row g-3 mb-2">
            <div className="col-sm-9">
                <input type="text" id="titulo" name="titulo" onChange={inputTextHandler} value={atv.titulo} className="form-control" placeholder="Título"/>
            </div>
            <div className="col-sm-3">
                <select id="prioridade" name="prioridade" onChange={inputTextHandler} value={atv.prioridade} className="form-select">
                    <option defaultValue="0">Selecione a prioridade</option>
                    <option value="1">Baixa</option>
                    <option value="2">Normal</option>
                    <option value="3">Alta</option>
                </select>
            </div>
            <div className="col-sm-12">
                <textarea type="text" id="descricao" name="descricao" onChange={inputTextHandler} value={atv.descricao} className="form-control" placeholder="Descrição"></textarea>
            </div>
            <div className="col-12 d-flex justify-content-end">
                <button onClick={addAtividade} className="btn btn-outline-success">Adicionar</button>
            </div>
        </form>
    );
}