const fs = require("fs");

/* fs.readFile("../01let声明变量.html", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
 */

//  使用promise封装
const p = new Promise(function (resolve, reject) {
    fs.readFile("../01let声明变量.html", (err, data) => {
        if (err) reject(err);

        //成功
        resolve(data);
    });
});

p.then(
    function (value) {
        console.log(value.toString());
    },
    function (reason) {
        console.log("读取失败");
    }
);
