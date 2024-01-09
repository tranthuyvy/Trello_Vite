import express from 'express'
// import { mapOrder } from '~/utils/sorts.js'

const app = express()

const hostname = 'localhost'
const port = 8081

app.get('/', (req, res) => {
  res.end('<h1>Hello ttv</h1><hr>')
})

app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://${ hostname }:${ port }/`)
})
