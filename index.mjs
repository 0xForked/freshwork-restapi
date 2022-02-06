import express from 'express'
import cors from 'cors'
import http from 'http'

const port = 3000

// ========================================================
const app = express()

app.use(express.json())

app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Credentials']
}))

// features routes

// home and not found handler
app.get('/', (req, res) => {
  res.send({
      code: 200,
      message: "welcome to freshchat rest api"
  })
})

app.get('*', (req, res) => {
  res.status(404).send({
      code: 404,
      message: "path that you're looking for not found"
  })
})
// ========================================================


const server = http.createServer(app)

console.log("============================")
console.log("trying to running server ...")
server.listen(port)
console.log(`server running on port: ${port}`)
console.log("============================")