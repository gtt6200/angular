/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argunmento:T) {
    return argunmento;
}

let soyString = queTipoSoy('Hola mundo')
let soyNum = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9,10]);

let soyExplicito = queTipoSoy<number>(200);