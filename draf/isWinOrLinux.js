const os = require('os');
if (os.type() == 'Windows_NT') {
	//windows
    console.log('is Windows_NT');
} else if (os.type() == 'Darwin') {
	//mac
    console.log('is MacOS');
} else if (os.type() == 'Linux') {
	//Linux
    console.log('is Linux');
} else{
	//不支持提示
    console.log('unknow operating system');
}