import * as winston from 'winston';

const tsFormat = () => (new Date()).toLocaleTimeString();

export const Logger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: 'debug'
    })
  ]
});
