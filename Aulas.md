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

## 8. JSX

### JSX — JavaScript XML
JSX (JavaScript XML) é uma extensão de sintaxe do JavaScript utilizada no React para descrever como a interface de usuário deve ser renderizada. Com JSX, podemos escrever estruturas semelhantes ao HTML dentro do código JavaScript, o que torna o código mais legível e próximo do que será exibido na tela.

### Vantagens do JSX
- Sintaxe familiar para desenvolvedores web.
- Melhor integração entre lógica e apresentação.
- Validação de sintaxe em tempo de compilação.

### Diferença entre `class` e `className`
No HTML padrão, utilizamos o atributo `class` para definir classes CSS:
```html
<div class="container"></div>
```
No React (e no JSX), **não podemos usar `class`**, pois `class` é uma palavra reservada do JavaScript. Por isso, utilizamos `className`:
```jsx
<div className="container"></div>
```
O comportamento final é o mesmo — o elemento terá a classe CSS aplicada. A mudança é apenas na sintaxe, devido ao conflito de palavras reservadas em JavaScript.

### Uso de `{}` no React

Dentro do JSX, as chaves `{}` são usadas para interpolar expressões JavaScript. Sempre que você precisa inserir um valor dinâmico, executar uma função ou utilizar variáveis dentro do JSX, você usa as chaves.

### Exemplo com variável:

```jsx
const nome = 'Maria';

return (
  <h1>Olá, {nome}!</h1>
);
```

As chaves podem conter qualquer expressão válida em JavaScript: chamadas de função, operações aritméticas, condicionais (como operador ternário), etc.

### Exemplo com função e operador ternário:

```jsx
const saudacao = (nome) => `Bem-vinda, ${nome}!`;
const estaLogado = true;

return (
  <div>
    <h1>{saudacao('Maria')}</h1>
    <p>{estaLogado ? 'Você está logado' : 'Por favor, faça login'}</p>
  </div>
);
```

## 10. JSX - Fragment
### O que são `<> </>` e `<Fragment> </Fragment>`?

No React, tanto `<> </>` quanto `<Fragment> </Fragment>` são utilizados para envolver múltiplos elementos JSX sem adicionar um elemento extra ao DOM.

Por padrão, um componente React deve retornar **apenas um elemento**. Se houver múltiplos elementos a serem retornados, é necessário envolvê-los dentro de um contênier. Tradicionalmente, seria comum usar uma `<div>`, mas isso pode criar elementos desnecessários no DOM, o que não é sempre desejado.

O `Fragment` foi criado para resolver esse problema. Ele permite agrupar uma lista de filhos sem adicionar nós extras na árvore do DOM.

Exemplo usando `<Fragment>`:

```jsx
import React, { Fragment } from 'react';

function MeuComponente() {
  return (
    <Fragment>
      <h1>Título</h1>
      <p>Parágrafo</p>
    </Fragment>
  );
}
```

O React também fornece uma sintaxe abreviada para o `Fragment`, que é `<> </>`. Ela tem a mesma funcionalidade:

```jsx
function MeuComponente() {
  return (
    <>
      <h1>Título</h1>
      <p>Parágrafo</p>
    </>
  );
}
```

Ambas as abordagens são equivalentes em funcionalidade, a diferença é apenas a forma de escrita.

> Obs: A sintaxe curta `<> </>` não permite passar props, como a prop `key` em listas. Nestes casos, é necessário usar `<Fragment key={algumaCoisa}>`.


