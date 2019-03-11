const fs = require('fs')

const path = '/Users/jackalice/myWidget/weex/heibanFE/tech-share/code/jsdemo2/readme.md'
// 在这里阻塞直到文件被读取
// const data = fs.readFileSync(path)
// console.log(data)
// console.log(data.length)

//等同的 异步
// const data = fs.readFile(path, (err, data) => {
//     if (err) throw err;
// });
// console.log(data)               //undefined
// console.log(data.length)        //error

// const data = fs.readFileSync(path); // 在这里阻塞直到文件被读取
// console.log(data);
// console.log(data.length);
// moreWork()

//异步
fs.readFile(path, (err, data) => {
  if (err) throw err
  console.log(data)
})
moreWork() // 在console.log之前执行

function moreWork() {
  console.log('to do more work')
}
