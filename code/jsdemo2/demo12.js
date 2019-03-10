//匿名函数
(function () {
  var a = 1 
  var b = 2
  global.c = a + b
  a = null
  b = null
})()

console.log(global.c)
