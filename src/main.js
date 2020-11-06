// import Vue from 'vue'
// import App from './App.vue'
const Vue = window.Vue
Vue.config.productionTip = false
import destroyed from './destroyed.vue'
import props from './props.vue'
//第一次使用组件
import Demo from './Demo.vue'
//console.log(Demo); 
//console.log(Demo.render.toString());
//第二次使用组件
Vue.component('Demo2', {
  template:`
   <div>components第二种方法（组件）</div>
  `
})
new Vue({
//第一次使用组件
components:{ Demo,
  //第三种方法
  Demo3:{ 
    data(){
      return {n:0}
    },
    template:`
    <div>components第三种组件方法 Demo3's n: {{n}}</div>
    `
  }
  },
   data(){
     return{
       n: 0,
       array:[1,2,3,4,5,6,7,8]
     }
   },
   template:`
   <div class="red">
   {{n}}
   <button @click="add">+1</button>
   <hr>
    <Demo/>
    <Demo2/>
    <Demo3/>
    <hr>
    {{filter()}}
    <hr>
    </div> `
  ,
   created(){
     console.log('这玩意出现在内存中，没有出现在页面中');
   },
   mounted(){
     console.log('这玩意出现在页面中');
   },
   updated(){
     console.log('更新了');
     console.log(this.n);
   },
   methods: {
     add(){
       this.n += 1
     },
     filter(array){
       return this.array.filter(i => i % 2 === 0)
     }
   },
 }).$mount('#app')
 //验证消亡 
 new Vue({
   components: {destroyed},
   data:{ 
     visible: true
   },
   template:`
   <div>
    <button @click="toggle">toggle</button>
   <destroyed v-if="visible === true"/>
   </div>
   `,
   methods:{
     toggle(){
    this.visible = !this.visible
   }
  }
 }).$mount('#destroyed')
//props 外部属性
 new Vue({
  components: {props},
  data:{ 
    visible: true,
    x: 0
  },

  template:`
  <div>
  <hr>
  {{x}}
   <props :message="x"  :fn="add"/>
  </div>
  `,
  methods:{
    add(){
      this.x +=1
    },
    toggle(){
   this.visible = !this.visible
  }
 }
}).$mount('#props')