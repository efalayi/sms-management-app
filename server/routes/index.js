import { Router } from 'express'
import usersRouter from './users'

const appRouter = new Router()

appRouter.get('/', (req, res) => {
  res.json({
    message: 'Welcome to SMS management API'
  })
})

appRouter.use('/users', usersRouter)

export default appRouter
