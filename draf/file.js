// 判断文件、文件夹是否存在

var fs = require("fs");
var p = require("path");

fs.exists("dirName", function (exists) {
    console.log(exists ? "创建成功" : "创建失败");
});


fs.exists("../7", function (exists) {
    if (exists) {
        console.log("文件存在")
    }
    if (!exists) {
        console.log("文件不存在")
    }
})

// 查看文件夹下每个文件的绝对路径
var path = '';
fs.exists("../7", function (exists) {
    if (exists) {
        fs.readdir('../7', function (err, files) {
            if (err) {
                console.log("读取文件夹下7文件失败");
            } else {
                console.log("7文件夹下有" + files.length + "个文件");
                for (var i = 0; i < files.length; i++) {
                    path = p.resolve(__dirname, '../7') + p.sep
                    path = path + files[i];
                    console.log("----" + path)
                    fs.stat(path, function (err, stat) {
                        if (err) {
                            console.log("查看文件夹7下的文件信息失败");
                        } else {
                            if (stat.isFile()) {
                                fs.realpath(path, function (err, resolvePath) {
                                    if (err) {
                                        throw err;
                                        //console.log("查看文件绝对路径失败");
                                    } else {
                                        console.log("文件的路径为" + resolvePath)
                                    }

                                })

                            }
                        }
                    })
                }
            }
        })
    }
    if (!exists) {
        console.log("文件不存在")
    }
})

// 删除文件夹及文件
var fs = require('fs'); // 引入fs模块
function deleteall(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteall(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

deleteall("./dir") //将文件夹传入即可



// 复制文件
var fileName = "coverflow-3.0.1.zip";
 
var sourceFile = path.join(__dirname, fileName);
var destPath = path.join(__dirname, "dest", fileName);
 
var readStream = fs.createReadStream(sourceFile);
var writeStream = fs.createWriteStream(destPath);
readStream.pipe(writeStream);
console.log("移动完成")

// 移动文件 
var fileName = "coverflow-3.0.1.zip";
 
var sourceFile = path.join(__dirname, fileName);
var destPath = path.join(__dirname, "dest", fileName);
 
fs.rename(sourceFile, destPath, function (err) {
  if (err) throw err;
  fs.stat(destPath, function (err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
  });
});



// 按字节分段读文件
var fs = require('fs');
var filename = 'test.txt'

var fd = fs.openSync(filename, 'r');
var bufferSize = 1024;
var buffer = new Buffer(bufferSize);

var leftOver = '';
var read, line, idxStart, idx;
while ((read = fs.readSync(fd, buffer, 0, bufferSize, null)) !== 0) {
  leftOver += buffer.toString('utf8', 0, read);
  idxStart = 0
  while ((idx = leftOver.indexOf("\n", idxStart)) !== -1) {
    line = leftOver.substring(idxStart, idx);
    console.log("one line read: " + line);
    idxStart = idx + 1;
  }
  leftOver = leftOver.substring(idxStart);
}

//
var fs=require("fs"), //导入文件系统(File System)
rs=fs.createReadStream("f:/test.txt"), //创建读取流，参数为要读取内容的文件，这里使用的是绝对路径， ./表示当前路径 ，../表示上层路径。读取的内容以buffer形式存放
ws=fs.createWriteStream("f:/result.txt"); //创建可写流，参数为写入的文件名，如果文件不存在则创建文件，如果存在则覆盖源文件的内容

var data=Buffer.form(''), //创建一个buffer用于存储读取完的信息
 buffers=[], //创建一个数组，用于存储每一个流读取的信息
 nread=0; //用于记录读取全部内容的长度
function getContent(rs,callback){ //传入参数为：读取流，回调函数
    rs.on("data",function(chuck){ //给rs绑定data事件，用于按流读取文件内容
        buffers.push(chuck); //把读取到的buffer存入数组中
        nread+=chuck.length; //记录读取文件全部内容的buffer长度
    }).on("end",function(){  //文件全部读取完，执行end事件，用于对读取的数据进行处理
        var buffer = null;
        switch(buffers.length) {
            case 0:
                buffer = new Buffer(0);
            break;
            case 1:
                buffer = buffers[0];
            break;
            default:
                buffer = new Buffer(nread);  //创建nread长度的buffer，用于存储最终的内容buffer
                for(var i = 0, pos = 0, l = buffers.length; i < l; i++) {  //循环遍历每个装片段buffer的数组
                    var chunk = buffers[i];
                    chunk.copy(buffer, pos);  //把每段buffer片段，copy到新建buffer的对应位置
                    pos += chunk.length;
                }
            break;
        }
        data+=buffer.toString(); //把buffer转换为需要的String类型
        //使用回调函数是因为读取文件是异步的，只有等文件全部读取完，才能对其内容进行操作
        callback(JSON.parse(data));  //把string类型的数据转化为对象，方便对数据进行修改     
    });
}

getContet(rs,function(data){
    //对文件内容进行操作...
    //操作完成之后把内容输出到里一个文件中
    ws.write(JSON.stringify(data),'utf8'); //使用write方法写文件，内容转换为string类型，并设置字符编码为utf-8，不支持gbk或gb312
    ws.end(); //文件写完之后，执行end方法，告诉程序文件已经写完 
});