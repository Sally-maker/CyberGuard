import { Router } from "express";
import { CreateUserController } from "../../user/controllers/createUserController/CreateUser.controller";
import { DeleteUserController } from "../../user/controllers/deleteUserController/DeleteUser.controller";
import { GetAllUserController } from "../../user/controllers/getAllUserController/GetAllUser.controller";
import { UpdateUserController } from "../../user/controllers/updateUserController/UpdateUser.controller";

const routes = Router();

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();

routes.post('/login', createUserController.createUser)
routes.delete('/delete', deleteUserController.deleteUser )
routes.get('/', getAllUserController.getAllUser)
routes.put('/update', updateUserController.updateUser)