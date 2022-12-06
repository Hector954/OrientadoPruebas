const rolControl = (user) => {
  if (user === 'admin') {
    console.log('user is admin')
    return 0
  } else if (user === 'leader') {
    console.log('user is leader')
    return 1
  } else if (user === 'employee') {
    console.log('user is employee')
    return 2
  } else {
    console.log('user is not defined')
    return null
  }
}

export default rolControl
