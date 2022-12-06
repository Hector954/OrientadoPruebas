// TDD update sucursales desde rol de administrador
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'

import { adminUpdateBranch } from '../functions/branchCrud.js'

import { adminSchema } from '../Schemas/admin_system.js'

import { branch } from '../Schemas/branch.js'
import { leaderSchema } from '../Schemas/leader.js'

describe('As an admin, I need to update branches from the system', () => {
  it('should return true if the branch is updated', () => {
    const user = adminSchema
    const result = adminUpdateBranch(user, branch)
    return expect(result).to.be.true
  })

  it('Verify that the request is being made from an administrator user', () => {
    const user = leaderSchema
    assert.throws(
      () => adminUpdateBranch(user, branch),
      Error,
      "You don't have permission"
    )
  })

  it('Validate branch and address fields as required.', () => {
    const user = adminSchema
    const emptyBranch = {
      name: '',
      address: ''
    }
    assert.throws(
      () => adminUpdateBranch(user, emptyBranch),
      Error,
      'Branch or address is empty'
    )
  })

  it('Validate that branch does not exist in the list', () => {
    const user = adminSchema
    const newBranch = {
      name: 'Branch1',
      address: 'Address1'
    }
    assert.throws(
      () => adminUpdateBranch(user, newBranch),
      Error,
      'Branch already exists'
    )
  })
})
