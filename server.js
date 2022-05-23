import 'express-async-errors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './db/connect.js';
const app = express();
dotenv.config();

// import routers
import authRouter from './routes/auth.js';

// import custom middlewares
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

// middlewares
app.use(cors()); // NOT REALLY USABLE
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/auth', authRouter);

// use error middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// start server
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
