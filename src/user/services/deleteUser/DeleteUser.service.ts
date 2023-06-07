import { prismaClient } from "../../../database/prisma";


class DeleteUser {
    async execute(id: number){
         const user = await prismaClient.user.delete({
           where: {
            id
           }
         })
         return user;
    }
 }

 export { DeleteUser }