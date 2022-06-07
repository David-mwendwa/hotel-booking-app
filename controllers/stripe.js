import User from '../models/user.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';

export const createConnectAccount = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ ok: true });
};
