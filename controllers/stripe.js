import Stripe from 'stripe';
import User from '../models/user.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';

const stripe = Stripe(process.env.STRIPE_SECRET);

export const createConnectAccount = async (req, res) => {
  const user = await User.findById(req.user.userId);
  if (!user.stripe_account_id) {
    const account = await stripe.accounts.create({
      type: 'express',
    });
    console.log({ account });
    user.stripe_account_id = account.id;
    user.save();
  }

  res.status(StatusCodes.CREATED).json({ ok: true });
};
