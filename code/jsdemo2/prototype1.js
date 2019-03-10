// 构造函数
function Person (name, age) {
  this.name = name
  this.age = age
}

// 这句话的作用是将Person的原型指向一个对象字面量
Person.prototype = {
    sayHello: function () {
        console.log(`hello my name is ${this.name}`)
    },
    name: 1
}

const p1 = new Person('王德发', 20)
p1.sayHello()// hello my name is 王德发

console.log(p1.name) // 王德发
console.log(p1.age) // 20

function Role (role) {
  this.role = role
}

Role.prototype = new Person('李德发', 20)

const p2 = new Role('doctor')
p2.sayHello()
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