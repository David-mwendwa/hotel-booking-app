import express from 'express';
const router = express.Router();
import { createConnectAccount } from '../controllers/stripe.js';
import { authenticateUser } from '../middleware/auth.js';

router
  .route('/create-connect-account')
  .post(authenticateUser, createConnectAccount);

export default router;
