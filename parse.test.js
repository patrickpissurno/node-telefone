const tap = require('tap');
const parse = require('./parse');

tap.equal(parse(null), null, 'null deve retornar null');
tap.equal(parse('123'), null, 'telefone inválido deve retornar null');
tap.equal(parse('00000000000'), null, 'telefone inválido deve retornar null');
tap.equal(parse('00900000000'), null, 'telefone inválido deve retornar null');
tap.equal(parse('9999999999'), null, 'telefone inválido deve retornar null');
tap.equal(parse('1190000000'), null, 'telefone inválido deve retornar null');
tap.equal(parse('1178000000'), null, 'celulares da nextel desde 2018 também começam com 9');
tap.equal(parse('9921990000000'), null, 'telefone começando com DDI não brasileiro deve retornar null');
tap.equal(parse('2140028922', { apenasCelular: true }), null, 'telefone fixo deve retornar null quando apenasCelular é true');
tap.equal(parse('21987874747', { apenasFixo: true }), null, 'celular deve retornar null quando apenasFixo é true');
tap.equal(parse('36987874747'), null, 'telefone deve retornar null quando DDD é inválido');
tap.equal(parse('2110101010'), null, 'telefone deve retornar null quando as iniciais do fixo são inválidas');
tap.equal(parse('21987874747', { apenasDDD: [ '11' ] }), null, 'celular deve retornar null não for um dos DDDs do apenasDDD');

tap.equal(parse('(11) 4002-8922'), '1140028922', 'telefone fixo válido deve retornar somente números');
tap.equal(parse('11990000000'), '11990000000', 'telefone celular válido deve retornar somente números');
tap.equal(parse('5521990000000'), '21990000000', 'telefone válido começando com 55 deve retornar somente números sem DDI');
tap.equal(parse('99999999999'), '99999999999', 'telefone válido, pois dígitos repetidos podem ser um número válido');
tap.equal(parse('11956573882'), '11956573882', 'telefone válido, pois agora existem celulares que começam com 5');
