// filter --> condition mene array elements filter kore...........

const players = [75, 65, 67, 72, 55, 59];
const selected = players.filter(p => p > 70);   // 70 er uporer nmbr gulo nibe
console.log(selected);

const selected2 = players.filter(p => p % 2 === 1);     // odd nmbr gulo nibe
console.log(selected2);