let person = { username: "网络费", age: 19 };
// let someone = person;

let someone = { ...person };

console.log(person);
console.log(someone);

someone.username = "巴乔";

console.log(person);
console.log(someone);
