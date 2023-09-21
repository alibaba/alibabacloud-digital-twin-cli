const archiver = require('archiver');
const fs = require('fs');

function createPackageDir(packageDir) {
  const isExist = fs.existsSync(packageDir);
  if (!isExist) {
    fs.mkdirSync(packageDir);
  } else {
    if (!fs.statSync(packageDir).isDirectory()) {
      fs.mkdirSync(packageDir);
    }
  }
}

export default async (path, version, name) => {
  const packageDir = `${path}/package`;
  const replaceName = name.replace(/\//g, '#');
  const packgeName = `${replaceName}_${version}.zip`;
  createPackageDir(packageDir);
  const outputPath = `${packageDir}/${packgeName}`;
  console.log('outputPath', outputPath);
  const output = fs.createWriteStream(outputPath); // 将压缩包保存到当前项目的目录下，并且压缩包名为test.zip
  const archive = archiver('zip', { zlib: { level: 9 } }); // 设置压缩等级

  archive.on('finish', function () {
    console.log('Data has been drained');
  });

  // 第三步，建立管道连接
  archive.pipe(output);

  // 第四步，压缩指定文件
  // archive.directory(`${path}/build/`, 'build');

  // 打包source文件
  archive.glob(
    '',
    {
      cwd: path,
      ignore: [
        //'build/**/*',
        'node_modules/**/*',
        'zips/**/*',
        'src/theme copy/**',
        '*.zip',
        //'build',
        'node_modules',
        'package/**/*',
        'package',
        '**/.git/**'
      ]
    },
    {
      prefix: '/'
    }
  );

  // 第五步，完成压缩
  await archive.finalize();
};
