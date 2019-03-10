//闭包
const a = 1
const b = function () {
    const x = 10
    const y = 20
    const z = function () {
        return x + y + a
    }

    return z
}

console.log(b())

const f = b()
console.log(f())