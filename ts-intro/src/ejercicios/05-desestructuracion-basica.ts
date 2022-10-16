/*
    ===== Código de TypeScript =====
*/
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalle
}

interface Detalle{
    autor:string;
    anio:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:40,
    cancion: 'Hace Tiempo',
    detalles:{
        autor:'La isla centeno',
        anio:2022
    }
}

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor, anio} = detalles;


// console.log('El volumen es: ', volumen);
// console.log('El segundo es: ', segundo);
// console.log('La canción es: ', cancion);
// console.log('El autor es: ', autor);
// console.log('Año de lanzamiento: ', anio);

const naruto: string[] = ['naruto', 'sasuke', 'kakashi'];
const [p1,p2,p3] = naruto;

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p3);
console.log('Personaje 3: ', p2);