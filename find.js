// 'find' onekta 'filter' er moto.. kintu 'filter' e condition jara fulfil kore sobaike ney r 'find' e first element ta ney sudhu

const players = [75, 65, 67, 72, 55, 59];
const selected = players.find(p => p > 70);   // 70 er uporer nmbr gulo nibe
console.log(selected);

const selected2 = players.find(p => p % 2 === 1);     // odd nmbr gulo nibe
console.log(selected2);