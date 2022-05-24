import User from '../models/user.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const userAExists = await User.findOne({ email });
  if (userAExists) {
    throw new BadRequestError('Email is already in use');
  }
  const user = new User({ name, email, password });
  await user.save();
  res.status(StatusCodes.CREATED).json({ user, ok: true });
};

export const login = (req, res) => {
  res.status(200).send('logged in');
};

export const logout = (req, res) => {
  res.status(200).send('logged out');
};
