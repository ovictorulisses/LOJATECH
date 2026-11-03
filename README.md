# LOJATECH

Loja virtual desenvolvida como projeto acadêmico do curso de Engenharia de Software da FIAP, utilizando React, Vite e Tailwind CSS, com integração à Fake Store API.

O projeto tem como objetivo aplicar conceitos de desenvolvimento front-end, componentização, consumo de APIs REST, estilização responsiva e versionamento de código com Git e GitHub.

## Tecnologias utilizadas

- **React:** desenvolvimento da interface e criação de componentes reutilizáveis.
- **Vite:** ambiente de desenvolvimento e ferramenta de build.
- **Tailwind CSS:** estilização e responsividade.
- **JavaScript:** implementação da lógica e das funcionalidades.
- **Fake Store API:** fornecimento dos dados dos produtos.
- **Git e GitHub:** versionamento, organização de branches e pull requests.

## Funcionalidades

- Exibição de produtos consumidos da Fake Store API.
- Visualização de imagens, nomes, preços, categorias e avaliações.
- Pesquisa de produtos pelo nome.
- Filtragem de produtos por categoria.
- Exibição de eletrônicos como categoria inicial.
- Visualização da descrição dos produtos.
- Interface responsiva para diferentes tamanhos de tela.
- Tratamento de carregamento e erros na comunicação com a API.
- Componentes reutilizáveis para organização do código.

## Estrutura do projeto

```text
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   └── Footer.jsx
├── services/
│   └── api.js
├── App.jsx
├── index.css
└── main.jsx
```

## API utilizada

O projeto consome a Fake Store API para obter os dados dos produtos.

**Endpoint:**

https://fakestoreapi.com/products

A requisição é realizada utilizando `fetch`, com os dados armazenados no estado da aplicação por meio dos hooks `useState` e `useEffect` do React.

Os produtos são exibidos dinamicamente, permitindo pesquisas e filtros sem a necessidade de novas requisições a cada interação.

## Como executar o projeto

**1. Clone o repositório:**

```bash
git clone https://github.com/ovictorulisses/LOJATECH.git
```

**2. Acesse a pasta:**

```bash
cd LOJATECH
```

**3. Instale as dependências:**

```bash
npm install
```

**4. Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

**5. Acesse o endereço local informado pelo Vite**, normalmente:

http://localhost:5173

## Versionamento

O projeto utiliza Git e GitHub para controle de versões e organização do desenvolvimento.

As funcionalidades foram separadas em branches específicas e integradas por meio de pull requests.

| Branch | Responsabilidade |
|---|---|
| `main` | Versão principal e estável |
| `dev` | Integração das funcionalidades |
| `feature/api-products` | Consumo da Fake Store API |
| `feature/product-card` | Criação e estilização dos cards |
| `feature/search-filter` | Pesquisa e filtros por categoria |
| `feature/layout` | Estrutura visual e componentes de layout |

### Fluxo de desenvolvimento

1. Criação de uma branch para cada funcionalidade.
2. Implementação e testes das alterações.
3. Registro das modificações por meio de commits.
4. Envio das alterações ao repositório remoto.
5. Abertura de pull requests para a branch `dev`.
6. Revisão e integração das funcionalidades.
7. Integração da versão final na branch `main`.

## Componentização

A aplicação foi dividida em componentes React para facilitar a organização, manutenção e reutilização do código.

- **Navbar:** barra de navegação principal.
- **Hero:** banner de apresentação da loja.
- **ProductCard:** exibição individual dos dados de um produto.
- **ProductList:** renderização da lista de produtos.
- **Footer:** rodapé da aplicação.
- **App:** gerenciamento dos estados, filtros e estrutura principal.
- **api.js:** comunicação com a Fake Store API.

## Objetivo acadêmico

O desenvolvimento da LOJATECH permitiu aplicar conhecimentos de React, JavaScript, consumo de APIs REST, estilização com Tailwind CSS e organização de projetos front-end.

Além da implementação das funcionalidades, o projeto utiliza práticas de versionamento com branches, commits e pull requests, simulando um fluxo de desenvolvimento colaborativo.

## Observações

A LOJATECH é um projeto acadêmico demonstrativo, não sendo uma plataforma comercial.

Os produtos, imagens, preços e avaliações são fornecidos pela Fake Store API. Os valores são exibidos em dólares americanos (USD), conforme os dados recebidos.

## Autor

**Victor Ulisses de Morais Silva**

Engenharia de Software — FIAP

2026