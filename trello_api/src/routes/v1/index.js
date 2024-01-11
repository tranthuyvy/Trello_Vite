import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRouter } from './boardRoute'

const Router = express.Router()

//Check status APIs V1
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'APIs V1' })
})

// Board APIs
Router.use('/boards', boardRouter)

export const APIs_V1 = Router