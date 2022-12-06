import { branchesList } from '../List/branches.js'

export const leaderReadStock = (user) => {
  const result = branchesList.find((branch) => branch.name === user.branch)
  if (user.role !== 'leader') {
    console.log("You don't have permission")
    throw new Error("You don't have permission")
  }
  if (!result || result.id === null) {
    console.log('Branch not found')
    throw new Error('Branch not found')
  }
  console.log(result.stock)
  return result.stock
}

export const leaderUpdateBranch = (user, newProduct) => {
  const result = branchesList.find((branch) => branch.name === user.branch)

  if (user.role !== 'leader') {
    console.log("You don't have permission")
    throw new Error("You don't have permission")
  }

  if (!result.stock.find((product) => product.id === newProduct.id)) {
    console.log('Product not found')
    throw new Error('Product not found')
  }
  const newStock = result.stock.map((product) => {
    if (product.id === newProduct.id) {
      return newProduct
    }
    return product
  })

  console.log('Product Updated', newStock)
  return true
}
