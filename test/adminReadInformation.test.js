// TDD get information from admin
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'

import { adminReadInformation } from '../functions/adminCrud.js'

import { adminSchema } from '../Schemas/admin_system.js'
import { employeeSchema } from '../Schemas/employee.js'

describe('As an Administrator, I need to obtain information about different branches and their sales.', () => {
  it('should return an array if the information is obtained', () => {
    const user = adminSchema
    const result = adminReadInformation(user, 'Branch2')
    expect(result).to.be.an('array')
  })

  it('Verify that the request is being made from an administrator user', () => {
    const user = employeeSchema
    assert.throws(
      () => adminReadInformation(user, 'Branch1'),
      Error,
      "You don't have permission"
    )
  })

  it('Verify that the branch name is not empty', () => {
    const user = adminSchema
    assert.throws(
      () => adminReadInformation(user, ''),
      Error,
      'Branch is empty'
    )
  })

  it('Verify that the branch name exists', () => {
    const user = adminSchema
    assert.throws(
      () => adminReadInformation(user, 'Branch5'),
      Error,
      'Branch does not exist'
    )
  })
})
