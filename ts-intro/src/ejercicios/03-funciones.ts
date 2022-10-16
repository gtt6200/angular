/*
    ===== Código de TypeScript =====
*/
function sumar(a:number,b:number):number{
    return a + b;
}
const sumarFlecha = (a:number, b:number):number =>{
    return a + b;
}
function multiplicar(n1:number, n2?:number, base:number=2):number{
    return n1*base;
}
interface personajeLOR{
    nombre: string;
    pv:number;
    mostrarHp:() => void;
}

function curar(personaje:personajeLOR, curarX:number):void{
    personaje.pv += curarX;
}

const nuevoPersonaje: personajeLOR = {
    nombre: 'Yuniel',
    pv: 50,
    mostrarHp(){
        console.log(this.nombre, 'Puntos de Vida: ', this.pv);
    }
}

nuevoPersonaje.mostrarHp();
// const resultado = multiplicar(5,0,10);

// console.log(resultado);