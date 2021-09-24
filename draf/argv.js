#!/usr/bin/env node

// node argv.js test1 test2 test3333
var arguments = process.argv.splice(2);
console.log(arguments);

// print process.argv
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});