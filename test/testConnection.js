// testear conexion a la base de datos
import { describe, it } from 'mocha'
import { expect } from 'chai'

import { dbConnection } from '../connnections/connectionbd.js'

describe('As a system, I need to connect to the database', () => {
  it('should return error if the connection is not successful', async () => {
    const stringDBPasswordIncorrect =
    'mongodb+srv://hpave:incorrectPassword@cluster0.lckydjq.mongodb.net/test'
    const result = await dbConnection(stringDBPasswordIncorrect)
    expect(result).to.equal('error connecting to database')
  })

  it('should return message if the connection is successful', async () => {
    const stringDB =
      'mongodb+srv://hpave:Heidi01221708..@cluster0.lckydjq.mongodb.net/test'
    const result = await dbConnection(stringDB)
    expect(result).to.equal('Database connected')
  })
})
