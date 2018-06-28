<template>
  <div class="main-page">
    <div class="about">
      <h1 class="white spanCornerRight" v-on:click="gotoPage('/about')">about</h1>
    </div>
    <div class="title">
      <center>
        <br/><br/>
        <img v-bind:src="'./../src/assets/img/logo-akamsi/logo-akamsi.svg'" height="160px"/>
        <h1 class="size60 yellow"><b>Akamsi</b></h1>
        <h5 class="size24">Anak Kampung Sini</h5>
      </center>
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
  .yellow{
    color:yellow;
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
    background: linear-gradient(-60deg,  #0c2461,  #0c2461, #0a3d62,#0a3d62);
    background-size: 400% 400%;
    -webkit-animation: Gradient 5s ease infinite;
    -moz-animation: Gradient 5s ease infinite;
    animation: Gradient 5s ease infinite;
    cursor:pointer;
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
    margin-top: 120px;
  }
  .buttonPlay{
    color:#fff;
    font-size:48px;
    background-color: #eb2f06;
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
    background-color:#e55039;
  }

  @keyframes stretch {
    0% {
      transform: scale(.8);
      background-color: #eb2f06;
    }
    50% {
      background-color:#e55039;
    }
    100% {
      transform: scale(1);
      background-color: #e55039;
    }
  }
</style>
