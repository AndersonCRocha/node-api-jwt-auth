class UnauthenticatedError extends Error {
  constructor() {
    super('User unauthenticated!');
  }
}

export default UnauthenticatedError;
