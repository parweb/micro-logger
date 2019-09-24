const winston = require('winston');
const MongoDB = require('winston-mongodb').MongoDB;

const options = {
  db: 'mongodb://host:port/dbname',
  username: 'user',
  password: 'password',
  collection: 'logs',
  level: 'info',
  storeHost: true
};

winston.loggers.add('mongoLog', {
  transports: [new winston.transports.MongoDB(options)]
});

var logger = winston.loggers.get('mongoLog');

module.exports = async (req, res) => {
  logger.info({ 'test message': 'plop' }, { plop: 'yolo' });

  return 'Ready!';
};
