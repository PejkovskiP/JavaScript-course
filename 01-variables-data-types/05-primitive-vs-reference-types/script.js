// Values are stored on the stack
const name = 'Petar';
const age = '24';

// Reference values are stored on the heap 
const person = {
    name: 'Petar',
    age: 24
}

let newName = name;
newName = 'Pejkovski';

let newPerson = person;
newPerson.name = 'Pepsi'

console.log(name, newName);
console.log(person, newPerson);
