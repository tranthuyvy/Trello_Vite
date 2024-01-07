// const express = require('express')
import express from 'express'

const app = express()

const hostname = 'localhost'
const port = '8081'

app.get('/', function (req, res) {
  res.send('<h1>Hello, tranthuyvy</h1>')
})

app.listen(port, hostname, () => {
  console.log(`Hello tranthuyvy, I'm running server at http://${hostname}:${port}/`)
})