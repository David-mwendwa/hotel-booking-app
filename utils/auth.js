import jwt from 'jsonwebtoken';

// check if a token is valid
export const isTokenValid = ({ token }) =>
  jwt.verify(token, process.env.JWT_SECRET);

// create, send token & save in the cookie.
// sendToken receives authenticated user, statusCode & response - called on login
export const sendToken = ({ user, statusCode, res }) => {
  // create token
  const token = user.createJWT();

  // options for cookie
  const oneDay = 24 * 60 * 60 * 1000;
  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_LIFETIME * oneDay),
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
    // signed: true,
  };

  res
    .status(statusCode || 200)
    .cookie('token', token, options)
    .json({ token, user, ok: true });
};
