import { Router } from 'express'

const usersRouter = new Router()

usersRouter.get('/', (req, res) => {
  res.json({
    message: 'No users at the moment. Please try again in the next 24 hours'
  })
})

export default usersRouter
