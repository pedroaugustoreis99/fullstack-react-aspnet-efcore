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

## 11. Install Bootstrap
Para adicionar o **Bootstrap** ao projeto, foi utilizado o seguinte comando:

```bash
npm install bootstrap
```

Também foi instalado o **react-bootstrap** com o comando
```bash
npm install bootstrap
```
 
## 13. Atividade Map
Quando trabalhamos com listas de dados no React, é muito comum termos um array de objetos que precisamos exibir na tela. Para isso, usamos o método `map` do JavaScript, que permite transformar cada item do array em um elemento React.

---

### Exemplo Prático

Suponha que temos o seguinte array de objetos:

```javascript
const usuarios = [
  { id: 1, nome: 'Alice' },
  { id: 2, nome: 'Bob' },
  { id: 3, nome: 'Charlie' }
];
```

Queremos renderizar esses nomes na tela. Podemos usar `map` assim:

```jsx
function ListaDeUsuarios() {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  );
}
```

### O que está acontecendo:

- `usuarios.map()` percorre cada objeto do array.
- Para cada `usuario`, retorna um elemento `<li>` com o nome.
- Cada item tem uma `key` única: `usuario.id`.

---

## Por que usar a prop `key`

A prop `key` é necessária quando renderizamos listas no React porque:

1. **Ajuda na performance:** O React usa a `key` para identificar quais itens mudaram, foram adicionados ou removidos.
2. **Evita bugs visuais:** Sem a `key`, o React pode confundir os elementos e renderizar errado quando o array muda.
3. **Deve ser única por item:** O ideal é usar um identificador único (como um `id`) que não muda.

### Exemplo de problema sem `key`:

Se o array mudar (ex.: adicionar ou remover um item), o React pode reutilizar elementos antigos de forma errada, causando comportamentos inesperados na UI.

## 14. AddAtividade
A grande diferença do React é que ele possui um conceito chamado **estado (state)** e **re-renderização automática**. Sempre que o estado muda, o React atualiza o DOM automaticamente.
### Analisando o seguinte código

```javascript
function addAtividade(e) {
    e.preventDefault();
    const atividade = {
        id: document.getElementById("id").value,
        descricao: document.getElementById("descricao").value
    }
    atividades.push(atividade);
    console.log(atividades);
}

<form>
  <input type="number" id="id" placeholder="ID" />
  <input type="text" id="descricao" placeholder="Descrição" />
  <button onClick={addAtividade}>Adicionar</button>
</form>

<div className="mt-3">
  <ul className="list-group">
    {atividades.map(a => (
      <li key={a.id} className="list-group-item">{a.id} - {a.descricao}</li>
    ))}
  </ul>
</div>
```

### O que o código faz:

- Existe uma função `addAtividade` que adiciona uma nova atividade em um array chamado `atividades`.
- O `console.log(atividades)` mostra que o array é atualizado.
- No entanto, a interface (HTML) **não é atualizada** automaticamente.

### Por que o HTML não é atualizado?

O React não sabe que o array `atividades` foi alterado porque o array está sendo manipulado diretamente (com `push`). Em React, o que faz o componente re-renderizar é a mudança de **estado**.

Quando você usa um estado (por exemplo, com o `useState`), o React observa as mudanças e atualiza o DOM automaticamente. Como `atividades` é uma variável comum e não um estado do React, ele não tem como saber que o array foi alterado.

### Explicando o atributo `onClick`

O `onClick` é um **event handler** do React, ou seja, ele define qual função será chamada quando o elemento é clicado.

### Quando usamos:

```jsx
<button onClick={addAtividade}>Adicionar</button>
```

Estamos passando a referência da função `addAtividade` para o React, que vai chamá-la quando o clique ocorrer.

### Se usássemos:

```jsx
<button onClick={addAtividade()}>Adicionar</button>
```

Nesse caso, a função `addAtividade` seria chamada imediatamente durante a renderização do componente, o que não é o comportamento desejado.

### Forma correta:

- Passar a função SEM invocar: `onClick={addAtividade}`.
- Se for necessário passar parâmetros, use arrow function:

```jsx
<button onClick={(e) => addAtividade(e, param)}>Adicionar</button>
```

## 15. Hook useState

### O que é um Hook?

Hooks são funções especiais introduzidas no React a partir da versão 16.8 que permitem **usar o estado e outros recursos do React em componentes funcionais**.

Antes dos Hooks, só componentes de classe podiam ter estado e acessar o ciclo de vida. Com os Hooks, podemos escrever componentes com funções simples e ainda assim aproveitar todo o poder do React.

Existem vários Hooks, como:

- `useState`
- `useEffect`
- `useContext`
- `useRef`, entre outros.

### O que é o `useState`

O `useState` é um dos Hooks mais usados. Ele permite criar uma variável de estado dentro de um componente funcional.

Quando você altera o valor do estado com `setState`, o React automaticamente re-renderiza o componente com o novo valor.

#### Sintaxe básica:

```javascript
const [valor, setValor] = useState(valorInicial);
```

- `valor`: é a variável que guarda o estado atual.
- `setValor`: é a função que atualiza o valor e avisa o React que o componente precisa ser re-renderizado.

### Exemplo simples de `useState`

Vamos criar um contador:

```javascript
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={incrementar}>Clique aqui</button>
    </div>
  );
}

export default Contador;
```

### Explicação:

- `useState(0)` cria o estado `contador` com valor inicial `0`.
- `setContador(contador + 1)` atualiza o estado e o React re-renderiza o componente.
- Sempre que clicamos no botão, o contador aumenta.

---

#### Observações importantes sobre `useState`

- Nunca altere o estado diretamente (ex: `contador++`). Use sempre o `setContador`.
- Cada vez que você chama o setter, o componente é re-renderizado automaticamente.
- Podemos ter vários `useState` dentro do mesmo componente para controlar estados diferentes.

## 19. FontAwesome
Foi executado o seguinte comando na raiz da aplicação 
```bash
npm install --save @fortawesome/fontawesome-free
```

Esse comando instala o pacote `@fortawesome/fontawesome-free` como uma **dependência de produção** do seu projeto. Este pacote contém os ícones gratuitos da biblioteca **Font Awesome**, que podem ser usados em componentes React como elementos visuais (ícones de menu, redes sociais, etc.).
- `--save`: adiciona automaticamente o pacote à seção `dependencies` do `package.json` (opcional a partir do npm 5).
- O pacote é baixado na pasta `node_modules`.

Linha adicionada em `/src/index.css`
```css
@import url('../node_modules/@fortawesome/fontawesome-free/css/all.min.css');
```

#### O que essa linha faz?
Essa linha importa diretamente o arquivo CSS do Font Awesome para o seu projeto React. Especificamente:

- O arquivo `all.min.css` inclui todos os estilos e classes de ícones disponíveis no pacote Font Awesome.
- Ao importar esse arquivo no `index.css`, todos os componentes da sua aplicação podem utilizar os ícones com classes como:
  ```html
  <i class="fas fa-check"></i>
  ```

Trecho no `package.json`
```json
"dependencies": {
  "@fortawesome/fontawesome-free": "^6.7.2"
}
```

#### Por que isso aparece?
Essa entrada no `package.json` indica que o projeto depende da versão `^6.7.2` do Font Awesome Free. O símbolo `^` significa que o npm poderá instalar qualquer versão **compatível** com a `6.x.x`, ou seja, atualizações de patch e minor releases, mas não versões maiores que possam quebrar compatibilidade.

## 26. Criando Components
Por convenção, o nome de um componente React deve começar com letra **maiúscula** e seguir o padrão **PascalCase** (também conhecido como UpperCamelCase). Isso diferencia componentes de elementos HTML nativos, que são escritos em minúsculas.
#### Exemplo:

```jsx
function MeuComponente() {
  return <div>Conteúdo</div>;
}
```

Se você escrever `meuComponente` com a primeira letra minúscula, o React entenderá que se trata de uma tag HTML nativa e não de um componente personalizado.

#### Componente Pai e Componente Filho

Um componente React pode **chamar** ou **utilizar** outro componente dentro de seu JSX. Isso é essencial para compor interfaces complexas a partir de peças menores e reutilizáveis.
Suponha que você tenha a seguinte estrutura de arquivos na pasta `src/`:

```
src/
├── App.js
└── Saudacao.js
```

### `Saudacao.js` (Componente Filho)

```jsx
// Saudacao.js
import React from 'react';

function Saudacao() {
  return <h1>Olá, mundo!</h1>;
}

export default Saudacao;
```

### `App.js` (Componente Pai)

```jsx
// App.js
import React from 'react';
import Saudacao from './Saudacao'; // importando o componente filho

function App() {
  return (
    <div>
      <Saudacao />
      <p>Este é o componente principal.</p>
    </div>
  );
}

export default App;
```

Neste exemplo:
- O componente `Saudacao` foi criado em um arquivo separado.
- Ele é **exportado** com `export default Saudacao`.
- O componente `App` faz a **importação** usando `import Saudacao from './Saudacao'`.

Quando construímos uma aplicação React com múltiplos componentes, muitas vezes é necessário que um componente "pai" envie **dados** ou **funções** para um componente "filho".

## 27. Props
**Props** (abreviação de "properties") são a forma de passar **dados de um componente pai para um componente filho** no React. Elas tornam os componentes reutilizáveis com diferentes entradas.

O componente filho recebe props como parâmetro:
```jsx
function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}
```

No componente pai, você usa o componente filho passando valores:

```jsx
function App() {
  return <Saudacao nome="Maria" />;
}
```

#### Explicando com mais detalhes

- `props` é um objeto.
- Cada atributo passado no JSX vira uma propriedade desse objeto.
- Você pode passar qualquer tipo de dado: string, número, booleano, função, array, objeto, etc.

## 31. onChange InputHandler
No React, o `onChange` é um evento que é disparado sempre que o valor de um `<input>`, `<select>` ou `<textarea>` muda.
Quando você faz:
````jsx
<input type="number" onChange={handler} />
````
Você está dizendo que toda vez que o valor desse input mudar, a função `handler` será chamada

`handler` é uma função que recebe um **evento** do React como argumento (por convenção chamado de `e`, abreviação de "event").
```javascript
function hanlder(e) {
    console.log(e) // Evento que contém várias informações, inclusive sobre o input que disparou o evento
}
```

`e.target` é uma referência ao **elemento DOM** que disparou o evento - no caso, o próprio `<input>`. Você pode acessar o name e o valor do input com:
```javascript
function handler(e) {
    console.log(e.target.name);
    console.log(e.target.value);
}
```

Uma boa prática é utilizar o `useState` para armazenar o valor do input em um **estado**
```javascript
import { useState } from 'react';

function MeuComponente() {
  const [numero, setNumero] = useState(0); // Estado para guardar o valor do input

  const handler = (e) => {
    setNumero(Number(e.target.value)); // Converte para número, já que o input é do tipo number
  };

  return (
    <input
      type="number"
      value={numero}
      onChange={handler}
    />
  );
}
```

## 33. Hook useEffect
O `useEffect` é um **hook do React** que permite executar efeitos colaterais em componentes funcionais. Ele é usado para lidar com **operações que afetam o mundo externo** ou o ciclo de vida do componente, como:

- Buscar dados de uma API
- Manipular o DOM diretamente
- Criar/subscrever eventos
- Iniciar ou limpar timers

#### Sintaxe básica

```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Código a ser executado
}, [dependências]);
```

#### Funcionamento

- O primeiro argumento é uma **função** (efeito colateral).
- O segundo argumento é um **array de dependências**.
  - Ele define **quando** o efeito será executado.

#### Comportamentos baseados nas dependências

| Dependências       | Comportamento                                                                          |
|--------------------|----------------------------------------------------------------------------------------|
| `[]`               | Executa **apenas uma vez**, após o primeiro render (comportamento de `componentDidMount`) |
| `[var1, var2]`     | Executa quando **qualquer dependência mudar**                                          |
| Omitido (`undefined`) | Executa após **todo render**                                                        |

#### Exemplo completo

```jsx
import { useEffect, useState } from 'react';

function Exemplo() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Contador mudou para:', contador);
  }, [contador]);

  return (
    <button onClick={() => setContador(contador + 1)}>
      Cliquei {contador} vezes
    </button>
  );
}
```

## 45. Explicando projeto
Um projeto Web API no .NET geralmente inclui os seguintes arquivos e conceitos:

### 1. `Program.cs`
Este é o ponto de entrada da aplicação. Ele configura e inicia o servidor web:

```csharp
public static void Main(string[] args)
{
    CreateHostBuilder(args).Build().Run();
}
```

Esse método inicia a aplicação. Já o `CreateHostBuilder` prepara o ambiente web e diz para usar a classe `Startup`.

### 2. `Startup.cs`
É onde a aplicação é **configurada**.

####  ConfigureServices
Registramos os serviços que a aplicação vai usar — por exemplo, suporte a **controllers** e ao **Swagger** (documentação da API):

```csharp
services.AddControllers();
services.AddSwaggerGen(...);
```

####  Configure
Definimos o **pipeline(sequência de etapas) de requisições HTTP**:

```csharp
app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});
```

Também ativamos o Swagger em ambiente de desenvolvimento para facilitar testes da API.

### 3. Controllers
Controllers são classes que definem os **endpoints** (as “rotas” da API).

Exemplo: `WeatherForecastController.cs`

```csharp
[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
```

Este controller responde à rota `/WeatherForecast` com dados simulados sobre o clima.

### 4. Arquivos de Configuração

- `appsettings.json`: contém configurações gerais (ex: logging, URLs permitidas).
- `appsettings.Development.json`: sobrescreve as configs em ambiente de desenvolvimento.
- `launchSettings.json`: define como o projeto será executado (URLs, ambiente, perfil de execução, etc).

## 54. Referencias EF Core
Um arquivo com extensão `.csproj` é o **arquivo de projeto do C#** (CSharp Project). Ele define:

- Os **metadados do projeto** (nome, SDK usado, versão).
- Os **arquivos incluídos no projeto**.
- As **dependências** (pacotes NuGet).
- As configurações de build e publicação.

Ele é escrito em XML e é essencial para o .NET saber como compilar e rodar seu projeto.

A tag `<PackageReference>` dentro do `.csproj` é usada para **referenciar pacotes NuGet**, que são bibliotecas reutilizáveis.

```xml
<PackageReference Include="Microsoft.EntityFrameworkCore" Version="6.0.0" />
```

Isso informa ao .NET que o projeto depende do pacote `Microsoft.EntityFrameworkCore`, versão 6.0.0.

### Utilidade dos Pacotes `Microsoft.EntityFrameworkCore` e relacionados

Esses pacotes fazem parte do **Entity Framework Core (EF Core)**, que é um **ORM (Object-Relational Mapper)**. Ele facilita o acesso a bancos de dados relacionais com código C#, sem escrever SQL diretamente.

### 1. `Microsoft.EntityFrameworkCore`
**Pacote principal** do EF Core. Ele contém as funcionalidades centrais como:

- Mapeamento de classes para tabelas (ORM).
- Consultas com LINQ.
- Rastreio de alterações e persistência no banco.

É obrigatório para usar EF Core em qualquer banco.

### 2. `Microsoft.EntityFrameworkCore.Sqlite`
**Provedor de banco de dados para SQLite**.

- Permite que o EF Core conecte, crie e opere em bancos SQLite.
- Cada banco suportado tem um provedor diferente (ex: `SqlServer`, `Npgsql`, etc).

### 3. `Microsoft.EntityFrameworkCore.Design`
Usado para **design-time**, ou seja, ferramentas que ajudam durante o desenvolvimento:

- Gera o código das migrations.
- Permite scaffolding de modelos a partir de bancos de dados existentes.
- Necessário para comandos como `dotnet ef migrations add`.

Geralmente usado **apenas no projeto que contém o `DbContext`**.

### 4. `Microsoft.EntityFrameworkCore.Tools`
Fornece suporte às **ferramentas de linha de comando** (`dotnet ef`) no terminal.

- Executar `dotnet ef database update`
- Criar migrations com `dotnet ef migrations add`
- Visualizar o modelo com `dotnet ef dbcontext info`

## 55. Contexto de Dados
O `DbContext` é uma classe fundamental do Entity Framework Core. Ele representa uma sessão com o banco de dados e permite realizar:

- Consultas (`SELECT`)
- Inserções (`INSERT`)
- Atualizações (`UPDATE`)
- Remoções (`DELETE`)

### `DataContext.cs` – Criação do contexto de dados

```csharp
public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    public DbSet<Atividade> Atividades { get; set; }
}
```

- `DbSet<Atividade>` representa a tabela `Atividades` no banco de dados.

### `appsettings.Development.json` – String de Conexão

```json
{
  "ConnectionStrings": {
    "Default": "Data source=ProAtividade.db"
  }
}
```

- Define a **string de conexão** usada pelo `DbContext` para localizar e conectar ao banco de dados SQLite.

### `Startup.cs` – Injeção do `DataContext`

```csharp
services.AddDbContext<DataContext>(
    options => options.UseSqlite(Configuration.GetConnectionString("Default"))
);
```

- Lê a string de conexão chamada `"Default"` do arquivo `appsettings`.
- Usa o banco de dados SQLite.
- Registra o `DataContext` no sistema de injeção de dependência.

### Como Funciona na Prática

1. A aplicação inicia e carrega as configurações do `appsettings.Development.json`.
2. O `DataContext` é registrado e configurado no `Startup.cs`.
3. Em qualquer controller ou serviço, o `DataContext` pode ser injetado e usado para acessar os dados.

## 56. Migrations e Update - Parte 1
O comando abaixo é usado com o Entity Framework Core para criar a **primeira migração** do seu banco de dados com base no modelo definido no `DbContext`.
```bash
dotnet ef migrations add initial -o Data/Migrations
```
#### 🔹 `migrations add initial`
Cria uma nova **migração** chamada `initial`. Esse nome é arbitrário, mas geralmente usa-se `initial` para a primeira migração.

#### 🔹 `-o Data/Migrations`
Especifica o **diretório de saída** onde os arquivos da migração serão salvos. Neste caso, os arquivos irão para a pasta `Data/Migrations`.

### O Que Acontece ao Rodar Esse Comando?

- O EF Core irá comparar os modelos definidos no `DbContext` (por exemplo, a entidade `Atividade`) com o banco de dados atual.
- Como é a primeira migração, ele irá gerar instruções SQL para **criar** as tabelas.
- Serão criados dois arquivos principais:
  - `xxxx_initial.cs`: contém as instruções para aplicar a migração.
  - `xxxx_initial.Designer.cs`: contém metadados da migração.

### Pré-requisitos

Antes de rodar esse comando, verifique:
1. Você está no diretório do projeto `.csproj` correto.
2. O pacote `Microsoft.EntityFrameworkCore.Design` está instalado.
3. O `DbContext` está devidamente registrado no `Startup.cs`.

## 58. Contexto no Controller
O comando `dotnet ef database update` aplica todas as **migrações pendentes** ao banco de dados. Ele é usado para atualizar o esquema do banco conforme as alterações definidas nas classes de migração.

### Em resumo:
- Cria ou atualiza o banco de dados com base nas **migrations** existentes.
- Executa os scripts de SQL gerados pelas migrações em ordem.
- Se o banco ainda não existir, ele será criado.
- Requer uma classe `DbContext` e uma `Migration` criada previamente com `dotnet ef migrations add`.

Na aula 55 o DataContext foi registrado no sistema de injeção de dependência do ASP.NET Core:
```csharp
services.AddDbContext<DataContext>(
    options => options.UseSqlite(Configuration.GetConnectionString("Default"))
);
```
**`AddDbContext<DataContext>()`**: Registra o `DataContext` para ser injetado automaticamente nos controllers e serviços.

### Como usar o `DataContext` no Controller?

Você pode **injeção de dependência** para receber uma instância do `DataContext` automaticamente no seu controller.

### Exemplo: `AtividadeController.cs`

```csharp
[ApiController]
[Route("api/[controller]")]
public class AtividadeController : ControllerBase
{
    private readonly DataContext _context;

    public AtividadeController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IEnumerable<Atividade> Get()
    {
        return _context.Atividades;
    }

    // Outros métodos (POST, PUT, DELETE) também usam _context
}
```

## 59. Testes e Config Json Converter
### Configuração no `Startup.cs`

```csharp
using System.Text.Json.Serialization;

services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });
```

### Explicação:
- `.AddJsonOptions(...)`: Permite configurar como a serialização e desserialização JSON será feita nos endpoints da API.

- `options.JsonSerializerOptions.Converters.Add(...)`: Adiciona um conversor personalizado ao sistema de serialização.

- `new JsonStringEnumConverter()`: Esse conversor faz com que enums sejam convertidos para **strings** no JSON (ex: `"Ativo"`), em vez de seus valores numéricos padrão (ex: `1`).

### Exemplo de Antes e Depois

#### Enum:
```csharp
public enum Status
{
    Inativo,
    Ativo
}
```

#### Sem `JsonStringEnumConverter`:
```json
{
    "status": 1
}
```

#### Com `JsonStringEnumConverter`:
```json
{
    "status": "Ativo"
}
```














