var componentB = {
    template: `<div>conponentB</div>`
};
var componentA = {
    template: `<div>conponentA<slot></slot><component-b></component-b></div>`,
    components: {
        'component-b': componentB
    }
};

Vue.component('component-a-glb',{
    template: `<div>global conponentA<slot></slot></div>`
});
Vue.component('component-b-glb',{
    template: `<div>global conponentB</div>`
});
Vue.component('blog-post',{
    props: ['postTitle'],
    template: `<div>{{postTitle}}</div>`
});
let app = new Vue({
    el: ".app",
    components: {
        'component-b': componentB,
        'component-a': componentA
    }
});






