// test para generar una venta con rol de lider
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'

import { leaderCreateSale } from '../functions/saleCrud.js'

import { leaderSchema } from '../Schemas/leader.js'
import { employeeSchema } from '../Schemas/employee.js'

import { saleSchema } from '../Schemas/sale.js'

describe('As a leader, I need to create sales from the system', () => {
  it('should return true if the sale is created', () => {
    const user = leaderSchema
    const result = leaderCreateSale(user, saleSchema)
    expect(result).to.equal(true)
  })

  it('Verify that the request is being made from an leader user', () => {
    const user = employeeSchema
    assert.throws(
      () => leaderCreateSale(user, saleSchema),
      Error,
      "You don't have permission"
    )
  })

  it('Validate that the prduct exists in the system', () => {
    const user = leaderSchema
    const notIdProduct = {
      id: null,
      name: 'test',
      price: 100,
      quantity: 10
    }
    assert.throws(
      () => leaderCreateSale(user, notIdProduct),
      Error,
      'Product does not exist'
    )
  })
})
