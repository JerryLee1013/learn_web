// import * as m1 from "./hello.js";
const btn = document.getElementById("btn");

btn.onclick = function () {
    // 动态引入
    import("./hello.js").then((module) => module.hello());
};
