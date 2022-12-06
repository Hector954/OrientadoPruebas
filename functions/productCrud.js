import { ProductList } from '../List/productsList.js'

export const adminCreateProduct = (user, product) => {
  if (user.role !== 'admin') {
    console.log("You don't have permission")
    throw new Error("You don't have permission")
  }
  if (!product.name || !product.price) {
    console.log('Product or price is empty')
    throw new Error('Product or price is empty')
  }
  if (ProductList.find((item) => item.name === product.name)) {
    console.log('Product already exists')
    throw new Error('Product already exists')
  }
  if (typeof product.price !== 'number' || typeof product.quantity !== 'number') {
    console.log('Price and quantity must be numbers')
    throw new Error('Price and quantity must be numbers')
  }
  if (product.price < 0 || product.quantity < 0) {
    console.log('Price and quantity must be greater than 0')
    throw new Error('Price and quantity must be greater than 0')
  }

  ProductList.push(product)
  console.log('Product created')
  return true
}

export const adminUpdateProduct = (user, product) => {
  if (user.role !== 'admin') {
    console.log("You don't have permission")
    throw new Error("You don't have permission")
  }
  if (!product.name || !product.price) {
    console.log('Product or price is empty')
    throw new Error('Product or price is empty')
  }
  if (ProductList.find((item) => item.name === product.name)) {
    console.log('Product already exists')
    throw new Error('Product already exists')
  }
  if (typeof product.price !== 'number' || typeof product.quantity !== 'number') {
    console.log('Price and quantity must be numbers')
    throw new Error('Price and quantity must be numbers')
  }
  if (product.price < 0 || product.quantity < 0) {
    console.log('Price and quantity must be greater than 0')
    throw new Error('Price and quantity must be greater than 0')
  }

  ProductList.push(product)
  console.log('Product updated')
  return true
}

export const adminDeleteProduct = (user, product) => {
  if (user.role !== 'admin') {
    console.log("You don't have permission")
    throw new Error("You don't have permission")
  }
  if (!product.name) {
    console.log('Product is empty')
    throw new Error('Product is empty')
  }
  if (!ProductList.find((item) => item.name === product.name)) {
    console.log('Product does not exist')
    throw new Error('Product does not exist')
  }

  const index = ProductList.findIndex((item) => item.name === product.name)
  ProductList.splice(index, 1)
  console.log('Product deleted')
  return true
}
