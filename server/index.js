const express = require('express');
const app = express();

const mongoose = require('mongoose');

const db = mongoose
  .connect('mongodb://localhost:27017/db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log('Connected to the database...');
    return response;
  })
  .catch((err) => console.log(err));

const userRoutes = require('./routes/user.routes');

app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from my-express-app' });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
