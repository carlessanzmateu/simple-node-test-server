'use strict';
module.exports = function (app, logger) {
  app.get('/', function (req, res) {
    res.send('Hello World!');
    logger.info('getting / from controller');
  });
};
