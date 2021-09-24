#!/usr/bin/env node

var path = require("path");
var fs = require("fs");
var JavaScriptObfuscator = require('javascript-obfuscator');

readFile('index.js').then(function onFulfilled(value) {
    // console.log('内容是：' + value);

    var obfuscationResult = JavaScriptObfuscator.obfuscate(value, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        shuffleStringArray: true,
        splitStrings: true,
        stringArrayThreshold: 1
    });

    // console.log(obfuscationResult.getObfuscatedCode());

    writeFile(obfuscationResult.getObfuscatedCode(),'index.min.js');
}).catch(function onRejected(error) {
    console.error('[ERROR] ' + error);
});


/**
 * 读文件
 * @param {string} filePath 文件路径
 * @returns Promise
 */
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.exists(filePath, function (exists) {
            if (!exists) {
                reject(new Error(filePath + ' not found.'));
            }

            fs.readFile(filePath, function (err, data) {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(data.toString());
                }
            })
        });
    });
}

function writeFile(txt,fileName) {
    fs.writeFile(fileName, txt, { 'flag': 'w' }, function(err) {
        if (err) {
            throw err;
        }
     
        // 写入成功后读取测试
        // fs.readFile(fileName, 'utf-8', function(err, data) {
        //     if (err) {
        //         throw err;
        //     }
        //     console.log(data);
        // });

        console.log('DONE.');
    });
}