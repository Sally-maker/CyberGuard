import jwt from 'jsonwebtoken';



function verifyToken(token: string): UserPayload {
    const secretKey = process.env.JWT_SECRET_KEY
   try {
    const decoded = jwt.verify(token, secretKey) as UserPayload;

    return decoded;

   } catch (error) {
     throw new Error("Token inválido")
   }
}