### Promise

1.promise定义

Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

Promise对象有以下两个特点。

（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

2.基本用法：

    2.1 语法：
```
const p = new Promise((resolve, reject) => {
    if (/* 异步操作成功 */) {
        resolve(1)
    } else {
        reject('err')
    }
})

p.then(r => {
    console.log(r)
})

// 1
```

    2.2 错误处理
```
const p = new Promise((resolve, reject) => {
    reject(new Error('123'))
})

p.then(r => {
    console.log(r)
}, e => {
    console.log('some error:', e)
})

// some error UnhandledPromiseRejectionWarning ....
```


    2.3 返回结果为异步操作
    
```
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('fail'))
    }, 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(p1)
    }, 1000)
})

p2.then(r => {
    console.log(r)
}).catch(e => {
    console.log(e)
})
// fail UnhandledPromiseRejectionWarning ....
```

这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态。如果p1的状态是pending，那么p2的回调函数就会等待p1的状态改变；如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行。

3. promise发生错误不会阻塞当前js执行

```
function f() {
    throw new Error('err')
}

f()

console.log(1)

// err ...
// console.log(1) 不会被执行
```

```
const p = new Promise((resolve, reject) => {
    reject(new Error('fail'))
})

p.then(r => {
    console.log(r)
}).catch(e => {
    console.log(e)
})

console.log(1)
// 1
// fail UnhandledPromiseRejectionWarning ....
```
### async 函数

1.用法
```
const a = async function () {
    return 1
}
const b = a()
console.log(b)

const c = await a()
console.log(c)

const d = async function () {
    console.log(await a())
}
```
 await 关键字一定要在 async 函数内部使用
### 原型链

    1.基本语法
```
// 构造函数
function Person (name, age) {
  this.name = name
  this.age = age
  
}
// 这句话的作用是将Person的原型指向一个对象字面量
Person.prototype = {
    sayHello: function () {
        console.log(`hello my name is ${this.name}`)
    }
}

const p1 = new Person('王德发', 20)
p1.sayHello()// hello my name is 王德发

console.log(p1.name) // 王德发
console.log(p1.age) // 20

function Role (role) {
  this.role = role
}

Role.prototype = new Person('王德发', 20)

const p2 = new Role('doctor')

console.log(p2) // { role: 'doctor' }
console.log(p2.name) // '王德发'
console.log('===============')
console.log(p2.__proto__) // Person { name: '王德发', age: 20 } 
console.log(p2.__proto__.__proto__)// Person { sayHello: [Function: sayHello] } //
console.log(p2.__proto__.__proto__.__proto__)// {}
console.log(p2.__proto__.__proto__.__proto__.__proto__)// null
console.log('---------------')
console.log(p2.hasOwnProperty('name')) // false
console.log('name' in p2) // true
```

原型链总结为： 向下继承， 向上查找

    2. es6 
    
```
// es6 语法

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  // constructor之外的即Person的prototype 原型
  sayHello () {
    console.log(`hello my name is ${this.name}`)
  }
}

const p1 = new Person('www', 20)
console.log(p1.name)
console.log(p1.age)
p1.sayHello()
console.log('------------')
console.log('name' in p1)
console.log('sayHello' in p1)
console.log(p1.hasOwnProperty('sayHello'))
// class定义的内部方法是不可枚举的
console.log(p1.__proto__)

class Role extends Person {
  constructor (role) {
    // console.log(this.role) // 报错
    super() // 调用父类型的constructor函数， 将name age, 绑定为自己的私有属性
    this.role = role
  }
}

const p2 = new Role('王德发', 20, 'doctor')
console.log(p2.role)
console.log(p2.name)
console.log(p2.__proto__)
console.log(p2.__proto__.__proto__)
console.log('name' in p2)
console.log(p2.hasOwnProperty('name'))


```

    可以这样理解：作为一个对象，子类（B）的原型（__proto__属性）是父类（A）；作为一个构造函数，子类（B）的原型对象（prototype属性）是父类的原型对象（prototype属性）的实例。
    

### 闭包
简单讲，闭包就是指有权访问另一个函数作用域中的变量的函数。

闭包的作用域链包含着它自己的作用域，以及包含它的函数的作用域和全局作用域。
例子：
```
const a = 10
const b = function () {
  const c = 2
  const d = 2
  const e = function () {
    return c + d + a
  }

  return e
}

const f = b()

console.log(f())

f = null // 释放引用

```

通常，函数的作用域及其所有变量都会在函数执行结束后被销毁。但是，在创建了一个闭包以后，这个函数的作用域就会一直保存到闭包不存在为止.

闭包的应用： 匿名函数

匿名函数最大的用途是创建闭包，并且还可以构建命名空间，以减少全局变量的使用。从而使用闭包模块化代码，减少全局变量的污染。

```
(function () {
  const a = 1 
  const b = 2
  global.c = a + b
})()

console.log(global.c)

```