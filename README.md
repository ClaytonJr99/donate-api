<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Instalação

```bash
$ yarn install
```

## Rodando a aplicação

```bash

Para rodar a apliação, é necessário subir um container do docker com o comando docker-compose up -d

# development
$ yarn start

# watch mode
$ yarn start:dev
```
## Rotas
http://localhost:3000/api/v1/sua_rota

-Rota para login(rota publica)
POST /api/v1/signIn
O token de autenticação deve ser enviado no header Authorization no formato Bearer token
Retorna um token JWT que pode ser usado nas demais rotas para a autenticação

- Rota para cadastrar usuario /api/v1/users essa é uma rota publica
- Rota para listar usuarios /api/v1/users essa rota só pode ser chamada por usuários autenticados
- Rota para listar um usuario /api/v1/users essa rota só pode ser chamada por usuários autenticados
- Rota para deletar usuario /api/v1/users essa rota só pode ser chamada pelo próprio usuário autenticado
- Rota para alterar usuario /api/v1/users essa rota só pode ser chamada pelo próprio usuário autenticado

- Rota para cadastrar streamer /api/v1/streamers essa é uma rota publica
- Rota para listar streamers /api/v1/streamers essa é uma rota publica
- Rota para listar um streamer /api/v1/streamers essa rota só pode ser chamada por streamers autenticados
- Rota para deletar streamer /api/v1/streamers essa rota só pode ser chamada pelo próprio streamers autenticado
- Rota para alterar streamer /api/v1/streamers essa rota só pode ser chamada pelo próprio streamers autenticado

- Rota para cadastrar doação /api/v1/donations essa rota só pode ser chamada por usuários autenticados
- Rota para listar doações /api/v1/donations essa rota só pode ser chamada por streamers autenticados
