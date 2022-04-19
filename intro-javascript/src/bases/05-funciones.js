//funciones em js
//se r4ecomienda la funcion con un const para evitar errores 
const saludar = function( nombre ){
    return `hola, ${ nombre }`;
}
console.log( saludar('fany') );
//console.table(saludar('hfy'));

//funcion con flecha

const saludar2 = (nombre) =>{
    return `hola, ${ nombre }`;
}

//se puede simplificar
const saludar3 = (nombre) => `hola, ${ nombre }`;

//normal sin paramtros
const saludar4 = () => `hola mundo`;

console.log( saludar2('fany aqui') );
console.log( saludar3('fany cruz') );
console.log( saludar4() );

const getUser = () => ({
    uid:'abdg',
    username:'fnays'
});
const user = getUser();
console.log( user );

/*TAREA*/
//1 funcion a flecha
//2 retornar a un objeto explicito
//3 pruebas


const getUsuarioActivo = (nombre) => ({
    uid:'ABC567',
    username: nombre
});

/*function getUsuarioActivo(nombre){
    return{
uid:'ABC567',
username: nombre
    }
};*/

const usuario = getUsuarioActivo('fany');
console.log(usuario);