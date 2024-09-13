const fs = require('fs');
const path = require('path');

const VERSION_NAME = 'version.json';
const versionFilePath = path.join('public', VERSION_NAME);
let version = 0;

try {
  const data = fs.readFileSync(versionFilePath, { encoding: 'utf-8' });
  if (data) {
    version = JSON.parse(data).version + 1;
  }
} catch (err) {
  console.error('获取版本文件时失败', err);
}

try {
  fs.writeFileSync(versionFilePath, JSON.stringify({ version }));
} catch (err) {
  console.error('写入版本文件时出错：', err);
}
