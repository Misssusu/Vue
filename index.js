let app = new Vue({
    el: ".app",
    data: {
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ],
        obj: {
            name: 'suyuan',
            age: '18'
        }
    },
    methods: {
        submit: function(evt){
            console.log(evt)
        },
        doThis: function(){
            console.log('child click')
        },
        isClick() {
            console.log('parent click')
        },
        enterSubmit() {
            console.log('press enter')
        },
        backSpaceFn() {
            console.log('press backspace');
        },
        onCtrlPress() {
            console.log('press ctrl');
        },
        leftPress() {
            console.log('click left');
        }
    }
});






