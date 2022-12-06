// TDD delete branch from admin role
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'

import { adminDeleteBranch } from '../functions/branchCrud.js'

import { adminSchema } from '../Schemas/admin_system.js'

import { branch } from '../Schemas/branch.js'

import { leaderSchema } from '../Schemas/leader.js'

describe('As an admin, I need to delete branches from the system', () => {
  it('should return true if the branch is deleted', () => {
    const user = adminSchema
    const result = adminDeleteBranch(user, branch)
    expect(result).to.equal(true)
  })

  it('Verify that the request is being made from an administrator user', () => {
    const user = leaderSchema
    assert.throws(
      () => adminDeleteBranch(user, branch),
      Error,
      "You don't have permission"
    )
  })

  it('Validate that the branch exists in the system', () => {
    const user = adminSchema
    const notIdBranch = {
      id: null,
      name: 'test',
      address: 'test'
    }
    assert.throws(
      () => adminDeleteBranch(user, notIdBranch),
      Error,
      'Branch does not exist'
    )
  })
})
