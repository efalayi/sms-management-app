import { Router } from 'express'
import contactsRouter from './contacts'
import smsRouter from './sms'

const appRouter = new Router()

appRouter.get('/', (req, res) => {
  res.json({
    message: 'Welcome to SMS management API'
  })
})

appRouter.use('/contacts', contactsRouter)
appRouter.use('/sms', smsRouter)

export default appRouter
