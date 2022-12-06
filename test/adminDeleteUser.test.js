// TDD delete user from admin role
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'

import { adminDeleteUser } from '../functions/adminCrud.js'

import { adminSchema } from '../Schemas/admin_system.js'
import { leaderSchema } from '../Schemas/leader.js'
import { deleteUser } from '../Schemas/deleteUser.js'

describe('As an admin, I need to delete users from the system', () => {
  it('should return true if the user is deleted', () => {
    const user = adminSchema
    const result = adminDeleteUser(user, deleteUser)
    expect(result).to.equal(true)
  })

  it('Verify that the request is being made from an administrator user', () => {
    const user = leaderSchema
    assert.throws(
      () => adminDeleteUser(user, deleteUser),
      Error,
      "You don't have permission"
    )
  })

  it('Validate that the user exists in the system', () => {
    const user = adminSchema
    const notIdUser = {
      id: null,
      username: 'test',
      password: 'test',
      role: 'employee'
    }
    assert.throws(
      () => adminDeleteUser(user, notIdUser),
      Error,
      'User does not exist'
    )
  })
})
