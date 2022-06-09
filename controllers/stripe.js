import dotenv from 'dotenv';
dotenv.config()
import Stripe from 'stripe';
import queryString from 'query-string';
import User from '../models/user.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';

const stripe = Stripe(process.env.STRIPE_SECRET);

export const createConnectAccount = async (req, res) => {
  const user = await User.findById(req.user.userId).exec();
  // if the user doesn't have stripe_account_id, create new
  if (!user.stripe_account_id) {
    const account = await stripe.accounts.create({
      type: 'express',
    });
    console.log({ account });
    user.stripe_account_id = account.id;
    user.save();
  }

  // create login link based on account id for frontend to complete onboarding
  let accountLink = await stripe.accountLinks.create({
    account: user.stripe_account_id,
    refresh_url: process.env.STRIPE_REDIRECT_URL,
    return_url: process.env.STRIPE_REDIRECT_URL,
    type: 'account_onboarding',
  });

  // prefil any info such as email
  accountLink = Object.assign(accountLink, {
    'stripe_user[email]': user.email || undefined,
  });

  let link = `${accountLink.url}?${queryString.stringify(accountLink)}`;

  res.status(StatusCodes.CREATED).json({ ok: true, link });
};
