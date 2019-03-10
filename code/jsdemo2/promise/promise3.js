const p1 = new Promise((resolve, reject) => {
  const now = +(Date.now())
  setTimeout(() => {
    const delta = (Date.now()) - now
    console.log('p1: ' + delta)
    reject(new Error('p1 error'))
  }, 3000)
})

const p2 = new Promise((resolve, reject) => {
  const now = +(Date.now())
  setTimeout(() => {
    const delta = (Date.now()) - now
    console.log('p2: ' + delta)
    resolve(p1)
  }, 1000)
})

p2.then(r => void console.log(r))
.catch(e => void console.log('errrrrrrrrrrrrrrrrrrror', e))