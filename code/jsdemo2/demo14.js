console.log(1)

setTimeout(() => {
  console.log(6)
}, 0)

const p = new Promise((resolve, reject) => {
  console.log(2)
  resolve()
})

p.then(() => {
  console.log(3)
})

setTimeout(() => {
  console.log(4)
  setTimeout(() => {
    console.log(7)
  }, 0)
}, 0)

console.log(5)

//1 2 5 3 6 4 7
