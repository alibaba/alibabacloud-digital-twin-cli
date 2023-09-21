import log4js from 'log4js';

export default (category) => {
  const logger = log4js.getLogger(category);
  logger.level = 'info';
  return logger;
};
