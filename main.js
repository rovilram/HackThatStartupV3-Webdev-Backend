'use Strict';

const express = require('express');
require('dotenv').config();

const userRouter = require('./routes/userRouter');
const repoRouter = require('./routes/repoRouter');

const errorMiddleware = require('./middlewares/errorMiddleware')

const server = express();

const HTTP = {
  port: process.env.HTTP_API_PORT || 3000,
  host: process.env.HTTP_API_HOST || 'localhost',
};

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// test endpoint
server.get('/', (req, res) => {
  res.send("Hello World! I'm a API server");
});

server.use('/user', userRouter, errorMiddleware);

server.use('/repo', repoRouter, errorMiddleware);


server.listen(HTTP.port, HTTP.host, () => {
  console.log(`API server running at http://${HTTP.host}:${HTTP.port}`);
});
