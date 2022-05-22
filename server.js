import express from 'express';
const app = express();

// import routers
import authRouter from './routes/auth.js';

app.use('/api/v1/auth', authRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}...`));
