const login = formData => {
  const res = {
    code: 0
  }
  if (formData.name === 'test') {
    res.code = 1
  }
  return res
}

export default {
  login
}
