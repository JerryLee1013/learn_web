// 引入fs
const fs = require("fs");
const { rejects } = require("assert");
const { resolve } = require("path");

// 读取三个文件
function readFiles(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

// 声明一个async函数
async function main() {
    try {
        let fir = await readFiles("./01async&await.html");
        let sec = await readFiles("./02async&await.html");
        let third = await readFiles("./03读取文件.js");
        console.log(fir.toString());
        console.log(sec.toString());
        console.log(third.toString());
    } catch (e) {
        console.log(e);
    }
}

main();
