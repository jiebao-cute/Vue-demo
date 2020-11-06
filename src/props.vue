<template>
 <div class="ak">
     这是props内部信息
     <hr>
  {{message}}
  <button @click="fn">call fn</button>
 </div>
</template>

<script>
export default {
    props:['message','fn']
}
</script>

<style>
.ak{
    color: burlywood;
    border: 1px solid red;
}
</style>