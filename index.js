let app = new Vue({
    el: ".app",
    data: {
        msg: 'hello'
    }
});
let app2 = new Vue({
    el: ".app2",
    data: {
        rawHtml: '<span style="color:red">this is red</span>'
    }
});
let app3 = new Vue({
    el: ".app3",
    data: {
        btnDisable: true,
        dynamicId: 'div'
    }
});
let app4 = new Vue({
    el: ".app4",
    data: {
        number: 1,
        id: 'div'
    }
});
let app5 = new Vue({
    el: ".app5",
    data: {
        eventname: 'click',
        attribute: 'class',
        str: 'item'
    },
    methods: {
        doSomething: function(){
            console.log('click')
        }
    }
});





