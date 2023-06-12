import { prismaClient } from "../../../database/prisma";


class GetAllUser {
    async execute(){
         const user = await prismaClient.user.findMany()
         return user;
    }
 }

 export { GetAllUser }