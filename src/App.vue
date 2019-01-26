<template lang="html">
      <div class="example">
           <img src="./asset/01.jpg" alt="">
           <p class="title">awesome webpack config</p>
      </div>
</template>

<script>
export default {
    data(){
       return {
         msg:'hell  world'
       }
    }
}
</script>

<style lang="scss" scoped>
   $bg_color:red;
   .example{
     .title{
       color:$bg_color;
       transform: translate(10px,50px);
     }
   }
</style>
