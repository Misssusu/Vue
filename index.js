
Vue.component('todo-item',{
    props: ['fruit'],
    template: '<li>{{fruit}}</li>'
})
let app = new Vue({
    el: ".app",
    data: {
        fruits: ['apple','orange','banana']
    }
})