// TDD crear productos desde rol de administrador
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'

import { adminCreateProduct } from '../functions/productCrud.js'

import { adminSchema } from '../Schemas/admin_system.js'
import { leaderSchema } from '../Schemas/leader.js'

import { productSchema } from '../Schemas/product.js'

describe('As an admin, I need to create products from the system', () => {
  it('should return true if the product is created', () => {
    const user = adminSchema
    const result = adminCreateProduct(user, productSchema)
    return expect(result).to.be.true
  })

  it('Verify that the request is being made from an administrator user', () => {
    const user = leaderSchema
    assert.throws(
      () => adminCreateProduct(user, productSchema),
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
      () => adminCreateProduct(user, emptyProduct),
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
      () => adminCreateProduct(user, newProduct),
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
      () => adminCreateProduct(user, newProduct),
      Error,
      'Price and quantity must be numbers'
    )
  })

  it('Validate that price and quantity are greater than 0', () => {
    const user = adminSchema
    const newProduct = {
      name: 'Product5',
      price: -100,
      quantity: -10
    }
    assert.throws(
      () => adminCreateProduct(user, newProduct),
      Error,
      'Price and quantity must be greater than 0'
    )
  })
})
