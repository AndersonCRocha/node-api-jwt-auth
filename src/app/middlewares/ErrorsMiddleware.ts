import { Request, Response } from 'express';
import UnauthenticatedError from '../errors/UnauthenticatedError';
import UserAlreadyExistsError from '../errors/UserAlreadyExistsError';

function ErrorsMiddleware(error: Error, request: Request, response: Response) {
  if (error instanceof UserAlreadyExistsError) {
    return response.status(409).send({ status: 409, message: error.message });
  }

  if (error instanceof UnauthenticatedError) {
    return response.status(401).send({ status: 401, message: error.message });
  }

  return response.status(500).send({ status: 500, message: 'Unknown error!' });
}

export default ErrorsMiddleware;
