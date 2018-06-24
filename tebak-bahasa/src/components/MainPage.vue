<template>
  <div class="main-page">
    <div class="about">
      <h1 class="white spanCornerRight" v-on:click="gotoPage('/about')">about</h1>
    </div>
    <div class="title">
      <h1 class="size60"><b>Tebak Bahasa</b></h1>
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
    color:#5856ff;
  }
  .height1{
    line-height: 67.5px;
  }
  .height2{
    line-height: 22.5px;
  }

  .main-page {
    padding:30px 30px;
    color: #fff;
    background: linear-gradient(-60deg, #2c2c54, #2c2c54, #474787,#474787);
    background-size: 400% 400%;
    -webkit-animation: Gradient 5s ease infinite;
    -moz-animation: Gradient 5s ease infinite;
    animation: Gradient 5s ease infinite;
    cursor:pointer;
    /*height: 640px;
    width: 360px;*/
  }

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  .title{
    margin-top:70px;
  }
  .bottomBtn{
    margin-top: 250px;
  }
  .buttonPlay{
    color:#fff;
    font-size:48px;
    background-color: #ff793f;
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
  .buttonPlay:hover{
    background-color: #cd6133;
  }

  @keyframes stretch {
    0% {
      transform: scale(.8);
      background-color: #ff793f;
    }
    50% {
      background-color: #ff793f;
    }
    100% {
      transform: scale(1);
      background-color: #cd6133;
    }
  }
</style>
