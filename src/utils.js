const exec = require('child-process-promise').exec;

export function littleCamel(name) {
  return name
    .replace(/^[\d|\W]*|\W*$/g, '')
    .replace(/^([A-Z])/, (a) => a.toLowerCase())
    .replace(/\W+([a-zA-Z1-9])/g, (res, a) => a.toUpperCase());
}

export function bigCamel(name) {
  return name
    .replace(/^[\d|\W]*|\W*$/g, '')
    .replace(/^([a-z])/, (a) => a.toUpperCase())
    .replace(/\W+([a-zA-Z1-9])/g, (res, a) => a.toUpperCase());
}

export function pascal(name) {
  return name
    .replace(/^[\d|\W]*|\W*$/g, '')
    .replace(/^([A-Z])/, (a) => a.toLowerCase())
    .replace(/\W*([0-9A-Z])/g, (res, a) => `-${a.toLowerCase()}`)
    .replace(/\W+([a-z])/g, (res, a) => `-${a.toLowerCase()}`);
}

export function getGitRepository() {
  return new Promise((resolve) => {
    exec('git remote show origin| grep Fetch', {
      stdio: 'inherit'
    }).then(
      ({ stdout }) => {
        const regEx = /(git@|https?:\/\/)gitlab\.alibaba-inc\.com.*\.git/;
        const res = regEx.exec(stdout);
        resolve((res && res[0]) || '');
      },
      () => {
        resolve('');
      }
    );
  });
}
