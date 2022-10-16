import { Producto, calculaISV } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'electrocardiograma',
        precio: 4000
    },
    {
        desc: 'mastografia',
        precio: 8000
    },
];

const [total, isv]= calculaISV(  carritoCompras  );

console.log('Total: ', total);
console.log('isv: ', isv);


