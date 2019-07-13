let app = new Vue({
    el: ".app>div",
    data: {
        msg: "hello Vue",
        msg1: "页面加载于" + new Date().toLocaleString()
    }
})