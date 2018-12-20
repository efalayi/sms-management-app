import { Router } from 'express'
import ContactController from '../controllers/contactController'
import isValidContactId from '../middlewares/validations/isValidContactId'
import isValidContactDetails from '../middlewares/validations/isValidContactDetails'
import isValidContactUpdate from '../middlewares/validations/isValidContactUpdate'

const contactRouter = new Router()

contactRouter.get('/', ContactController.listContacts)

contactRouter.get(
  '/:contactId', isValidContactId, ContactController.getContactDetails
)

contactRouter.post(
  '/', isValidContactDetails, ContactController.createContact
)

contactRouter.put(
  '/:contactId', isValidContactId, isValidContactUpdate, ContactController.updateContact
)

contactRouter.delete(
  '/:contactId', isValidContactId, ContactController.deleteContact
)

export default contactRouter
