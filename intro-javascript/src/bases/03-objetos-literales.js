
const perro = {
    nombre :'faany',
    edad : 20,
    direction: {
cuidad: 'new',
zip: 564564654
    }

};
console.log( perro );
//console.table(perro);

//clone del objeto
const person ={...perro}
person.nombre='luis';

console.log(person);