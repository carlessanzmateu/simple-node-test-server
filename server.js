'use strict';
module.exports = function (app, logger) {
  app.listen(3000, function () {
    logger.info('Listening on port 3000!');
  });
};
