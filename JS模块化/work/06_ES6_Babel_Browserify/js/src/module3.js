// 默认暴露
// export default () => {
//     console.log("我是默认暴露");
// };

export default {
    msg: "默认暴露",
    foo() {
        console.log(this.msg);
    },
};
