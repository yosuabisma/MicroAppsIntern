<template>
  <div class="play-page">
    <div class="rules-box">
      <center><h1 class="size16">Swipe to skip the tutorial <span></span> </h1></center>
      <h1 class="size72 margin1">Rules</h1>
      <center><h1 class="size16 margin2">Tap on the circle button</h1></center>
    </div>
    <div class="box-tap">
      <div class="red-circle">
        <center><h1 class="size72">Tap!</h1></center>
      </div>
    </div>
    <div class="notes">
      <center><h1 class="size16">Swipe to end your turn, and move to the next player.</h1></center>
    </div>
    <div class="box-tap">
      <div class="red-circle">
        <center><h1 class="size72">Tap!</h1></center>
      </div>
    </div>
    <div class="notes">
      <center><h1 class="size16">Avoid the bomb or you will lose</h1></center>
    </div>
    <div class="box-bomb">
      <h1>Aha !</h1>
    </div>
    <div class="notes">
      <center><font class="spanCornerLeft size16" v-on:click="gotoPage('/')">Home</font><span><font class="spanCornerRight size16">Next</font></span></center>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      }
    }
  }
</script>
<style>
  /*font*/
  .size72{
    font-size: 72px;
  }
  .size16{
    font-size: 16px;
  }
  .margin1{
    margin-top: 30px;
  }
  .margin2{
    margin-top: 77px;
  }
  .spanCornerLeft{
    float:left;
  }
  .spanCornerRight{
    float: right;
  }

  .play-page {
    /*height: 640px;
    width: 360px;*/
  }
  .rules-box{
    padding: 30px 30px;
    background-color: #5856ff;
    color: #fff;
  }
  .box-tap{
    background-color: #fff;
    padding: 19px 57px;
    color:#fff;
  }
  .box-bomb{
    background-color: #ff3b30;
    padding: 19px 57px;
    color:#fff;
  }
  .red-circle{
    background-color: #ff2d55;
    border-radius: 100%;
    padding: 95px 67px;
  }
  .notes{
    height: 90px;
    background-color: #5856ff;
    color: #fff;
    padding: 30px 30px;
  }

</style>
