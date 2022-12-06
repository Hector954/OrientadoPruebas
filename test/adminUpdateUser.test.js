import { describe, it } from 'mocha'
import { assert, expect } from 'chai'
import { adminUpdateUser } from '../functions/adminCrud.js'

import { adminSchema } from '../Schemas/admin_system.js'
import { updateUser } from '../Schemas/updateUser.js'
import { leaderSchema } from '../Schemas/leader.js'

describe('As an admin, I need to update users from the system', () => {
  it('should return true if the user is updated', () => {
    const user = adminSchema
    const result = adminUpdateUser(user, updateUser)
    expect(result).to.equal(true)
  })

  it('Verify that the request is being made from an administrator user', () => {
    const user = leaderSchema
    assert.throws(
      () => adminUpdateUser(user, updateUser),
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
      () => adminUpdateUser(user, notIdUser),
      Error,
      'User does not exist'
    )
  })

  it('Validate user and password fields as required.', () => {
    const user = adminSchema
    const emptyUser = {
      username: '',
      password: '',
      role: ''
    }
    assert.throws(
      () => adminUpdateUser(user, emptyUser),
      Error,
      'Username and password are required'
    )
  })
})
