import { GetAllUser } from "../../services/getAllUser/GetAllUser.service";
import { prismaClient } from "../../../database/prisma";

describe("GetAllUsers", () => {
  it("should return all users", async () => {
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", password: "password123", createdAt: new Date },
        { id: 2, name: "Jane Smith", email: "jane@example.com", password: "password456", createdAt: new Date },
      ];

    const findManySpy = jest
      .spyOn(prismaClient.user, "findMany")
      .mockResolvedValueOnce(users);

    const getAllUsers = new GetAllUser();

    const result = await getAllUsers.execute();

    expect(findManySpy).toHaveBeenCalled();

    expect(result).toEqual(users);
  });
});
