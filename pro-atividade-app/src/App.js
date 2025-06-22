import './App.css';

function App() {
  /*
   * Um array de objetos normal para demonstrar algumas funcionalidades básicas do JSX
   */
  const atividades = [
    {
      id: 1,
      descricao: "Ler HQ de the walking dead"
    },
    {
      id: 2,
      descricao: "Ir pro Accioly assistir atlético x volta redonda"
    }
  ];

  return (
      <>
        <form>
          <input type="number" id="id" placeholder="ID" />
          <input type="text" id="descricao" placeholder="Descrição" />
          <button>Adicionar</button>
        </form>
        <div className="mt-3">
          <ul className="list-group">
            {atividades.map(a => (
                <li key={a.id} className="list-group-item">{a.id} - {a.descricao}</li>
            ))}
          </ul>
        </div>
      </>
  );
}

export default App;












