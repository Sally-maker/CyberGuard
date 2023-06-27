import { Request, Response } from "express";
import { GetAllUser } from "../../services/getAllUser/GetAllUser.service";

class GetAllUserController {
  async getAllUser(request: Request, response: Response) {

    const getAllUser = new GetAllUser();

    const user = await getAllUser.execute();

    return response.json(user);
  }
}

export { GetAllUserController };
