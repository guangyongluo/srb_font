//传统
let person = {
  sayHi: function () {
    console.log("Hi");
  },
  sing: function () {
    console.log("一闪一闪亮晶晶");
  },
};

person.sayHi();
person.sing();

//简化
let person1 = {
  sayHi() {
    console.log("Hi");
  },
  sing() {
    console.log("一闪一闪亮晶晶");
  },
};

person1.sayHi();
person1.sing();
