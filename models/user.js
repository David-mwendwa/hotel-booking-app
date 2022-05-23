import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please provide your name'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide your email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    min: 6,
  },
  stripe_account_id: '',
  stripe_seller: {},
  stripeSession: {},
});

export default mongoose.model('User', userSchema);
