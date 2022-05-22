import express from 'express';
const app = express();

app.get('/api/:message', (req, res) => {
  res.status(200).json({msg: req.params.message});
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}...`));
