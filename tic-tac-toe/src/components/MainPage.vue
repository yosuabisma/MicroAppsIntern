<template>
  <div class="main-page">
    <div class="about">
      <h1 class="purple spanCornerRight" v-on:click="gotoPage('/about')">about</h1>
    </div>

    <div class="title">
      <br/><br/>
      <center><img v-bind:src="'./../src/assets/img/tic-tac-toe.svg'" height="250px"/></center>
    </div>
    <div class="bottomBtn">
      <center>
        <div class="buttonPlay" v-on:click="gotoPage('/play')">
          <b>Play</b>
        </div>
      </center>
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
  /*FONT*/
  .size72{
    font-size:72px;
  }
  .size60{
    font-size:60px;
  }
  .size36{
    font-size:36px;
  }
  .size20{
    font-size: 20px;
  }
  .size24{
    font-size: 24px;
  }
  .white{
    color:#f2f2f2;
  }
  .blue{
    color: #47a8e5;
  }
  .spanCornerRight{
    float: right;
  }
  .purple{
    color:#602f75;
  }
  .height1{
    line-height: 67.5px;
  }
  .height2{
    line-height: 22.5px;
  }
  .main-page {
    padding:30px 30px;
    background: #fff;
  }
  .title{
    margin-top:100px;
  }
  .bottomBtn{
    margin-top: 95px;
  }
  .buttonPlay{
    color:#fff;
    font-size:48px;
    background-color: #602f75;
    border-radius:8px;
    padding: 10px 10px;

    animation-name: stretch;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;
  }

  @keyframes stretch {
    0% {
      transform: scale(.8);

    }
    50% {
    }
    100% {
      transform: scale(1);
    }
  }
</style>
