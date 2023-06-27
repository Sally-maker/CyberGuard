import { Request, Response } from "express";
import { UpdateUser } from "../../services/updateUser/UpdateUser.service";

class UpdateUserController {
  async updateUser(request: Request, response: Response) {
    const { email, name, password } = request.body;
    const { id } = request.params;
    const Id = parseInt(id)

    const getAllUser = new UpdateUser();

    const user = await getAllUser.execute(Id, email, password, name);

    return response.json(user);
  }
}

export { UpdateUserController };
