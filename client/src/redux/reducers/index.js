import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { stripeReducer } from './stripe';

const rootReducer = combineReducers({
  auth: authReducer,
  stripe: stripeReducer,
});

export default rootReducer;
