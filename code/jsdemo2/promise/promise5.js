const p1 = new Promise((resolve, reject) => {
  resolve(1)
})

p1
.then(r => {
  console.log(r)
})
.then(r => {
  console.log(2)
})
.then(r => {
  console.log(3)
})

const p2 = new Promise((resolve, reject) => {
  resolve(10)
})

p2
.then(r => {
  console.log('p2 then ' + r)
  return Promise.resolve(++r)
})
.then(r => {
  return Promise.resolve(++r)
})
.then(r => {
  console.log(r)
})