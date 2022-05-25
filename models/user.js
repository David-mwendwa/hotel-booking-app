import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    role: {
      type: String,
      enum: ['admin', 'seller', 'user'],
      default: 'user',
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

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// return JWT token => invoked as user.createJWT()
userSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, role: this.role },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

export default mongoose.model('User', userSchema);
