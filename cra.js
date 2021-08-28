#!/usr/bin/env node


// const ora = require('ora').default

// const spinner = ora('Loading unicorns').start();

// setTimeout(() => {
// 	spinner.color = 'yellow';
// 	spinner.text = 'Loading rainbows';
// }, 1000);



const chalk = require("chalk");
const print = console.log;
print(chalk.blue("Hello") + " World" + chalk.red("!"));
print(chalk.blue.bgRed.bold("Hello World!"));




// const ora = require("ora");

// const spinner = ora({
//     text: "链接网络中"
// }).start(); // 开始状态 => 加载状态

// setTimeout(() => {
//     spinner.color = "yellow";
//     spinner.text = "网速有点慢";
// }, 1000); // 还是 加载状态, 更新文案和颜色

// setTimeout(() => {
//     spinner.succeed("下载成功"); // 加载状态 => 成功状态
// }, 2000);



// const ora = require("ora");

// const spinners = [ora("Loading..."), ora("Loading...")];
// spinners[0].start();

// setTimeout(() => {
//   spinners[0].succeed("Sucess ");
//   spinners[1].start();
// }, 5000);

// setTimeout(() => {
//   spinners[1].fail("Fail ");
// }, 5000);



// const ora = require('ora');

// const spinner = ora('Loading unicorns').start();

// setTimeout(() => {
//     spinner.color = 'yellow';
//     spinner.text = 'Loading rainbows';
// }, 1000);


var ProgressBar = require("progress");

var bar = new ProgressBar("[ :bar ] :rate/bps [:current/100] :percent :elapseds", { total: 100 });
var timer = setInterval(function() {
  bar.tick();
  if (bar.complete) {
    console.log("\ncomplete\n");
    clearInterval(timer);
  }
}, 100);

