import { describe, it } from 'mocha'
import { expect } from 'chai'

import { leaderUpdateBranch } from '../functions/leaderCrud.js'

import { leaderSchema } from '../Schemas/leader.js'
import { employeeSchema } from '../Schemas/employee.js'

describe('As Branch Leader, you are required to update the Product List of the assigned branch.', () => {
  it('should return true if the stock is updated', () => {
    const newProduct = {
      name: 'Product4',
      quantity: 40,
      id: 3
    }
    return expect(leaderUpdateBranch(leaderSchema, newProduct)).to.be.true
  })

  it('Verify that the request is being made from an leader user', () => {
    const newProduct = {
      name: 'Product4',
      quantity: 40,
      id: 3
    }
    return expect(() => leaderUpdateBranch(employeeSchema, newProduct)).to.throw(
      "You don't have permission"
    )
  })

  it('Verify that the product exists', () => {
    const newProduct = {
      name: 'Product15',
      quantity: 40,
      id: 15
    }
    return expect(() => leaderUpdateBranch(leaderSchema, newProduct)).to.throw(
      'Product not found'
    )
  })
})
