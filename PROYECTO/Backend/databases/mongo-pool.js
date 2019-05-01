'use strict';

const mongoose = require('mongoose');

mongoose.Promise = Promise;

const mongoUri = process.env.MONGO_URI;

async function openConnection() {
  const conn = await mongoose.connect(mongoUri, { useNewUrlParser: true });

  return conn;
}

async function disconnect() {
  mongoose.connection.close();
}

module.exports = {
  connect: openConnection,
  disconnect,
};


mongodb + srv://goodjob:N8Vzr2qayX.3GYW@goodjob-mumtk.mongodb.net/test?retryWrites=true