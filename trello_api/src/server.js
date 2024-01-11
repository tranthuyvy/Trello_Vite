/* eslint-disable no-console */
import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from './config/mongodb'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'

const START_SERVER = () => {
  const app = express()

  //Enable req.body json data
  app.use(express.json())

  app.use('/v1', APIs_V1)

  app.get('/', async (req, res) => {

    res.end(`<h1>Hello ${env.AUTHOR}</h1><hr>`)
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server is running at http://${env.APP_HOST}:${env.APP_PORT}/`)
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