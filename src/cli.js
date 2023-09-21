import program from 'commander';
import pkg from '../package.json';
import Logger from './logger';
import { addon, zip } from './index';
const logger = Logger('cli');
export function exec() {
  program.version(pkg.version);
  program
    .command('package')
    .description('dtf package')
    .action(async () => {
      await zip();
    });

  program
    .command('addon <action>')
    .description('dtf addon toolkit')
    .action(async (action) => {
      logger.info('addon====:action', action);
      await addon(action);
      logger.info('finished!');
    });

  program.parse(process.argv);
}
