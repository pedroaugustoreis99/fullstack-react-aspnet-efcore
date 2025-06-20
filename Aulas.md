## 7. Criando projeto

Foi utilizado o comando:

```bash
npx create-react-app pro-atividade-app
```

## 8. Explicando o Projeto

### O Arquivo `/public/index.html`

Este arquivo é o ponto de entrada HTML da aplicação. Quando você abre o site no navegador, é este arquivo que o navegador carrega primeiro.

Porém, diferente de aplicações web tradicionais, aqui o HTML é quase vazio. Ele contém basicamente uma `<div>` com um `id`, normalmente `root`. Essa `div` é o contênir onde o React vai "injetar" toda a aplicação gerada pelo JavaScript. A partir daqui, o React controla completamente o que é exibido na página.

### O Arquivo `/src/index.js`

Este é o ponto de entrada JavaScript da aplicação. Aqui, é onde o React inicializa e renderiza o primeiro componente da aplicação dentro da `div#root` do HTML.

Um exemplo típico deste arquivo seria:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### Explicação do código:

* O React e o ReactDOM são importados.
* O componente principal `App` é importado.
* O `ReactDOM` procura o elemento com `id="root"` no HTML.
* O componente `App` é renderizado dentro dessa `div`.
* A partir do `App`, você pode ir compondo toda a sua aplicação com vários componentes React.

### O Arquivo `package.json`

O `package.json` é o arquivo de configuração do projeto Node.js/React. Ele guarda informações importantes, como:

* **Nome e versão do projeto:** para identificação.
* **Dependências:** todos os pacotes que o projeto usa (como `react`, `react-dom`, `axios`, `react-router-dom`, etc.).
* **Scripts:** comandos que podem ser executados, como `start`, `build`, `test`, etc.
* **Configurações adicionais:** de ferramentas que você usa no projeto.


