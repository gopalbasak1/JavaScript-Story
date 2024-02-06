// লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি

// function getRandom(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(getRandom(1, 6));

// কিভাবে আমরা শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি?

// const students = ["Sumit", "Saad", "Daiyan", "Akash"];

// console.log(students.sort());


// কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের রোল ক্রম অনুযায়ী সাজাতে পারি?

// const roll_numbers = [3, 5, 1, 6, 2, 30];

// console.log(roll_numbers.sort(function (a,b){
//      return a - b
// }))

// কোনো সাল Leap Year কিনা তা বের করতে পারি কিভাবে?

// function isLeapYear(year){
//     if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
//         console.log(`${year} is a leap year`);
//     }
//     else{
//         console.log(`${year} is not a leap year`);
//     }
// }
// isLeapYear(2024);
// isLeapYear(2026);


//কোনো sentence এ কতোগুলো vowel আছে তা নির্ণয় করা যায় কিভাবে?

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowels(sentence){
//     let count = 0;
//     const letters = Array.from(sentence);

//     letters.forEach(function(value){
//         if(vowels.includes(value)){
//             count++;
//         }
//     })
//     return count;
// }

// console.log(countVowels("I love Bangladesh"));


// কোনো Array থেকে duplicate নাম্বার গুলোকে কিভাবে বের করে আনতে পারি?

// const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

// const duplicates = numbers.filter(function(value, index, array){
//      return array.indexOf(value) !== index
// });

// console.log(duplicates);

// কোনো Array থেকে unique নাম্বার গুলোকে কিভাবে বের করে আনতে পারি?

const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const unique = numbers.filter(function(value, index, array){
    return array.indexOf(value) === index;
})

console.log(unique);