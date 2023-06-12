import { prismaClient } from "../../../database/prisma";
import { UpdateUser } from "./UpdateUser.service";

describe("UpdateUser", () => {
    it("should create a new user", async () => {
        const updateUser = new UpdateUser();

        const name = "John D";
        const email = "john.doe@example.co5";
        const id = 5;
        const password = "mysecretpassword5";

        const user = await updateUser.execute(id, email, password, name);

        expect(user).toBeDefined();
        expect(user.id).toEqual(id);
        expect(user.email).toEqual(email);
        expect(user.name).toEqual(name);
        expect(user.password).toEqual(password);

        const savedUser = await prismaClient.user.findUnique({
            where: { id },
          });
          
        expect(savedUser).toBeDefined();
        expect(savedUser?.name).toBe(name);
        expect(savedUser?.email).toBe(email);
        expect(savedUser?.password).toBe(password);

    })
})