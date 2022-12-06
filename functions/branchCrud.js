import { branchesList } from '../List/branches.js'

export const adminCreateBranch = (user, branch) => {
  if (user.role !== 'admin') {
    console.log("You don't have permission")
    throw new Error("You don't have permission")
  }
  if (branch.name === '' || branch.address === '') {
    console.log('Branch or address is empty')
    throw new Error('Branch or address is empty')
  }
  if (branchesList.some((item) => item.name === branch.name)) {
    console.log('Branch already exists')
    throw new Error('Branch already exists')
  }
  console.log('Branch created')
  return true
}

export const adminUpdateBranch = (user, branch) => {
  if (user.role !== 'admin') {
    console.log("You don't have permission")
    throw new Error("You don't have permission")
  }
  if (branch.name === '' || branch.address === '') {
    console.log('Branch or address is empty')
    throw new Error('Branch or address is empty')
  }
  if (branchesList.some((item) => item.name === branch.name)) {
    console.log('Branch already exists')
    throw new Error('Branch already exists')
  }
  console.log('Branch updated')
  return true
}

export const adminDeleteBranch = (user, branch) => {
  if (user.role !== 'admin') {
    console.log("You don't have permission")
    throw new Error("You don't have permission")
  }
  if (branch.id === null) {
    console.log('Branch does not exist')
    throw new Error('Branch does not exist')
  }
  console.log('Branch deleted')
  return true
}
