import { ProductList } from '../List/productsList.js'

export const leaderCreateSale = (user, sale) => {
  if (user.role !== 'leader') {
    console.log('You do not have permission')
    throw new Error("You don't have permission")
  }
  if (ProductList.find((product) => product.id === sale.id) === undefined) {
    console.log('Product does not exist')
    throw new Error('Product does not exist')
  }
  console.log('Sale created')
  return true
}
