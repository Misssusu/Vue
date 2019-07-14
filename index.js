Vue.component('my-component',{
    template: '<p class="foo bar">用在组件上</p>'
});
let app = new Vue({
    el: ".app",
    data: {
        classObj: {
            active: true,
            red: false
        },
        activeClass: 'isActive',
        errorClass: 'error'
    }
});
let app1 = new Vue({
    el: ".app1",
    data: {
        styleObj: {
            color: 'blue'
        },
        newStyle: {
            fontWeight: 'bold'
        }
    }
});
let app2 = new Vue({
    el: ".app2"
})







