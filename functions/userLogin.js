const userLogin = (user) => {
  if (user.username === '' || user.password === '') {
    console.log('Username or password is empty')
    throw new Error('Username or password is empty')
  }
  if (user.username !== 'test') {
    console.log('Username incorrect')
    return false
  }
  if (user.password !== 'test') {
    console.log('Password incorrect')
    return false
  }

  console.log('Welcome to the system')
  return true
}

export default userLogin
