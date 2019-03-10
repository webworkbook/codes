Axios.get(url, function (res) {
  Bxios.post(res.url, function() {

  })
})

let res1 = null

Axios.get(url, function (res) {
  res1 = res
})

console.log(res1)

const Axios = function () {
  this.get = function (url, cb) {
    ajax.get({
      url: url,
      success: function (res) {
        cb(res)
      }
    })
  }
}