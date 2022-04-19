
//desestructuracion
//asignacion desestructurante
const persona = {
    nombre:'tony',
    edad: 45,
    clave: 'ironman'
}

//aquie entra ala asignacion
const {edad, clave, nombre} = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

/*console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);*/

//aqui entra la desestructuracion

/*const retornaPersona = ({nombre, edad, fecha= '19/04/2022'}) =>{
    console.log(nombre, edad, fecha);

}
retornaPersona (persona);*/

/*const useContext = ({clave, edad}) => {
   // console.log(nombre, edad, fecha);
   return {
       nombreClave: clave,
       anios: edad,
       direction: {
        cuidad: 'new',
        zip: 564564654
            }
        
   }
}*/
//const {nombreClave, anios,direction:{cuidad, zip}} = useContext(persona);
//direccion es un objeto anidado que se puede nsacar
