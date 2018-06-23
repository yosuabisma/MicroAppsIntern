<template>
  <div class="play-page">
    <div v-if="quest1===true" class="question-1">
      {{num1}} , {{num2}}
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        quest1:true,
        quest2:false,
        quest3:false,
        quest4:false,
        quest5:false,
        quest6:false,
        quest7:false,
        quest8:false,
        quest9:false,
        quest10:false,
        num1:Math.floor(Math.random() * Math.floor(100)),
        num2:
      }
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      generateQuest(){
        this.num1=Math.floor(Math.random() * Math.floor(100));
      }
    }
  }
</script>
<style>
</style>
