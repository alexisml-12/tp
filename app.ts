// function saludar(nombre:string) {

//     console.log("Hola " + nombre.toUpperCase() );
// }

// var wolverine = {
//     nombre: "Logan"
// };

// saludar(wolverine.nombre)

// let nombre:string = "Alexis"
// let apellido:string = "Murillo"
// let edad:number = 20;

// let texto = `Hola, ${nombre} ${apellido} (${edad})`;

// function getNombre(){
//     return "Juanes";
// }

// let texto2:string = `${getNombre()}`;

// console.log(texto2);

// Funciones con parametros
//Parametro obligatorio
// function activar( quien:string){
//     let mensaje:string;

//     mensaje = `${quien} activo la batiseñal`;

//     console.log(mensaje)
// }

// activar("Gordon");

//Parametro por defecto
// function activar( quien:string, 
//                   objeto:string = "batiseñal",
//                   momento?:string){
//     let mensaje:string;

//     if(momento){
//         mensaje = `${quien} activo la ${objeto} en la ${momento}`;
//     }
//     else{
//         mensaje = `${quien} activo la ${objeto}`;
//     }

//     console.log(mensaje)
// }

// activar("Gordon","batiseñal","en la noche");

//Funcion de flecha
// let miFuncion = function(a){
//     return a;
// }

// let miFuncionF = a => a;
// //-------------------------------------------------
// let miFuncion2 = function(a:number,b:number){
//     return a + b;
// }

// let miFuncionF2 = (a:number,b:number) => a + b;
// //----------------------------------------------------

// let miFuncion3 = function(nombre:string){
//     nombre = nombre.toUpperCase();
//     return nombre;
// }

// let miFuncion3F = (nombre:string) => {
//     nombre = nombre.toUpperCase();
//     return nombre;
// }
// //------------------------------------------------------
// let hulk = {
//     nombre: "Hulk",
//     smash(){
    
//         setTimeout(()=>console.log(this.nombre + " smash!!"),1500);
//     }
// }

// hulk.smash();
//------------------------------------------------------------------
//11.Destructuracion... arreglos
// let avenger={
//     nombre:"Tony",
//     clave:"Iron Man",
//     poder:"Filantropo millonario con un supertraje"
// }

// let {nombre,clave,poder}= avenger;

// console.log(nombre,clave,poder);

//Arreglos
// let avenger:string[]=["Bruce", "Rocket", "Peter"];

// let [Hulk, Rocket, spidy] = avenger;

// console.log(Hulk, Rocket, spidy);

//Interfaces
// interface Xmen{
//     nombre:string,
//     poder:string
// }
// function enviarMision(xmen:Xmen){
//     console.log("Eviando a:" + xmen.nombre);
// };

// function enviarCuartel(xmen:Xmen){
//     console.log("Eviando al cuartel:" + xmen.nombre);
// };

// let wolverine:Xmen={
//     nombre:"Wolverine",
//     poder:"Rgeneracion"
// };
// enviarMision(wolverine);
// enviarCuartel(wolverine);

//CLASES
class Avenger {

    nombre:string=undefined;
    equipo:string=undefined;
    nombreReal:string=undefined;

    puedePelear:boolean=false;
    peleasGanadas:number=0;

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre= nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}

let antman:Avenger = new Avenger("Antman","Equipo Cap","Scott");
console.log(antman)










