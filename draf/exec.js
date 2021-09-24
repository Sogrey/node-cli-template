
var exec = require('child_process').exec;
var cmd = 'cd ' + modelUrl + ' && mkdir myDir';

exec(cmd, function (error, stdout, stderr) {
    // 获取命令执行的输出
    console.log(error, stdout, stderr);
});



var spawn = require('child_process').spawn;

free = spawn('xset', ['dpms','force','off']);

// 捕获标准输出并将其打印到控制台 
free.stdout.on('data', function (data) { 
  console.log('standard output:\n' + data); 
});
// 捕获标准错误输出并将其打印到控制台 
free.stderr.on('data', function (data) { 
  console.log('standard error output:\n' + data); 
});
// 注册子进程关闭事件 
free.on('exit', function (code, signal) { 
  console.log('child process eixt ,exit:' + code); 
});