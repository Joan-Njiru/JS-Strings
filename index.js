1.
let str = "beautiful";
let lastFour = str.slice(-4);
console.log(lastFour);

2.
const food = "I was feeling hungry today";
let adding = "eat";
let position= 4;
let output = [food.slice(0, position), adding, food.slice(position)].join('');
console.log(output);

3.
const story= "the quick brown fox jumps over the lazy dog";
let count = (story.match(/the/g) || []).length;
console.log(count);node 

const praise = "wonderful";
const person = "amazing";
const bad = "BEneath";
console.log(person.toLowerCase());
console.log(bad.toLowerCase());
console.log(person.toUpperCase());

const celebration = "A beautiful wedding";
const wed = celebration.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())