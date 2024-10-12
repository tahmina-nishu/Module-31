// sobgulo element niye kono operation calay
// er callback function e 2 ta parameter thakbe.. , diye erpor ekta initial value set korte hbe

const numbers = [4, 5, 7, 1, 2, 66];
const total = numbers.reduce((previous, current) => previous + current, 0)  // sobgulo nmbr er sum krbe
console.log(total);