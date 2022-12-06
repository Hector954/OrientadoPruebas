// TDD delete product from admin role
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'

import { adminDeleteProduct } from '../functions/productCrud.js'

import { adminSchema } from '../Schemas/admin_system.js'

import { productSchema } from '../Schemas/product.js'
import { leaderSchema } from '../Schemas/leader.js'

describe('As an admin, I need to delete products from the system', () => {
  it('should return true if the product is deleted', () => {
    const user = adminSchema
    const result = adminDeleteProduct(user, productSchema)
    expect(result).to.equal(true)
  })

  it('Verify that the request is being made from an administrator user', () => {
    const user = leaderSchema
    assert.throws(
      () => adminDeleteProduct(user, productSchema),
      Error,
      "You don't have permission"
    )
  })

  it('Validate that the product exists in the system', () => {
    const user = adminSchema
    const notIdProduct = {
      id: null,
      name: 'test',
      price: 100,
      quantity: 10
    }
    assert.throws(
      () => adminDeleteProduct(user, notIdProduct),
      Error,
      'Product does not exist'
    )
  })
})
