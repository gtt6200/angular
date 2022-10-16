/*
    ===== Código de TypeScript =====
*/
interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1 : Pasajero = {
    nombre: 'yuniel',
}

const pasajero2 : Pasajero = {
    nombre: 'Jehu',
    hijos: ['Alan', 'David'],
}


function imprimeHijo(pasajero:Pasajero): void{
    const cuantosHijos =  pasajero.hijos?.length || 0;

    console.log(  cuantosHijos  );
    
}

imprimeHijo(pasajero1);