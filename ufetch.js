#!/usr/bin/env node

// using JS Modules:
// import fetch from 'unfetch'

// // or using CommonJS:
// const fetch = require('unfetch')
// var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// // var xhr = new XMLHttpRequest();


// // usage:
// fetch('https://api.github.com/')
//   .then( r => r.json() )
//   .then( data => console.log(data) )






const fetch = require('node-fetch');
//   If you are using a Promise library other than native, set it through fetch.Promise:  
const Bluebird = require('bluebird');

fetch.Promise = Bluebird;

fetch('https://api.github.com/')
  .then(res => res.json())
  .then(json => console.log(json));