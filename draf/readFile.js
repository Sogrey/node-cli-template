var fs=require("fs");
var path=require("path");
fs.readFile(path.join(__dirname,'test.txt'),function (err,data) {
    if(err){
        console.log('err',err);
    }else{
        console.log('data',data);//打印出的是16进制的内容<Buffer e8 bf 99 e6 98 af e8 bf bd e5 8a a0 e5 86 99 e5 85 a5 61 70 70 65 6e 64 46 69 6c 65 54 65 73 74 2e 74 78 74 e6 96 87 e4 bb b6 e7 9a 84 e5 86 85 e5 ae ... >
        console.log('string > ',data.toString());//打印出的是我们正常的文本信息
    }
})