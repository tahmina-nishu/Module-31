// DATA ACCESS

const data = [{id: 1, name: 'tahmina', address: 'Chattogram'}];

// ekhane object ta ekta array er vitore ache.. tai object k access korte hole age array k access korte hobe'

console.log(data[0].name);
console.log(data[0].id);
console.log(data[0].address);

//Anotehr example
const students = {
    count: 500,
    data: [
        {id: 1, name: 'x', address: 'Dhaka'},
        {id: 2, name: 'y', address: 'Chattogram'},
        {id: 3, name: 'z', address: 'Cumilla'},
    ]
}

console.log(students.data[0].name);
console.log(students.data[1].id);
console.log(students.data[2].address);
// majhkhaner kono obj na thakle question mark use korte hobe..nahoy error khabe.... ETA K (OPTIONAL CHAINING) bole..example->
console.log(students.data[3]?.name);     // ekhane 3 index nai..tai erpor ? DITE HOBE,,