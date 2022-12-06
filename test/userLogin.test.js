// TDD pruebas de Login de usuario
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'
import userLogin from '../functions/userLogin.js'

describe('As a User, I need to log into the system using a username and password.', () => {
  it('Should return true when the user is registered, and you access the system correctly.', () => {
    const user = {
      username: 'test',
      password: 'test'
    }
    const result = userLogin(user)
    return expect(result).to.be.true
  })

  it('Should return an error when the username or password is empty', () => {
    const user = {
      username: 'test',
      password: ''
    }
    assert.throws(
      () => userLogin(user),
      Error,
      'Username or password is empty'
    )
  })

  it('Should return false when the username(test) is incorrect', () => {
    const user = {
      username: 'test1',
      password: 'test'
    }
    const result = userLogin(user)
    return expect(result).to.be.false
  })

  it('Should return false when the password(test) is incorrect', () => {
    const user = {
      username: 'test',
      password: 'test1'
    }
    const result = userLogin(user)
    return expect(result).to.be.false
  })
})
