// const d1 = new Date('2020-01-01');
// const d2 = new Date('2020-10-01T00:00')
// console.log(d1.getFullYear(), d2.getFullYear);

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(function(value){
    return value > 18;
})

console.log(first);