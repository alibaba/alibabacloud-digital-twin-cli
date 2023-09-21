import yeoman from 'yeoman-environment';
import Logger from './logger';
import path from 'path';

const logger = Logger('init');

export default class Env {
  constructor() {
    this.env = yeoman.createEnv();
    const generatorsPath = path.join(__dirname, 'generators');
    this.env.register(`${generatorsPath}/addon`, 'init:addon');
  }

  initAddon = async () => {
    return new Promise((resolve, reject) => {
      try {
        this.env.run('init:addon', (err) => {
          if (err) {
            logger.error(err.message || 'got some error!');
            reject();
          }
          resolve();
        });
      } catch (err) {
        logger.error(err.message || 'got some error!');
        reject();
      }
    });
  };
}
