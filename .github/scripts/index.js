const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.resolve(__dirname, '../../README.md', '123'))

console.log('成功');