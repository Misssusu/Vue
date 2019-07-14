let app = new Vue({
    el: ".app",
    data: {
        message: 'hello'
    },
    computed: {
        reverseMessage: function(){     //声明了一个计算属性reverseMessage
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        reverseMessageFn: function(){
            return this.message.split('').reverse().join('')
        }
    }
});
let app1 = new Vue({
    el: ".app1",
    data: {
        firstName: 'Su',
        lastName: 'Yuan',
        fullNameWatch: 'Su Yuan'
    },
    watch: {
        firstName: function(val) {
            this.fullNameWatch = val + ' ' + this.lastName
        },
        lastName: function(val) {
            this.fullNameWatch = this.firstName + ' ' + val
        }
    },
    computed: {
        // fullName() {
        //     return this.firstName + ' ' + this.lastName
        // },
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            set: function (newVall) {
                let names = newVall.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length-1];
            }
        }
    }
});







