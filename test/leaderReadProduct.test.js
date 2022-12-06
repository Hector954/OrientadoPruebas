import { describe, it } from 'mocha'
import { expect } from 'chai'

import { leaderReadStock } from '../functions/leaderCrud.js'

import { leaderSchema } from '../Schemas/leader.js'
import { employeeSchema } from '../Schemas/employee.js'

describe('As Branch Leader, you are required to access the Product List of the assigned branch.', () => {
  it('should return an array if the stock is read', () => {
    expect(leaderReadStock(leaderSchema)).to.be.an('array')
  })

  it('Verify that the request is being made from a leader user', () => {
    expect(() => leaderReadStock(employeeSchema)).to.throw(
      "You don't have permission"
    )
  })

  it('Validate that the branch exists', () => {
    const notIdBranch = {
      id_leader: 0,
      username: 'leader',
      password: 'leader',
      email: 'leader@gmal.com',
      role: 'leader',
      branch: 'Branch15'
    }
    expect(() => leaderReadStock(notIdBranch)).to.throw('Branch not found')
  })
})
