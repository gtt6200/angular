/*
    ===== Código de TypeScript =====
*/
class PersonaNormal{
    constructor(
        public nombre:string,
        public direccion:string
        ){}
}
class Heroe extends PersonaNormal{

    constructor( 
        public alerEgo:string,
        public edad:number,
        public nReal: string
        ){
            super(nReal, 'Miami');
        }
    
}

const ironman = new Heroe('Hombre de acero',23,'Tony Stark');

console.log(ironman);

