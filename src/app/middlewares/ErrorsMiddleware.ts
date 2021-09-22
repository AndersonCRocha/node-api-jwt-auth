import { NextFunction, Request, Response } from 'express';
import UnauthenticatedError from '../errors/UnauthenticatedError';
import UserAlreadyExistsError from '../errors/UserAlreadyExistsError';

function ErrorsMiddleware(
  error: Error, request: Request, response: Response, next: NextFunction,
) {
  if (error instanceof UserAlreadyExistsError) {
    response.status(409).send({ status: 409, message: error.message });
    return;
  }

  if (error instanceof UnauthenticatedError) {
    response.status(401).send({ status: 401, message: error.message });
    return;
  }

  next();
}

export default ErrorsMiddleware;
