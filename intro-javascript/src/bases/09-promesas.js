//importar el get id
import { getHeroeById} from "./bases/08-importaciones-ex";
//promesas
/*const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve();
    const heroe = getHeroeById(3);
    //console.log(heroe);
    resolve(heroe);
   // reject("no se encontro nda ");

    const heroee = getHeroeByOwner("DC");
    console.log(heroee);
  }, 2000);
});*/

/*promesa.then((heroe) => {
  console.log("promise de jimin", heroe);
}).catch(err =>console.warn(err));
//el catch para la alerta*/


  const getHeroeByIdAsync = ( id ) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
          // resolve();
          const heroe = getHeroeById(id);
          if(heroe){
            resolve(heroe);
          }else{

            reject("no se encontro nda ");
          }
          //console.log(heroe);
         
      
          /*const heroee = getHeroeByOwner("DC");
          console.log(heroee);*/
        }, 2000);
      });
      return promesa;
  }
  getHeroeByIdAsync(15).then(heroe => console.log('bts', heroe)).catch(err =>console.warn(err));
