//Execrcice 1 :

console.log('Execrcice 1 :');

const numbers1 = [1, 7, 10, 9, 8 , 2];

const sortednumbers1 = numbers1.filter((n) => n % 2 === 0).sort((a, b) => a - b);

console.log(sortednumbers1);

//Execrcice 2 :

console.log('Execrcice 2 :');

const numbers2 = [1,3 , 4];

function fact(n) {
    if (n === 0)return 1;
    return n * fact(n - 1);
}

const sortednumbers2 = numbers2.map((n) => fact(n));

console.log(sortednumbers2);

//Execrcice 3 :

console.log('Execrcice 3 :');

const text = `Hello LSI
On va tester le filtre
Je suis un étudiant
pas un developpeur`;

const result = text.split('\n')
                  .map(line => line.toUpperCase())
                  .filter(line => line.includes('I'))
                  .forEach(line => console.log(line));

//Execrcice 4 :

console.log('Execrcice 4 :');

const numbers4 = [1, 7, 10, 9, 8];

const sortednumbers4 = numbers4.sort((a, b) => a - b);

console.log("Max : " + sortednumbers4.pop());

//Execrcice 5 :

console.log('Execrcice 5 :');

const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
    ];

const total = products.map((product) => product.price * 1.25).reduce((a, b) => a + b);
console.log("Total : " + total);
