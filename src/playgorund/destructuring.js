
// OBJECT DESTRUCTURING
//console.log('destructing');

// const person = {
//      name: 'Dileep',
//     age:21,
//     location:{
//         city:'Pavagada',
//         temparature:96.5
//     }
// }

// const {name:firstName='Anonymous',age} = person;
// const {city,temparature:temp} = person.location;

// console.log(`${firstName} is ${age}`);

// console.log(`${city} has ${temp} temparature`);

// const book = {
//     title:'Ego is the enemy',
//     author:'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const {name:publisherName='self-published'} = book.publisher;
// console.log(publisherName);

// ARRAY DESTRUCTURING

const address = ['Gavipuram Extn ','Bangalore','Karnataka','560019'];

const [,city,state='karnataka',zip] = address;
console.log(`You are in ${city} ${state},${zip}`);


const item = ['Coffee(iced)','$2.00','$2.50','$2.75'];

const [coffee,,medium,] = item;

console.log(`A medium ${coffee} costs ${medium}`);