/**
 * 将像素单位生成响应式单位的插件
 * 
 * npm i postcss-viewport-convert
 * 
 * https://www.npmjs.com/package/postcss-viewport-convert
 */


'use strict';
 
var fs = require('fs');
var postcss = require('postcss');
var pxToViewport = require('..');
var css = fs.readFileSync('main.css', 'utf8');
var options = {
  replace: false,
  unitToConvert: 'px',
  viewportWidth: 320,
  viewportHeight: 568, // not now used; TODO: need for different units and math for different properties
  unitPrecision: 5,
  viewportUnit: 'vw',
  fontViewportUnit: 'vw',  // vmin is more suitable.
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false
};
var processedCss = postcss(pxToViewport(options)).process(css).css;
 
fs.writeFile('main-viewport.css', processedCss, function (err) {
  if (err) {
    throw err;
  }
  console.log('File with viewport units written.');
});