import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors';
import feedbackRouter from './feedbackRouter.js'


const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT

app.use('/api/feedback', feedbackRouter)

app.listen(port, () => {
    console.log(`server is listening on ${port}`)
  })