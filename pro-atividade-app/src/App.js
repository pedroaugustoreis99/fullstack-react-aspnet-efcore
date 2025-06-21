import logo from './logo.svg';
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
      <ul>
        {/* Utiliza JSX para exibir dados dinâmicos do array 'atividades' no componente */}
        <li>{atividades[0].id} - {atividades[0].descricao}</li>
        <li>{atividades[1].id} - {atividades[1].descricao}</li>
      </ul>
    </>
  );
}

export default App;
