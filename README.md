<h1 align="center">Trybe Futebol Clube ⚽</h1>

<h3 align="center">Neste projeto desenvolvi uma API, com conexão a um banco de dados. Realizando a criação e gerenciamento de um campeonato de futebol.</h3>

## 💻 Sobre o projeto

Uma API em TypeScript que permite a criação, modificação e exclusão de partidas (CRUD). 
Além de ser possivel conferir a classificação dos times atráves do Front-End.

---
## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) e o [Insomnia](https://insomnia.rest/) ou algum [outro software](https://www.postman.com/) para testar as rotas desenvolvidas nessa API RESTful.
<details>

```bash

# Clone este repositório
$ git clone git@github.com:kauamaximino/trybe-futebol-clube.git

# Acesse a pasta do projeto no terminal/cmd
$ cd trybe-futebol-clube

# Instale as dependências
$ npm install

# inicie o banco de dados com Docker
docker compose up -d

# A partir da raíz do projeto, execute a aplicação back-end em modo de desenvolvimento
$ cd app/backend && npm run dev

# A partir da raíz do projeto, execute a aplicação front-end em modo de desenvolvimento
$ cd app/frontend && npm start

```
</details>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
-  **[Node.js](https://nodejs.org/en/)**
-   **[TypeScript](https://www.typescriptlang.org/)**
-   **[Express](https://expressjs.com/)**
-   **[Sequelize](https://sequelize.org/)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Docker](https://www.docker.com/)**
-   **[MySQL](https://www.mysql.com/)**
-   **[Joi](https://github.com/hapijs/joi)**
-   **[Jwt](https://jwt.io/)**
-   **[Mocha](https://mochajs.org/)**
-   **[Chai](https://www.chaijs.com/)**

> Veja o arquivo [package.json](https://github.com/kauamaximino/trybe-futebol-clube/blob/main/package.json)

---
## 📝 Licença

A parte de FrontEnd deste projeto foi disponibilizada pela Trybe, eu desenvolvi o BackEnd.
