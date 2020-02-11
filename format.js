const parse = require('./parse');

/**
 * @param {string} value número de telefone
 */
module.exports = function(value){
    value = parse(value);
    if(!value)
        return value;

    if(value.length === 10)
        return `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6, 11)}`;
    return `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 12)}`;
}