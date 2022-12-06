// TDD update productos desde rol de administrador
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'

import { adminUpdateProduct } from '../functions/productCrud.js'

import { adminSchema } from '../Schemas/admin_system.js'

import { productSchema } from '../Schemas/product.js'
import { leaderSchema } from '../Schemas/leader.js'

describe('As an admin, I need to update products from the system', () => {
  it('should return true if the product is updated', () => {
    const user = adminSchema
    const newProduct = {
      name: 'Product15',
      price: 100,
      quantity: 10
    }
    const result = adminUpdateProduct(user, newProduct)
    return expect(result).to.be.true
  })

  it('Verify that the request is being made from an administrator user', () => {
    const user = leaderSchema
    assert.throws(
      () => adminUpdateProduct(user, productSchema),
      Error,
      "You don't have permission"
    )
  })

  it('Validate product and price fields as required.', () => {
    const user = adminSchema
    const emptyProduct = {
      name: '',
      price: ''
    }
    assert.throws(
      () => adminUpdateProduct(user, emptyProduct),
      Error,
      'Product or price is empty'
    )
  })

  it('Validate that product does not exist in the list', () => {
    const user = adminSchema
    const newProduct = {
      name: 'Product1',
      price: 100
    }
    assert.throws(
      () => adminUpdateProduct(user, newProduct),
      Error,
      'Product already exists'
    )
  })

  it('Validate that price and quantity are numbers', () => {
    const user = adminSchema
    const newProduct = {
      name: 'Product5',
      price: 'test',
      quantity: 'test'
    }
    assert.throws(
      () => adminUpdateProduct(user, newProduct),
      Error,
      'Price and quantity must be numbers'
    )
  })

  it('Validate that price and quantity are greater than 0', () => {
    const user = adminSchema
    const newProduct = {
      name: 'Product100',
      price: -100,
      quantity: -10
    }
    assert.throws(
      () => adminUpdateProduct(user, newProduct),
      Error,
      'Price and quantity must be greater than 0'
    )
  })
})
