const fs = require('fs');
const path = require('path');

const readmePath = path.resolve(__dirname, '../../README.md');

fs.writeFileSync(readmePath, '456')

console.log('成功');