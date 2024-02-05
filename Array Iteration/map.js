const numbers = [45, 4, 9, 16, 25];

function myFunction(value){
    return value * 2
}

const newNumbers = numbers.map(myFunction)
console.log(newNumbers);