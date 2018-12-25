import { Router } from 'express'
import contactsRouter from './contacts'

const appRouter = new Router()

appRouter.get('/', (req, res) => {
  res.json({
    message: 'Welcome to SMS management API'
  })
})

appRouter.use('/contacts', contactsRouter)

export default appRouter
