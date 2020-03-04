//https://gist.github.com/jonathangoncalves/7bdec924e9bd2bdf353d6b7520820b62
//https://www.teleco.com.br/num.asp
//https://forum.vivo.com.br/threads/52419-N%C3%BAmero-de-Celular-sem-come%C3%A7ar-com-quot-9-quot-ainda-existe

const codigosDDD = [
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    21, 22, 24, 27, 28, 31, 32, 33, 34,
    35, 37, 38, 41, 42, 43, 44, 45, 46,
    47, 48, 49, 51, 53, 54, 55, 61, 62,
    64, 63, 65, 66, 67, 68, 69, 71, 73,
    74, 75, 77, 79, 81, 82, 83, 84, 85,
    86, 87, 88, 89, 91, 92, 93, 94, 95,
    96, 97, 98, 99
];

const iniciaisFixo = [ '2', '3', '4', '5' ];

const default_options = {
    apenasFixo: false,
    apenasCelular: false,

    /** @type { string[] } */
    apenasDDD: null
}

/**
 * @param {string} value número de telefone
 */
module.exports = function (value, options = default_options){   
    if(value == null || typeof(value) !== 'string')
        return null;

    let telefone = value.replace(/\D/g, '');

    if(telefone.length === 12 || telefone.length === 13){
        if(telefone.substring(0,2) === '55')
            telefone = telefone.substring(2, telefone.length);
        else
            return null; //DDI não brasileiro
    }

    if (telefone.length < 10 || telefone.length > 11)
        return null;

    if (options.apenasCelular === true && telefone.length === 10)
        return null; //todos os celulares tem 9 dígitos

    if(options.apenasFixo === true && telefone.length === 11)
        return null; //todos os telefones fixos tem 10 dígitos

    if (telefone.length === 11){
        if(telefone.substring(2, 3) !== '9')
            return null; //todos os telefones celulares começam com 9
        if(telefone.substring(3, 4) === '0')
            return null; //não existe 90
    }
    else if(telefone.length === 10 && iniciaisFixo.indexOf(telefone.substring(2, 3)) === -1)
        return null; //inicial do celular fixo

    const ddd = telefone.substring(0, 2);
    if (codigosDDD.indexOf(parseInt(ddd)) === -1)
        return null; //código de DDD inválido

    if (options.apenasDDD != null && options.apenasDDD.indexOf(ddd) === -1)
        return null; //código de DDD inválido

    return telefone;
}
