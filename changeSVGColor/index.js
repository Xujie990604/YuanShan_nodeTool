const fs = require('fs');

const svgStr = fs.readFileSync('./static/config.svg').toString();
// console.log(svgStr)

const svgChangeColor = svgStr.replace(/#[a-fA-F0-9]{6}/g, '#ff0000')
// console.log(svgChangeColor)

const svBase64 = Buffer.from(svgChangeColor).toString('base64')
// console.log(svBase64);



fs.writeFileSync('./static/configAAA.svg', Buffer.from(svBase64, 'base64'));

