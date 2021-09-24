#!/usr/bin/env node

const fetch = require('node-fetch');
//   If you are using a Promise library other than native, set it through fetch.Promise:  
const Bluebird = require('bluebird');

fetch.Promise = Bluebird;

fetch('https://api.github.com/')
  .then(res => res.json())
  .then(json => console.log(json));