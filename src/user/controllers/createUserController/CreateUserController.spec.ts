import { Request, Response } from "express";
import { CreateUserController } from "./CreateUser.controller";
import { CreateUser } from "../../services/createUser/CreateUser.service";

describe("CreateUserController", () => {
  it("should create a new user", async () => {
    // Simulando a requisição
    const request = {
      body: {
        email: "john.doe@example.com4",
        name: "John Doe4",
        password: "mysecretpassword4",
        createAt: new Date()
      },
      params: {
        id: 4,
      },
    } as unknown as Request;

    // Simulando a resposta
    const response = {
      json: jest.fn(),
    } as unknown as jest.Mocked<Response>;

    // Espionando o método execute do serviço CreateUser
    const createUserSpy = jest
      .spyOn(CreateUser.prototype, "execute")
      .mockResolvedValueOnce({
        id: 4,
        email: "john.doe@example.com4",
        name: "John Doe4",
        createdAt: expect.any(Date),
        password:  "mysecretpassword4",
      });

    // Instanciando o CreateUserController
    const createUserController = new CreateUserController();

    // Chamando o método createUser do CreateUserController
    await createUserController.createUser(request, response);

    // Verificando se o método execute do serviço CreateUser foi chamado corretamente
    expect(createUserSpy).toHaveBeenCalledWith(
      4,
      "john.doe@example.com4",
      "mysecretpassword4",
      "John Doe4"
    );

    // Verificando se a resposta está correta
    expect(response.json).toHaveBeenCalledWith({
        id: 4,
        email: "john.doe@example.com4",
        name: "John Doe4",
        createdAt: expect.any(Date),
        password:  "mysecretpassword4",
    });
  });
});
