class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  // constructor之外的即Person的prototype 原型
  sayHello () {
    console.log(`hello my name is ${this.name}`)
  }
  
  sayxxx () {
    console.log('xxx')
  }
}

const p1 = new Person('www', 20)
console.log(p1.name)
console.log(p1.age)
p1.sayHello()
console.log('------------')
console.log('name' in p1)     //true
console.log('sayHello' in p1) //true
console.log(p1.hasOwnProperty('name'))  //true
console.log(p1.hasOwnProperty('sayHello'))  //false
// class定义的内部方法是不可枚举的
console.log(p1.__proto__)

class Role extends Person {
  constructor (role) {
    // console.log(this.role) // 报错
    super() // 调用父类型的constructor函数， 将name age, 绑定为自己的私有属性
    this.role = role
  }
}

const p2 = new Role('doctor')
p2.name = 'jack'
console.log('=================')
console.log(p2.role)
console.log(p2.name)
console.log(p2.__proto__)
console.log(p2.__proto__.__proto__)
console.log('name' in p2)
console.log(p2.hasOwnProperty('name'))
