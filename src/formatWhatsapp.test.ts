import tap from 'tap'
import { formatWhatsapp } from './formatWhatsapp'

tap.equal(formatWhatsapp(null), null, 'null deve retornar null')
tap.equal(formatWhatsapp('123'), null, 'telefone inválido deve retornar null')
tap.equal(
  formatWhatsapp('65 9205-0000'),
  null,
  'telefone celular sem o 9 digito é invalido e por isso deve retornar null',
)
tap.equal(formatWhatsapp('21986019754'), '5521986019754', 'celular DDD 11 a 28 deve retorno com 9 digito')
tap.equal(formatWhatsapp('(65) 99205-0000'), '556592050000', 'celular DDD acima de 28 deve retorno sem 9 digito')
tap.equal(formatWhatsapp('21 4021-5768'), '552140215768', 'telefone fixo válido retornar certo')
tap.equal(formatWhatsapp('65 3056-0000'), '556530560000', 'telefone fixo válido retornar certo')
