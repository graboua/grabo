const Winston = require('winston');

let level = 'debug';

if (process.env.NODE_ENV !== 'development') {
  level = 'error';
}

let log = function(module) {
  let transports = [
    new Winston.transports.Console({
      timestamp: false, // function() { return new Date().toString() }
      colorize: true,
      level: level,
      label: module.filename,
      prettyPrint: true,
    }),
  ];
  return new Winston.Logger({transports});
};

module.exports = log;
