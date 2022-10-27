# Projeto Trybe Futebol Clube!

## Sobre o projeto:

O TFC é um site informativo sobre partidas e classificações de futebol.

Desenvolvido uma API consumindo um banco de dados, utilizando principios SOLID e arquitetura MSC com TypeScript, POO e dockerização(dockerfile, docker-compose). Utilizando modelagem de dados através do Sequelize, onde tem a finalidade de ser consumida por um front-end, já construído pelo time da trybe nesse projeto.

Para adicionar uma partida é necessário ter um token, portanto a pessoa deverá estar logada para fazer as alterações. Temos um relacionamento entre as tabelas teams e matches para fazer as atualizações das partidas.

 - A API é responsavel por:

 - Criar e manipular dados com MySQL através do Sequelize, armazenando os dados;
 - Autenticação de usuário utilizando o JWT e Bcrypt;
 - Listar clubs cadastrados;
 - Listar partidas em andamento e finalizados;
 - Criar novas partidas;
 - Atualizar placar em partidas em andamento;
 - Finalizar partidas em andamento;
 - Gerar um leaderboard de time de fora e time de casa, e de modo geral, utilizando ordenação avaliativos de critérios para o placar;
 - Realizando a dockerização do back-end e front-end, utilizando docker-compose;

# Técnologias utilizadas:

 - TypeScript;
 - Node;
 - Sequelize;
 - Express;
 - MYSQL;
 - POO, Programação orientação a objetos
 - Docker
 - ES6;
 - JWT;
 - Bcrypt;
 - Testes: Mocha, Chai e Sinon;

## Instalando as dependências

<details>

  ```json
    git clone git@github.com:LucianooDutra/project-TFC-BackEnd.git
    cd TrybeFutebolClube/ 
    npm install
  ```

</details>

## Executando a aplicação

<details>
  Para rodar a aplicação você vai precisar ter o Docker instalado e usar os seguintes comandos no terminal:
 - [Docker](https://docs.docker.com/engine/install/ubuntu/)

  ```json
    cd app/
    npm run compose:up
  ```

</details>

## Para rodar o back-end

<details>
 <summary><strong>Observações:</strong></summary><br />

Para realizar as requisições em back-end, você pode usar a extensão Thunder Client do VSCode ou os clientes HTTP Postman ou Insomnia.

  - [Thunder Client](https://www.thunderclient.com/)
  - [Postman](https://www.postman.com/)
  - [Insomnia](https://insomnia.rest/)

</details>

## Endpoints

<details>
 <summary><strong>Login</strong></summary><br />

Para realizar o login utilize o método POST com a URL http://localhost:3001/login :

- O body da requisição deve conter o seguinte formato:

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- Caso bem sucedida, a requisição deverá gerar um TOKEN.

- Para saber o tipo de usuário que realizou o login, na aba Headers do seu cliente Http, acrescente a chave Authorization com o token gerado ao fazer o login. Em seguida utilize o método GET com a URL http://localhost:3001/login/validate.

</details>

<details>
 <summary><strong>Times</strong></summary><br />

- Para pesquisar os times cadastrados, utilize o método GET com a URL http://localhost:3001/teams;

- Para um time pelo seu id, utilize o método GET com a URL http://localhost:3001/teams/1;

</details>

<details>
 <summary><strong>Jogos</strong></summary><br />

- Para pesquisar todos os jogos já realizados e em andamento, utilize o método GET com a URL http://localhost:3001/matches;

- Para pesquisar apenas os jogos já finalizados, utilize o método GET com a URL http://localhost:3001/matches?inProgress=false;

- Para pesquisar apenas os jogos em andamento, utilize o método GET com a URL http://localhost:3001/matches?inProgress=true;

- Para adicionar um novo jogo, utilize o método POST com a URL http://localhost:3001/matches e na aba Body o json abaixo:

  ```json
  {
    "homeTeam": 1,
    "awayTeam": 6,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2
  }
  ```

- Obs.: É necessário que haja um TOKEN válido do tipo admin na chave Authorization da aba Headers e que os valores das chaves homeTeam e awayTeam sejam de times cadastrados no banco de dados e não sejam iguais. Caso contrário, a requisição retornará um erro indicativo.

- Para alterar o status da partida de em andamento para finalizado, utilize o método PATCH com a URL http://localhost:3001/matches/45/finish;

- Para alterar o placar de uma partida em andamento, utilize o método PATCH com a URL http://localhost:3001/matches/47 e na aba Body o json abaixo:

  ```json
  {
    "homeTeamGoals": 3,
    "awayTeamGoals": 1
  }
  ```

</details>

</details>

<details>
 <summary><strong>Tabela de Classificação</strong></summary><br />

- Para ver a classificação geral dos times, utilize o método GET com a URL http://localhost:3001/leaderboard;

- Para ver a classificação dos times filtrado pelos jogos em que eram mandantes, utilize o método GET com a URL http://localhost:3001/leaderboard/home;

- Para ver a classificação dos times filtrado pelos jogos em que eram visitantes, utilize o método GET com a URL http://localhost:3001/leaderboard/away;

</details>


## Rodando o front-end

<details>
 <summary><strong>Front-End</strong></summary><br />

- Para rodar o front-end que consome a API desenvolvida basta executar o comando abaixo a partir da raiz do projeto:

  ```json
    cd app/frontend/ && npm start
  ```

- Para realizar o login na aplicação, com o perfil de administrador e ter os mesmos acessos de usuário, além de poder acrescentar um novo jogo e editar o placar de jogos em andamento:

  ```json
    login: admin@admin.com
    senha: secret_admin
  ```

</details>


## Executando os testes

<details>
 <summary><strong>Testes</strong></summary><br />

 Foi utilizado o Mocha, Chai e Sinon para a realização dos testes, unitários e integração;

- Para rodar todos os testes:

Para executar os testes de cobertura do back-end, entre na pasta backend rodando o seguinte comando no terminal a partir da raiz do projeto:

  ```json
    cd app/backend/
  ```

Renomeie o arquivo .env.example para .env e rode o comando abaixo:

  ```json
    npm run test:coverage

    ou

    npm run test
  ```

</details>
