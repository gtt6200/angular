/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    desc: string;
    precio: number
}

const telefono: Producto = {
    desc: 'Xiaomi',
    precio: 150
}

const tableta: Producto = {
    desc: 'Xiaomi Air',
    precio: 250
}


export function calculaISV(productos : Producto []):[number, number]{
    let total = 0;
    productos.forEach(  ({precio})=>{
        total += precio;
    })

    return [total,total*0.16];
}

const articulos = [ telefono, tableta];

const [total, isv] = calculaISV(articulos);
// console.log('el total es: ', total);

// console.log('el impuesto es: ', isv);
