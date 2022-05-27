import jwt from 'jsonwebtoken';
import { UnauthenticatedError, ForbiddenError } from '../errors/index.js';
import { isTokenValid } from '../utils/auth.js';

// checks user authentication through bearer token or through cookies combo
export const authenticateUser = async (req, res, next) => {
  let token;
  // check header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];
  }
  // check cookies
  else if (req.signedCookies && req.signedCookies.token) {
    token = req.signedCookies.token;
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }
  if (!token) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
  try {
    const { userId, role } = isTokenValid({ token });
    // attach the user and its permissions to the request object
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
};

// give permission to users to access certain resources based on ther roles
// call authorizePermissions with 'role' param => authorizePermissions('admin')
export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new ForbiddenError(
        `${req.user.role} is not allowed to access this resource`
      );
    }
    next();
  };
};
