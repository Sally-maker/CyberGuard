import { prismaClient } from "../../../database/prisma";


class UpdateUser {
  async execute(id: number, email: string, password: string, name: string){
    const updateUser = await prismaClient.user.update({
        where: {
          id
        },
        data: {
          name,
          email,
          password
        },
      })
      return updateUser
  }
}

export { UpdateUser }