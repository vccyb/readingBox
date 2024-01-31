const zlib = require("node:zlib");

const fs = require("node:fs");

const readStream = fs.createReadStream("index.txt");
const writeStream = fs.createWriteStream("index.txt.gz"); // 后缀上.gz

readStream.pipe(zlib.createGzip()).pipe(writeStream);
