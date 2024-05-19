### ![pt-br](https://img.icons8.com/color/20/brazil-circular.png) [pt-BR]


## Instalação

Instale as bibliotecas @viini/lint e eslint.

- Npm:
``` 
npm install -D @viini/lint eslint
```

- Pnpm
``` 
pnpm add -D @viini/lint eslint
```

- Yarn
``` 
yarn add -D @viini/lint eslint
```

## Descrição

Esta biblioteca é um projeto pessoal para me ajudar a configurar novos projetos com Eslint 9+, sinta-se a vontade para utilizar.
Atualmente só existe uma configuração para <strong>node + typescript</strong>.


## Como usar

A biblioteca já possui uma série de regras e plugins, todas no novo formato [flat](https://eslint.org/blog/2023/10/flat-config-rollout-plans/) proposto nas versões 9+ do EsLint.
Sendo assim, basta incluir a configuração diretamente no arquivo eslint.config.js. Sugiro reiniciar seu editor de código/IDE ao adicionar a configuração.

Exemplo:

```javascript
  // eslint.config.js
  import tsLint from '@viini/lint/node/typescript.js';

  export default [
    tsLint,
  ];
```
---
### ![pt-br](https://img.icons8.com/color/20/usa-circular.png) [en-US]


## Installation
Install the libraries @viini/lint and eslint.

- Npm:
``` 
npm install -D @viini/lint eslint
```

- Pnpm
``` 
pnpm add -D @viini/lint eslint
```

- Yarn
``` 
yarn add -D @viini/lint eslint
```

## Description

This library is a personal project to help me set up new projects with Eslint 9+ configurations. Feel free to use it. 
Currently, there is only one configuration for <strong>node + typescript</strong>.

## How to Use

The library already has a series of rules and plugins, all in the new flat format proposed in versions 9+ of EsLint. 
Therefore, simply include the configuration directly in the eslint.config.js file. I suggest restarting your code editor/IDE after adding the configuration.

Example:

```javascript
  // eslint.config.js
  import tsLint from '@viini/lint/node/typescript.js';

  export default [
    tsLint,
  ];
```
