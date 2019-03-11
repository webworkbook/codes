const a = async function() {
  setTimeout(() => {
    return 1
  }, 100)
}
const b = a()
console.log('----', b)
const p = function() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(5)
    }, 2000)
  })
}

// const c = await a() // 报错
// console.log(c)
const d = async function() {
  let e = null
  const now = +Date.now()
  e = await p()
  const cost = Date.now() - now
  console.log(cost)
}
console.log(d) //[AsyncFunction: d]
console.log(d()) //Promise { <pending> }
