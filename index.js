let app = new Vue({
    el: ".app",
    data: {
        msg: 'hello',
    },
    methods: {
        reverseMessage: function(){
            console.dir(this)   //Vue
            this.msg = this.msg.split('').reverse().join()
        }
    }
})
let app1= new Vue({
    el: ".app1",
    data: {
        msg: 'hello v-model'
    }
})