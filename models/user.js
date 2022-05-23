import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

userSchema.pre('save', function (next) {
  let user = this;
  if (user.isModified('password')) {
    return bcrypt.hash(user.password, 12, function (err, hash) {
      if (err) {
        console.log('BCRYPT HASH ERR ', err);
        return next(err);
      }
      user.password = hash;
      return next();
    });
  } else return next();
});

export default mongoose.model('User', userSchema);
