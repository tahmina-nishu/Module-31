// Array er prottek ta element k double kore kono operation calabo

// normally jevabe kora hoy 
const numbers = [4, 5, 2, 8, 10];
const doubled = [];

for(const num of numbers){
    const double = num * 2;
    doubled.push(double);
}

console.log(doubled);

// Simply korar way

function doubleIt(num){
    return num * 2;
}
// Another way

const double2 = n => n*2;


const result = numbers.map(double2);       //'map' function ta automatically sobgulo array element k niye call back function er kaj ta kore output dye dibe
console.log(result);  

const trippled = numbers.map(num => num * 3);   //evabe directly o function ta likhe fela jay
console.log(trippled);


// Another example of map
const freiends = ['Tom', 'Jhon', 'Michel', 'Oliver'];
const lengths = freiends.map(frnd => frnd.length);
console.log(lengths);

//first letter print
const firstLetter = freiends.map(frnd => frnd[0]);
console.log(firstLetter);