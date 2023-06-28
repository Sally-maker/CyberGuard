import jwt from 'jsonwebtoken';


interface UserPayload {
    id: number;
    name: string;
    email: string;
}

function AuthUser(payload: UserPayload): string {

   const secretKey = process.env.JWT_SECRET_KEY
   const expirationTime = process.env.EXPIRATION_TIME

   const options: jwt.SignOptions = {
    expiresIn: expirationTime,
  };

  const token = jwt.sign(payload, secretKey, options)

  return token
}