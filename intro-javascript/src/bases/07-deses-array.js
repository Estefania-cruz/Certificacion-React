//desestructruacion de arreglos
const personas = ['jin', 'rm', 'suga'];
const[,p2,p3]= personas;
console.log(p2, p3);
//separar numeros y letras
const retornaArreglo = () => {
     return['ABDGDH', 1234567952];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//tarea
/*const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('hola mundo') } ];
};*/

//const [nombre, setNombre] = useState( 'jimin' );
//console.log(nombre);
//setNombre();
