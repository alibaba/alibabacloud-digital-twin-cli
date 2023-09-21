import Generator from 'yeoman-generator';
import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import walker from 'walker';
import { getGitRepository, littleCamel, bigCamel, pascal } from '../../utils';
import Logger from '../../logger';
const logger = Logger('addon-generator');
module.exports = class extends Generator {
  constructor(args, opts) {
    console.log(args, opts);
    super(args, opts);
  }

  prompting() {
    const curPath = process.cwd();
    const defaultName = curPath.substr(curPath.lastIndexOf('/') + 1);
    return getGitRepository().then((gitRepository) => {
      return this.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'enter name',
          default: '@company/' + defaultName
        },
        {
          type: 'input',
          name: 'version',
          message: 'enter version',
          default: '1.0.0'
        },
        {
          type: 'input',
          name: 'description',
          message: 'enter description',
          default: ''
        },
        {
          type: 'input',
          name: 'git',
          message: 'enter git repository',
          default: gitRepository
        },
        {
          type: 'input',
          name: 'author',
          message: 'enter author'
        },
        {
          type: 'input',
          name: 'keyWords',
          message: 'enter key words'
        }
      ]).then((answers) => {
        this.answers = answers;
      });
    });
  }

  writing() {
    const sourceRoot = this.sourceRoot();
    const littleCamelName = littleCamel(this.answers.name);
    const bigCamelName = bigCamel(this.answers.name);
    const pascalName = pascal(this.answers.name);
    return new Promise((resolve, reject) => {
      walker(sourceRoot)
        .filterDir((dir, stat) => {
          return true;
        })
        .on('dir', (dir, stat) => {
          const relativePath = path.relative(sourceRoot, dir);
          if (relativePath && !this._isPrimaryPath(relativePath)) {
            fs.ensureDirSync(this.destinationPath(relativePath));
            this.log(`${chalk.green('create')} dir ${relativePath}`);
          }
        })
        .on('file', (file, stat) => {
          const relativePath = path.relative(sourceRoot, file);
          if (relativePath && !this._isPrimaryPath(relativePath)) {
            this.fs.copyTpl(file, this.destinationPath(relativePath), {
              ...this.answers,
              littleCamelName,
              bigCamelName,
              pascalName
            });
          }
        })
        .on('end', () => {
          resolve();
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  install() {
    this.spawnCommandSync('npm', ['install']);
  }

  end() {
    logger.info('初始化扩展开发完成!');
  }

  _isPrimaryPath(path) {
    return path.split('/').some((item) => item.startsWith('_'));
  }
};
