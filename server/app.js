import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthRoutes from './routes/AuthRoutes.js';
import ApiRoutes from './routes/ApiRoutes.js';

// Server Initialization
const app = express();
const PORT = process.env.PORT || 8000;

// MiddleWares
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});
// Routes will be written here
app.use('/auth', AuthRoutes);
app.use('/api', ApiRoutes);
// Server Listen Along with Database
// connection(in case of data persistence)
app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running,and App is listening on port ' + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
