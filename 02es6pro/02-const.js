//声明常量
const PI = 3.1415926;
console.log(PI);

//1.声明时一定要有初始值
// const A

//2、一旦赋予了初始值就不能改变
// PI = 3.1415927;

//3、规范：大写字母和下划线
const a = 1;
console.log(a);

//4、当常量的地址不变时，可以修改常量的内容
const TEAM = ["康师傅", "雷神", "阳哥", "大海", "妹子"];
TEAM.push("环环");
console.log(TEAM);

TEAM = 100;
