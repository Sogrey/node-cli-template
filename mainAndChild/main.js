var childprocess = require('child_process');
var worker = childprocess.fork('./worker.js');

console.log('pid in master:', process.pid);

//监听事件
worker.on('message', function(msg) {
  console.log('1:', msg);
})
process.on('message', function(msg) {
  console.log('2:', msg);
})

worker.send('---');

//触发事件 message
process.emit('message', '------');
