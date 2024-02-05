// const car = {
//   name: "Fiat",
//   model: 500,
//   weight: "850kg",
//   color: "White",
//   start: function () {
//     this.drive();
//     console.log("car has started");
//   },
//   drive: function () {
//     console.log("car is driving");
//   },
// };
//  console.log(car.name);
//  console.log(car["model"]);
// car.start();
// car.drive();

// const person = {
//   firstName: "Jhon",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log(person.fullName());

// let x = "Rahim"; //String of literal syntax;
// let x = new String("Rahim"); //ae vaba likha jai

// let x = 5; //Number of literal syntax //number pabo
// let x = new Number(5); //ae vaba likla object pabo

// let x = new Number(5);
// console.log(x);

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
};
console.log(shape.diameter());

function sayHi() {
  console.log(name);
  console.log(age);
  var name = "JavaScript";
  let age = 21;
}
sayHi();
