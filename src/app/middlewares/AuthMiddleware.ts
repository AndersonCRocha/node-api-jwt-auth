import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload, TokenExpiredError } from 'jsonwebtoken';

async function AuthMiddleware(request: Request, response: Response, next: NextFunction) {
  const { authorization: token } = request.headers;

  if (!token) {
    response.status(401).send({
      status: 401,
      message: 'Token must be provided!',
    });
    return;
  }

  if (!token?.startsWith('Bearer')) {
    response.status(401).send({
      status: 401,
      message: 'The token provided is invalid!',
    });
    return;
  }

  try {
    const { sub } = jwt.verify(token.replace('Bearer', '').trim(), String(process.env.JWT_SECRET)) as JwtPayload;
    request.authenticatedUserId = sub;
  } catch (err) {
    const body = {
      status: 401,
      message: 'The token provided is invalid!',
    };

    if (err instanceof TokenExpiredError) {
      body.message = 'Token expired!';
    }

    response.status(401).send(body);
    return;
  }

  next();
}

export default AuthMiddleware;
