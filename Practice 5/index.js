        //Problem 1

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++
//         }
//     }
//     console.log(count);
// }


// const countVow = (str) =>{
//     let count = 0;
//     for(const char of str){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++
//         }
//     }
//     console.log(count);
// }


        //Problem 2

// const nums = [1,2,3,4,5,6];

// nums.forEach((num)=>{
//     console.log(num**2); //num * num
// })

// const nums = [1,2,3,4,5,6,8];

// let calcSquare = (num)=>{
//     console.log(num * num);
// }

// nums.forEach(calcSquare)


        //Problem 3

// let marks = [97, 64, 32, 49, 99, 96, 86]

// let toppers = marks.filter((val)=>{
//     return val > 90;
// })

// console.log(toppers);

let n = prompt('enter a number : ')

let arr = [];

for(let i = 1; i <= n; i++){
    arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr)=>{
    return res + curr;
})

console.log('sum =',sum);

let factorial = arr.reduce((res,curr)=>{
    return res * curr;
})

console.log('factorial =', factorial);