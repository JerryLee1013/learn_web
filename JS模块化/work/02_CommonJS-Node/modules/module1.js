//暴漏一个对象
module.exports = {
    msg: "module1",
    foo() {
        console.log(this.msg);
    },
};
