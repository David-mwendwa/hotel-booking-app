import User from '../models/user.js';

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

export const login = (req, res) => {
  res.status(200).send('logged in');
};

export const logout = (req, res) => {
  res.status(200).send('logged out');
};
