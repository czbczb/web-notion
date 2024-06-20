const fs = require('fs');
const HTMLDocx = require('html-docx-js');

// 读取 HTML 文件
const html = fs.readFileSync('input.html', 'utf8');
console.log(typeof html);
// 将 HTML 转换为 DOCX
const doc = HTMLDocx.asBlob(html);

// 将 DOCX 文件写入磁盘
fs.writeFileSync('output.docx', doc);

console.log('DOCX file generated successfully!');