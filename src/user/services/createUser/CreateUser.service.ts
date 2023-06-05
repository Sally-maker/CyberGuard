import { prismaClient } from "../../../database/prisma";


class CreateUser {
    async execute(name:string, email: string,id: number, password:string ){
         const user = await prismaClient.user.create({
           data: {
            id,
            email,
            password,
            name,
           }
         })
         return user;
    }
 }

 export { CreateUser }