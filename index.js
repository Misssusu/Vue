let obj = {
    a: 1
}
let app = new Vue({
    el: ".app",
    data: obj,
    methods: {
        reduce: function(step){
            this.a -= 1;
            console.log(step);
        }
    }
});

