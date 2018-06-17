<template>
  <div class="game-over">
    <center>
      <div class="titleOver">
        <h1 class="size60">Game Over</h1>
        <h1 class="size20">Thanks for Playing! :)</h1>
      </div>
      <div class="navigationOver">
        <div class="spanCornerLeft">
          <h1 class="size20" v-on:click="gotoPage('/')"><b>Home</b></h1>
        </div>
        <div class="spanCornerRight">
          <h1 class="size20" v-on:click="gotoPage('/play')"><b></b>Play Again</h1>
        </div>
      </div>
    </center>
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
  .size60{
    font-size: 60px;
  }
  .size20{
    font-size: 20px;
  }
  .game-over{
    background-color: black;
    color:#fff;
    height: 640px;
    width: 360px;
    padding: 30px 30px;
  }
  .titleOver{
    margin-top: 150px;
    animation-name: stretchOver;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;
  }
  @keyframes stretchOver {
    0% {
      transform: scale(.8);
    }
    50% {
    }
    100% {
      transform: scale(1);
    }
  }
  .navigationOver{
    margin-top: 100px;
    font-size: 20px;
  }
  .spanCornerLeft{
    float:left;
  }
  .spanCornerRight{
    float:right;
  }
</style>
