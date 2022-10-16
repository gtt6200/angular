/*
    ===== Código de TypeScript =====
*/
function classDecorator<T extends { new (...args:any []): {} }>(
    consructor: T
){
    return class extends consructor {
        newProperty = "new Property";
        hello = "override";
    };
}

@classDecorator
class MiSuperClase{
    public miPropiedad: string = 'ABCD1234';

    imprimir(){
        console.log('Hola mundo');
    }
}

console.log( MiSuperClase );

const miClase = new MiSuperClase();
