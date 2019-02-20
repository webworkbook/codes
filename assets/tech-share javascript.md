一、JS的数据类型

```
基本类型:
Number: 1 2 3
String: 'a' 'b'
Boolean: true false
undefined
null
symbol(es6新定义的)

引用类型: Object Array Function
```

二、类型判断

```
typeof 1 // number
tyoeof 'a' // string
typeof true // boolean
typeof undefined // undefined
typeof {} // object
typeof [] // object
typeof console.log // function
```

typeof 对于对象除了函数都会输出 object

```
typeof null // object
```

    为什么会出现这种情况呢？因为在 JS 的最初版本中，使用的是 32 位系统，为了性能考虑使用低位存储了变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。

三、条件判断

    例如在if() {} else {}语句中
    括号内的值为falsy 和 trusly的值

    除了undefined, null, false, NaN, '', 0, -0

    其他所有的值都会转为trusly的值

四、javascript的隐式转换

    为什么条件判断时用“===” 而不是 “==”
    **因为使用==运算符时存在隐式转换**

    1. 对象和布尔值比较
    
    对象和布尔值进行比较时，对象先转换为字符串，然后再转换为 数字 ，布尔值直接转换为 数字
    
```
[] == false // true

```

    上述例子 [] 先转为字符串 '' 在转为数字0， false     直接转为数字0，因而返回结果为true
    
    注意： 空数组[]单独用于if 条件判断时， 仍为trusly的值， 因为[]是对象。

    2. 对象和字符串比较
    
    对象和字符串进行比较时，对象转换为字符串，然后两者进行比较
    
```
[1,2,3] == '1,2,3'  // true
```

    3. 对象和数字比较

    对象和数字进行比较时，对象先转换为字符串，然后转换为数字，再和数字进行比较。

```
[1] == '1' // true
```

    4. 字符串和数字比较

    字符串和数字进行比较时，字符串转换成数字，二者再比较。
```
'1' == 1 // true
```

    5. 字符串和布尔值比较

    字符串和布尔值进行比较时，二者全部转换成数值再比较。

```
'1' == true // true 
```

    6.布尔值和数字比较

    布尔值和数字进行比较时，布尔转换为数字，二者比较。
```
true == 1 // true
```

    隐式转换规则总结

    Object=> String => Number <= Boolean。

    7.Object和Object之间比较 总是转为字符串后再比较

    '===' 运算符的返回结果为true的条件为
    类型一致、值相等

    而对于引用类型， 在内存中的地址(指针)相同时 === 的运算结果才为true

三、js作用域

    es6标准发布之前，js执行上下文中只存在**全局作用域**和**函数作用域**

```
function foo () {
    var bar = 1
    console.log(bar) // 1
}
console.log(bar) // undefined

for (var i = 0; i < 10; i++) {
    console.log('inner:', i) // 0, 1 ... 9
}

console.log('outter:', i) // 10
```

    es6标准发布后出现了块级作用域，为了兼容es5的语法，块级作用域内变量声明使用**let** 和 **const** 关键字
    
    PS: 语法中 见 {} 既见块级作用域

```
for (let i = 0; i < 10; i++) {
    console.log('inner:', i) // 0, 1 ... 9
}

console.log('outter:', i) // Uncaught referenceError: i is not defined
```

    基于 commonJs 规范的.js单文件内部是一个块级作用域

    vue.js 每一个单文件组件的script标签内部也是块级作用域

四、 es6标准的一般用法

    1. 对象的解构赋值
    
    语法 { key } = { key : value }
    
    ```
    const foo = { a: 1, b: 2, c: 3 }
    const { a } = foo
    console.log(a) // 1
    
    ```
    
    2. 模板字符串
    
    es6之前， 字符串拼接方式为：
    
    ```
    var name = '王德发'
    var output = 'my name is ' + name
    console.log(output) // my name is 王德发
    ```
    
    Jquery时代， 向dom节点内添加一段html代码需要变下如下代码：
    
    ```
    var row1 = '我是第一行'
    var row2 = '我是第二行'
    $('#container').append(
        '<ul>' +
        '<li>' + row1 + '</li>' +
        '<li>' + row2 + '</li>' +
        '</ul>'
    )
    ```
    
    es6模板字符串符号为反引号``
    在模板字符串内，可以编写多行文本和嵌入变量
    
    上述例子可以写成
    ```
    var row1 = '我是第一行'
    var row2 = '我是第二行'
    
    $('#container').append(`
        <ul>
            <li>${ row1 }</li>
            <li>${ row2 }</li>
        </ul>
    `)
    ```
    
    3. 箭头函数
    
    例子：
    ```
    const f = ([arg1, arg2 ....]) => {
        console.log(123)
    }
    
    
    /* 当函数为单一参数时可以简写为 */
    
    const f = arg => {
        return arg
    } 
    
    
    /* 上述例子还可以简写为 */
    const a = 3
    const f = arg => arg
    f(a) // 3
    /* 不写 {} 表示 将=>后的表达式或值作为结果返回*/
    
    
    /* 注意 如果是返回一个字面量对象则需要用()包裹 , 否则会报错*/
    
    const f = () => ({a:1})
    f() // { a: 1 }
    
    
    /* 箭头函数中使用对象的结构赋值 */
    const obj = { a: 1, b: 2 }
    const f = ({ a, b }) => a + b 
    f(obj) // 3
    
    
    /* 不写大括号也不需要返回值 使用void 关键字*/
    const fn = () => void console.log('123')
    fn() // '123'
    
    ```
    注意事项:
    1. 箭头函数内的this为箭头函数指向函数创建时的环境
    2. 箭头函数没有arguments对象
    
    
    4. 深浅拷贝
    
    浅拷贝例子
    
    ```
    const a = [1, 2, 3, 4]
    const b = a
    b[0] = 4
    console.log(a[0]) // 4
    ```
    
    坏处： 
    
    当一个对象被多个变量引用时， 在某处修改了对象的值会影响到每个引用的对象
    
    此时需要深拷贝
    
    深拷贝的方法:
    
    1. Object.assign()
    
    ```
    const a = { a: 1, b: 2 }
    const b = Object.assign({}, a)
    b.a = 4 
    console.log(a.a) // 1
    ```
    
    Object.assign() 在对象第一层key对应的value为基本数据类型时使用
    
    ```
    const a = { a: 1, b: { c: 2 } }
    const b = Object.assign({}, a)
    
    b.b.c = 4
    console.log(a.b.c) // 4
    ```
    
    此处使用下述方法：
    
    2. JSON.parse(JSON.stringify())
    
    ```
    const a = { a: 1, b: { c: 2 } }
    const b = Object.assign({}, a)
    
    b.b.c = 4
    console.log(a.b.c) // 2
    ```
    
    该方法不能拷贝对象的原型，但是已经满足大部分业务需求， 如果需要拷贝对象原型则可以使用第三种方法
    
    3. _.cloneDeep()
    
    ```
    const a = { a: 1, b: { c: 2 } }
    const b = _.cloneDeep(a)
    b.b.c = 4
    
    console.log(a.b.c) //2 
    ```
    
    
