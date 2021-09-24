var os = require("os");

var networkInterfaces = os.networkInterfaces();

console.log(networkInterfaces);

var ip = networkInterfaces['WLAN'][1].address;

//注意，我这里是WLAN，你那里却不一定，又可能是以太网，或者其他什么的

//你有可能要写成var ip=networkInterfaces['以太网'][1].address;之类的，

//反正根据自己的实际情况写

var mac = networkInterfaces['WLAN'][1].mac;

console.info("ip地址为：" + ip);

console.info("mac地址为：" + mac);