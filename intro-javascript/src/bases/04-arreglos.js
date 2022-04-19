//arreglo
const arreglo = [1,2,3,4];
let arreglo2 = [...arreglo, 5];
//arreglo2.push(5);
/*function arreglo2(){
return 5,6,7;
}*/

const arreglo3 = arreglo2.map(function(numero){
return numero *2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
//console.log(arreglo(...arreglo2));
//console.log(arreglo.apply(null, arreglo2));