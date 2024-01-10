/* eslint-disable no-console */
import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, GET_DB, CLOSE_DB } from './config/mongodb'

const START_SERVER = () => {
  const app = express()

  const hostname = 'localhost'
  const port = 8081

  app.get('/', async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())

    res.end('<h1>Hello ttv</h1><hr>')
  })

  app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`)
  })

  //Thực hiện cleanup trước khi dừng server
  //https://stackoverflow.com/questions/14031763/doing-a-cleanup-action-just-before-node-js-exits
  exitHook(() => {
    console.log('Close Connect')
    CLOSE_DB()
  })
}

CONNECT_DB()
  .then(() => console.log('Connect MongoDB Atlast'))
  .then(() => START_SERVER())
  .catch(error => {
    console.log(error)
    process.exit(0)
  })