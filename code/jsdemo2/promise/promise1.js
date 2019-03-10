const p = new Promise((resolve, reject) => {
    const now = +(new Date())
    setTimeout(() => {
        const future = +(new Date())
        resolve(future - now)
    }, 2000)
})

p
.then(result => {
    console.log(result)
    console.log('promise then: ', p)
})

console.log('promise pending: ', p)
