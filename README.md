# node-cli
node 命令行工具


[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/Sogrey/node-cli-template)

nodejs开发cli脚手架


- npm社区中也有一些优秀的命令行参数解析包，比如yargs,tj的commander.js等等，阮一峰老师推荐的shelljs
- 颜色部分使用了第三方包colors，这里就不演示了。
- 用户输入交互都是由nodejs自带的readline模块实现的。
- chalk是一个日志的样式库，可以在终端上面调整日志的样式。
- ora可以在终端实现Loading的效果，可以在与用户进行交互后使用。
- 在终端中和用户进行交互，获取用户输入是一个很常见的需求。Inquirer这个库能够通过终端让我们和用户进行一些交互。
- 最常见的文件模板下载，都是通过将文件上传到CDN中，然后再通过某个特定的格式下载到页面上。但是，如果你想要通过比较优雅的方式来进行文件下载，可以通过download-git-repo来下载你再Git上面已经准备好的模板，这样就能够在下载的过程中保证文件目录和顺序，比之前自己创建和检测文件夹会简便很多。
- 当你提供的模板不仅仅是一个纯粹的文件，而是可以通过某些参数进行编译，得到不同的目标文件时，你可以通过metalsmith来对文件进行操作。
- 如果你想要一套现成的模板编译工具，可以使用现成的如Handlebars。


nodejs交互工具库系列

- chalk-pipe	使用更简单的样式字符串创建粉笔样式方案
- chalk	正确处理终端字符串样式
- Commander.js	完整的 node.js 命令行解决方案
- Inquirer.js	一组通用的交互式命令行用户界面。
- slash	系统路径符处理
- minimist	解析参数选项
- dotenv	将环境变量从 .env文件加载到process.env中
- dotenv-expand	扩展计算机上已经存在的环境变量
- hash-sum	非常快的唯一哈希生成器
- deepmerge	深度合并两个或多个对象的可枚举属性。
- yaml-front-matter	解析yaml或json
- resolve	实现node的 require.resolve()算法，这样就可以异步和同步地使用require.resolve()代表文件
- semver	npm的语义版本器
- leven	测量两字符串之间的差异<br/>最快的JS实现之一
- lru cache	删除最近最少使用的项的缓存对象
- portfinder	自动寻找 8000至65535内可用端口号
- ora	优雅的终端转轮
- envinfo	生成故障排除软件问题(如操作系统、二进制版本、浏览器、已安装语言等)时所需的通用详细信息的报告
- memfs	内存文件系统与Node's fs API相同实现
- execa	针对人类的流程执行
- webpack-merge	用于连接数组和合并对象，从而创建一个新对象
- webpack-chain	使用链式API去生成简化webpack版本配置的修改
- strip-ansi	从字符串中去掉ANSI转义码
- address	获取当前机器的IP, MAC和DNS服务器。
- default-gateway	通过对OS路由接口的exec调用获得机器的默认网关
- joi	JavaScript最强大的模式描述语言和数据验证器。
- fs-extra	添加了未包含在原生fs模块中的文件系统方法，并向fs方法添加了promise支持
- Acorn	一个小而快速的JavaScript解析器，完全用JavaScript编写。
- zlib.js	ZLIB.js是ZLIB(RFC1950)， DEFLATE(RFC1951)， GZIP(RFC1952)和PKZIP在JavaScript实现。

- https://segmentfault.com/a/1190000037698795
- https://jelly.jd.com/article/6006b1045b6c6a01506c87b4