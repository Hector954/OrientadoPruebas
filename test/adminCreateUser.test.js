// TDD crear usuarios desde rol de administrador
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'

import { adminCreateUser } from '../functions/adminCrud.js'
import { adminSchema } from '../Schemas/admin_system.js'
import { leaderSchema } from '../Schemas/leader.js'
import { newUser } from '../Schemas/newUser.js'

describe('As an admin, I need to create users from the system', () => {
  it('should return true if the user is created', () => {
    const user = adminSchema
    const result = adminCreateUser(user, newUser)
    return expect(result).to.be.true
  })

  it('Send error if user is duplicated', () => {
    const user = adminSchema
    const newUser = {
      username: 'test',
      password: 'test',
      role: 'employee'
    }
    assert.throws(
      () => adminCreateUser(user, newUser),
      Error,
      'Duplicate user'
    )
  })

  it('Verify that the request is being made from an administrator user', () => {
    const user = leaderSchema
    assert.throws(
      () => adminCreateUser(user, newUser),
      Error,
      "You don't have permission"
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
      () => adminCreateUser(user, emptyUser),
      Error,
      'Username or password is empty'
    )
  })
})
