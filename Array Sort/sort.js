// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// fruits.sort();
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// fruits.reverse();
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// fruits.sort()
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a,b){
//     return a -b;
// })
// console.log(points);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a,b){
//     return b - a;
// })
// console.log(points);


// const points = [40, 100, 1, 5, 25, 10];
// points.sort()
// console.log(points);
// points.sort(function(a,b){
//     return b - a;
// })
// console.log(points);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a,b){
//     return 0.5 - Math.random()
// })
// console.log(points);

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];
//   cars.sort(function(a,b){
//     return a.year - b.year
//   })
//   console.log(cars);

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
cars.sort(function(a,b){
    x = a.type.toLowerCase();
    y = b.type.toLowerCase();
    if(x<y){
        return -1
    };
    if(x<y){
        return 1
    }
})  
console.log(cars);