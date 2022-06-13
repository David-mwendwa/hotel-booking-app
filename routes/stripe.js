import express from 'express';
const router = express.Router();
import {
  createConnectAccount,
  getAccountStatus,
} from '../controllers/stripe.js';
import { authenticateUser } from '../middleware/auth.js';

router
  .route('/create-connect-account')
  .post(authenticateUser, createConnectAccount);
router.post('/get-account-status', authenticateUser, getAccountStatus);

export default router;
