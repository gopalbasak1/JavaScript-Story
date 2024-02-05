const numbers = [25, 4, 9, 16, 45];

function myFunction(value, index, array){
    return value > 18
}

const newNumber = numbers.find(myFunction)
console.log(newNumber);