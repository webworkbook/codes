const getUserInfo = (formData) => {
  return new Promise(resolve => {
    let res = {
      code: 0,
      data: null
    }
  
    if (formData.account === 'admin') {
      res.code = 1
      res.data = {
        name: '李德发',
        userId: 'abcdefg'
      }      
    }
  
    resolve(res)
  })
}

export default {
  getUserInfo
}
