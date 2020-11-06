<template>
 <div class="back">
     验证消亡destroyed
     <hr>
     {{m}}
     <button @click="add">+2</button>
    </div>
</template>
<script>
export default {
     data(){
         return{
             m: 0
         }
     },
     created(){
        console.log('这玩意出现在内存中，没有出现在页面中');
        },
     mounted(){
        console.log('这玩意出现在页面中');
        },
     updated(){
        console.log('更新了');
        },
     destroyed(){
        console.log('已经消亡了');
        },
     methods:{
         add(){
             this.m += 2
         }
     }
}
</script>

<style>
  .back{
      color: blue;
  }
</style>