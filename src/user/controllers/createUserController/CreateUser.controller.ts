import { Request, Response } from "express";
import { CreateUser } from "../../services/createUser/CreateUser.service";

class CreateUserController {
  async createUser(request: Request, response: Response) {
    const { email, name, password } = request.body;
    const { id } = request.params;

    const createUser = new CreateUser();

    const user = await createUser.execute(id, email, password, name);

    return response.json(user);
  }
}

export { CreateUserController };
