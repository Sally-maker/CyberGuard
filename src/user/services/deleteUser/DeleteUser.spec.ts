import { DeleteUser } from "./DeleteUser.service"


describe("DeleteUser", () => {
    it("should be able delete a user to id", async () => {
        const deleteUser = new DeleteUser();

        const id = 5;

        const user = await deleteUser.execute(id)

        expect(user).not.toBe(id)
    })
})