import { Router } from 'express'
import UserController from './app/controllers/UserController'
import passwordMiddleware from './app/middlewares/validators/PasswordValidator'

const routes = Router()

routes.get('/users', passwordMiddleware, UserController.index)

routes.post('/users', passwordMiddleware, UserController.create)

export default routes
