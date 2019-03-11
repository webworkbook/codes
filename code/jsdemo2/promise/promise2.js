//error
const p1 = new Promise((resolve, reject) => {
  console.log('reject error p1')
  reject(new Error('abc'))
})

p1.then(
  result => {
    console.log(result)
  },
  err => {
    console.log('err p1:', err)
  }
)

const p2 = new Promise((resolve, reject) => {
  console.log('reject error p2')
  reject(new Error('1234'))
})

p2.then(result => {
  console.log('p2 success: ', result)
}).catch(err => {
  console.log('err p2:', err)
})
