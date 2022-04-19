//import, export y funciones comunes de arreglos
//importar
import {heroes} from '../data/heroes';
console.log(heroes);


/*const getHeroeById = (id) => {
    return heroes.find(function(id, nombre, owner){
        console.log(id, nombre, owner);
    });
}
//const [nombre, setNombre] = useState( 'jimin' );
//const [nombre, owner] = getHeroeById (2);
console.log(getHeroeById(5));*/


/*primera forma
const getHeroeById = (id) => {
    return heroes.find(  (heroes) => {
        if ( heroes.id === id){
            return true;
        }else{
            return false;
        }
    });

}
//console.log (getHeroeById(2));*/



/*segunda forma
const getHeroesById = (id) => {
    return heroes.find(  (heroes) => heroes.id === id);

}
console.log (getHeroesById(3));*/


//tercer forma
export const getHeroeById =(id) => heroes.find ((heroes) => heroes.id ===id);
//console.log (getHeroeesById(9));
///
export const getHeroeByOwner =(owner) => heroes.filter ((heroes) => heroes.owner ==='Marvel');
//onsole.log (getHeroeByOwner('Marvel'));

//esportacion por defecto
//import heroesTT from './data/heroes';//no lleva llaves y en el js de heroes se quita el hombre .
//el nombre de heroesTT se puede cambiar por caulquier cosa solo se pone el nombre para identificar
//ejemplo 
/*
export default [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    }*/

    