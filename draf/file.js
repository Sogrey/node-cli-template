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