let username = "Tom";
let age = 3;
let sing = function () {
  console.log("i love Jerry");
};

//传统
// let person = {
//   username: "Tom",
//   age: 2,
//   sing: function () {
//     console.log("I love Jerry");
//   },
// };

//简化
let person = {
  username,
  age,
  sing,
};

console.log(person.username);
console.log(person.age);
person.sing();
