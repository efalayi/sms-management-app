import { Router } from 'express'
import SMSController from '../controllers/smsController'
import isValidSmsDetails from '../middlewares/validations/isValidSmsDetails'

const smsRouter = new Router()

smsRouter.get('/all', SMSController.listAllMessages)
smsRouter.post('/send', isValidSmsDetails, SMSController.sendSMS)

export default smsRouter
