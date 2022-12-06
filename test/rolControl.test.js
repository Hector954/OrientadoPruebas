// TDD para gestion de roles de usuario

import { describe, it } from 'mocha'
import { expect } from 'chai'
import { adminSchema } from '../Schemas/admin_system.js'
import { leaderSchema } from '../Schemas/leader.js'
import { employeeSchema } from '../Schemas/employee.js'
import rolControl from '../functions/rolControl.js'

describe('As a system, I need to define the roles of the users that log in ', () => {
  it('should return 0 if the user is an admin', () => {
    const user = adminSchema
    const result = rolControl(user.role)
    expect(result).to.equal(0)
  })

  it('should return 1 if the user is a leader', () => {
    const user = leaderSchema
    const result = rolControl(user.role)
    expect(result).to.equal(1)
  })

  it('should return 2 if the user is an employee', () => {
    const user = employeeSchema
    const result = rolControl(user.role)
    expect(result).to.equal(2)
  })

  it('should return null if the user is not defined', () => {
    const user = undefined
    const result = rolControl(user?.role)
    expect(result).to.equal(null)
  })
})
