const nombre = 'fany';
const ape = 'cruz';
 const nombreC = nombre + ' ' + ape;
 console.log(nombreC);
 //otra forma de concatenar
 console.log(`
 ${nombre} 
 ${ape}
 ${4+2}// se le pueden poner expresiones sin afectar
 `);

 function getSalu (){
     return 'hola mundo';
 }
// `` backtick
 console.log(`este es un saludo: ${getSalu()}`);