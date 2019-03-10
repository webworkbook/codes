//作用域
const f = function() {
  if (true) {
    var x = 5 //5, 语句块中声明的变量将成为语句块所在函数（或全局作用域）的局部变量
    x = 6
    // let x = 5   // x is not defined
  }
  console.log(x) // 6
}

f()
console.log('--------')

//你可以先使用变量稍后再声明变量而不会引发异常。这一概念称为变量提升
console.log(x === undefined); // true
var x = 3   //变量提升
// let x = 10  //error , let（const）将不会提升变量到代码块的顶部
var myvar = 3;
(function() {
    console.log(myvar); // undefined
    var myvar = "local value"
})()