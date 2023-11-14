let x;

const name = 'Petar';
const age = 24;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template literals
    x = `Hello my name is ${name} and I am ${age} years old`;

// String properties and methods
    const s = new String('Hello World');

    x = typeof s;

    x = s.length;

// Access value by key
    x = s[0];

    x = s.__proto__;

    x = s.toUpperCase();
    x = s.toLowerCase();

    x = s.charAt(0);

    x = s.indexOf('d');

    x = s.substring(0, 5);

    x = s.substring(7)

    x = s.slice(-11, -6);

    x = '    Hello World';
    x = s.trim();

    x = s.replace('World', 'Petar');

    x = s.includes('Hell');

    x = s. valueOf();

    x = s.split('');

console.log(x);