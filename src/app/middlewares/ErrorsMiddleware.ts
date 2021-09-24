import { NextFunction, Request, Response } from 'express';
import UnauthenticatedError from '../errors/UnauthenticatedError';
import UserAlreadyExistsError from '../errors/UserAlreadyExistsError';

function errorsMiddleware(error: Error, request: Request, response: Response, next: NextFunction) {
  if (error instanceof UserAlreadyExistsError) {
    return response.status(409).send({ status: 409, message: error.message });
  }

  if (error instanceof UnauthenticatedError) {
    return response.status(401).send({ status: 401, message: error.message });
  }

  if (error instanceof Error) {
    return response.status(500).send({ status: 500, message: 'Unknown error!' });
  }

  return next();
}

export default errorsMiddleware;
