import { Request, Response } from "express";
import { DeleteUser } from "../../services/deleteUser/DeleteUser.service";

class DeleteUserController {
  async createUser(request: Request, response: Response) {
    const { id } = request.params;

    const userId = parseInt(id);
    const createUser = new DeleteUser;

    const user = await createUser.execute(userId);

    return response.json(user);
  }
}

export { DeleteUserController };
