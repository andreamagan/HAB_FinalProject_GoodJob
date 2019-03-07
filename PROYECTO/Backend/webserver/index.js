'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
let server = null;
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Methods',
    'PUT, POST, PATCH, GET, DELETE,OPTIONS'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

app.use('/api', routes.accountRouter);
app.use('/api', routes.playerRouter);
app.use('/api', routes.teamRouter);
app.use('/api', routes.jobRouter);

app.use((err, req, res, next) => {
  if (err.name === 'eSportsNetworkError') {
    const { status, errors } = err;

    return res.status(status).json(errors);
  }

  console.error('Error 500', err);
  return res.status(500).json({
    message: err.message,
  });
});

async function listen(port) {
  if (server == null) {
    server = await app.listen(port);
  } else {
    console.error("Can't listen, server already initialized");
  }
}

async function close() {
  if (server) {
    await server.close();
    server = null;
  } else {
    console.error("Can't close a non started server");
  }
}

module.exports = {
  listen,
  close,
};
