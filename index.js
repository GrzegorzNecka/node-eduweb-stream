const fs = require('fs');

const stream = fs.createReadStream('text.txt', {
  hightWaterMark: 32 * 1024
});

stream.on('data', chunk => {
  console.log(chunk);
  console.log('Wielkośc kawałka: ' + Math.round(chunk.length / 1024) + 'KB');
  // console.log(chunk.toString());
});
