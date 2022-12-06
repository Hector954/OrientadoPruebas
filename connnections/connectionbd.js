// conectar con mongo db
import mongoose from 'mongoose'
mongoose.set('strictQuery', true)

export const dbConnection = async (stringDB) => {
  try {
    await mongoose.connect(stringDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Database connected')
    return 'Database connected'
  } catch (error) {
    console.log('error connecting to database')
    return 'error connecting to database'
  }
}
