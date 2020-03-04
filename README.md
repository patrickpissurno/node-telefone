# telefone
[![npm-version](https://img.shields.io/npm/v/telefone.svg)](https://www.npmjs.com/package/telefone)
[![build status](https://travis-ci.org/patrickpissurno/node-telefone.svg?branch=master)](https://travis-ci.org/patrickpissurno/node-telefone)
[![coverage status](https://coveralls.io/repos/github/patrickpissurno/node-telefone/badge.svg?branch=master)](https://coveralls.io/github/patrickpissurno/node-telefone?branch=master)
[![known vulnerabilities](https://snyk.io/test/github/patrickpissurno/node-telefone/badge.svg)](https://snyk.io/test/github/patrickpissurno/node-telefone)
[![downloads](https://img.shields.io/npm/dt/telefone.svg)](http://npm-stats.com/~packages/telefone)
[![license](https://img.shields.io/github/license/patrickpissurno/node-telefone.svg?maxAge=1800)](https://github.com/patrickpissurno/node-telefone/blob/master/LICENSE)

Biblioteca para validar e formatar facilmente telefones brasileiros

O objetivo desta biblioteca é ser leve e oferecer métodos simples e garantidos para validação e formatação básica de telefones brasileiros. 

## Install

```
npm i telefone
```

## Como importar

```js
const parse = require('telefone/parse');
// ou
const { parse } = require('telefone');
// ou
const parse = require('telefone').parse;

const format = require('telefone/format');
// ou
const { format } = require('telefone');
// ou
const format = require('telefone').format;
```

## parse(str)

```js
const parse = require('telefone/parse');
console.log(parse("+55 (21) 97864-2213")); //retorna 21978642213
console.log(parse("(21) 00000-0000")); //retorna null, pois o telefone é inválido
console.log(parse("+55 (21) 97864-2213", { apenasFixo: true })); //retorna null, pois o telefone não é fixo
console.log(parse("+55 (21) 4002-8922", { apenasCelular: true })); //retorna null, pois o telefone não é celular
console.log(parse("+55 (21) 4002-8922", { apenasDDD: [ '11', '24' ] })); //retorna null, pois o telefone não é de um dos DDDs informados
```

## format(str)

```js
const format = require('telefone/format');
console.log(format("+55 2197864 2213")); //retorna (21) 97864-2213
console.log(format("+5521 4002 8922")); //retorna (21) 4002-8922
console.log(format("2140028922")); //retorna (21) 4002-8922
```

## Posso usar em produção?
Deve. Essa biblioteca tem uma política estrita de 100% de cobertura. O Travis-CI é executado para cada commit, por garantia. Além disso, ela tem sido usada internamente em produção por mais de um ano.

## Licença

MIT License

Copyright (c) 2019-2020 Patrick Pissurno

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
