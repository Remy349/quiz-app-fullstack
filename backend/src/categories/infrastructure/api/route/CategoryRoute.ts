import { Router } from 'express'
import { CategoryController } from '../controller/CategoryController'

const categoryRouter = Router()

const categoryController = new CategoryController()

categoryRouter.get('/', categoryController.getAll.bind(categoryController))

categoryRouter.post('/', categoryController.create.bind(categoryController))

categoryRouter.delete(
  '/:categoryId',
  categoryController.delete.bind(categoryController)
)

export default categoryRouter
