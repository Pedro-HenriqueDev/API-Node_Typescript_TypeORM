import {Router} from 'express'
import { RoomController } from './controllers/RoomController'
import { SubjectController } from './controllers/SubjectsController'

const routes = Router()

routes.post('/subjects', new SubjectController().create)
routes.post("/room", new RoomController().create)
routes.post("/room/:idRoom/create", new RoomController().createVideo)
routes.post("/room/:idRoom/Subject", new RoomController().roomSubject)
routes.get("/rooms", new RoomController().list)

export default routes