// export default function ShowThis() {
//   this.value = '刘德发'
//   setTimeout(() => {
//     // eslint-disable-next-line
//     console.log(this.value) // 刘德发
//   })
// }

export default function ShowThis () {
  this.value = '张德发'
  let _self = this
  
  setTimeout(function () {
    // eslint-disable-next-line
    console.log(_self.value) // 
  },1000)
}

