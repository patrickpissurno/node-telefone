const tap = require('tap');
const format = require('./format');

tap.equal(format(null), null, 'null deve retornar null');
tap.equal(format('123'), null, 'telefone inválido deve retornar null');
tap.equal(format('21986019754'), '(21) 98601-9754', 'celular válido deve retornar certo');
tap.equal(format('2140215768'), '(21) 4021-5768', 'telefone fixo válido retornar certo');