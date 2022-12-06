import { branchesList } from '../List/branches.js'

export const adminCreateUser = (user, newUser) => {
  if (user.role !== 'admin') {
    console.log("You don't have permission")
    throw new Error("You don't have permission")
  }
  if (newUser.username === '' || newUser.password === '') {
    console.log('Username or password is empty')
    throw new Error('Username or password is empty')
  }
  if (newUser.username === 'test' && newUser.password === 'test') {
    console.log('Duplicate user')
    throw new Error('Duplicate user')
  }
  console.log('User created')
  return true
}

export const adminUpdateUser = (user, updateUser) => {
  if (user.role !== 'admin') {
    console.log("You don't have permission")
    throw new Error("You don't have permission")
  }
  if (updateUser.username === '' || updateUser.password === '') {
    console.log('Username and password are required')
    throw new Error('Username and password are required')
  }
  if (!updateUser.id || updateUser.id === null) {
    console.log('User does not exist')
    throw new Error('User does not exist')
  }
  console.log('User updated')
  return true
}

export const adminDeleteUser = (user, deleteUser) => {
  if (user.role !== 'admin') {
    console.log("You don't have permission")
    throw new Error("You don't have permission")
  }
  if (!deleteUser.id || deleteUser.id === null) {
    console.log('User does not exist')
    throw new Error('User does not exist')
  }
  console.log('User deleted')
  return true
}

export const adminReadInformation = (user, branch) => {
  if (user.role !== 'admin') {
    console.log("You don't have permission")
    throw new Error("You don't have permission")
  }
  if (branch === '') {
    console.log('Branch is empty')
    throw new Error('Branch is empty')
  }
  const result = branchesList.filter((item) => item.name === branch)
  if (result.length === 0) {
    console.log('Branch does not exist')
    throw new Error('Branch does not exist')
  }
  console.log(result)
  return result
}
