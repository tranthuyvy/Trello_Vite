const MONGODB_URI='mongodb+srv://ttvthuyvy1544:9xRcbF5KLbjxRxv6@cluster-tranthuyvy.e7wwmxh.mongodb.net/?retryWrites=true&w=majority'
const DATABASE_NAME='trello'

import { MongoClient, ServerApiVersion } from 'mongodb'

let trelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()

  trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect Database')
  return trelloDatabaseInstance
}