import express from 'express'
import bodyParser from 'body-parser'
import appRouter from './routes'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1', appRouter)

export default app
