Vue.component('blog-post',{
    data() {
        return {
            items: [{
                title: '通过Prop向子组件传递数据'
            }],
            num: 1
        }
    },
    props: ['post'],
    template: `
    <div>
        <span>{{post.title}}</span>
        <span v-for="item in items">{{item.title}}</span>
        <button @click="$emit('enlarge-text',0.1)">按钮</button>
     </div>
`
});
Vue.component('custom-input',{
    props:['value'],
    template: `
        <input :value="value" @input="$emit('input',$event.target.value)">
    `
});
Vue.component('alert-box',{
    template: `
        <div>
            <span>hello</span>
            <slot></slot>
        </div>
    `
});
Vue.component('blog-post-row',{
   template: `<tr><td>1</td><td>2</td></tr>`
});
let app = new Vue({
    el: ".app",
    data: {
        posts: [{
            id: 1,
            title: '通过Prop向子组件传递数据'
        }],
        postFontsize: 1,
        searchText: ''
    },
    methods: {
        btnClick(num) {
            console.log(this.postFontsize)
            return this.postFontsize += num
        }
    }
});






