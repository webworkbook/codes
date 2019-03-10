const p = new Promise((resolve, reject) => {
  reject(new Error('fail'))
})

p.then(r => {
  console.log(r)
}).catch(e => {
  console.log(e)
  console.log(2)
})
