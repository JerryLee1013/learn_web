// Promise 解决回调地狱
let fs = require("fs");
function getFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}
getFile("../01let声明变量.html")
    .then(
        (value) => {
            console.log(value.toString());
            return getFile("../02const.html");
        },
        (reason) => {
            console.error(reason);
            return getFile("../02const.html");
        }
    )
    .then(
        (value) => {
            console.log(value.toString());
            return getFile("../03模板字符串.html");
        },
        (reason) => {
            console.error(reason);
            return getFile("../03模板字符串.html");
        }
    )
    .then(
        (value) => {
            console.log(value.toString());
        },
        (reason) => {
            console.error(reason);
        }
    );
