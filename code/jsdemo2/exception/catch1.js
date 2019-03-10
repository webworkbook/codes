function f () {
  try {
    const result = +'10' + 20
    console.log('result=' + result)
    throw new Error('error')
  } catch {
    
  }
}

f()

console.log(1)