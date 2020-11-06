<template>
    <div class="red">
     components第一种方法（组件）
    </div>
</template>
 <script>
 export default {
     data(){
         return{
             n: 0
         }
     },
     methods:{
         add(){
             this.n += 1
         }
     }
 };
 </script>

 <style scoped>
 .red{
     color: aqua;
 }
 </style>