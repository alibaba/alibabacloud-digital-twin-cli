import { execSync } from 'child_process';
import Init from './init';
import Logger from './logger';
import build from './package';
const logger = Logger('main');

const initHelper = new Init();

const exec = (cmd, options) => {
  execSync(cmd, {
    stdio: ['inherit', 'inherit', 'inherit', 'inherit'],
    ...options
  });
};

export async function addon(action) {
  if (action === 'init') {
    await initHelper.initAddon();
    logger.info('config file generate');
    return;
  } else if (action === 'update') {
  }
}

// 打包
export async function zip() {
  let path = process.cwd();
  const pkg = require(`${path}/package.json`);
  if (!pkg.name.startsWith('@') || !pkg.name.includes('/') || pkg.name.endsWith('/')) {
    console.log('代码包名需使用@xxx/xxx格式,如:@dtf/transport，打包失败');
    return;
  }
  await build(path, pkg.version, pkg.name);
}
