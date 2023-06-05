import { prismaClient } from "../../../database/prisma";
import { CreateUser } from "./CreateUser.service";

describe("CreateUser", () => {
    it("should create a new user", async () => {
        const createUser = new CreateUser();

        const name = "John Doe";
        const email = "john.doe@example.com";
        const id = 1;
        const password = "mysecretpassword";

        const user = await createUser.execute(name, email, id, password);

        expect(user).toBeDefined();
        expect(user.id).toBe(id);
        expect(user.email).toBe(email);
        expect(user.name).toBe(name);
        expect(user.password).toBe(password);

        const savedUser = await prismaClient.user.findUnique({
            where: { id },
          });
          
        expect(savedUser).toBeDefined();
        expect(savedUser?.name).toBe(name);
        expect(savedUser?.email).toBe(email);
        expect(savedUser?.password).toBe(password);

    })
})