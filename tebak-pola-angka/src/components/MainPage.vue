<template>
  <div class="main-page">
    <div class="about">
      <img v-on:click="gotoPage('/about')" class="spanCornerLeft" v-bind:src="'./../src/assets/img/Information_White.svg'" height="30px"/>
    </div>
    <div class="title">
      <br/><br/>
      <center>
        <img v-bind:src="'./../src/assets/img/Logo_MA_Tebak Angka_new.png'" height="250px"/>
      </center>
    </div>
    <div class="bottomBtn">
      <center>
        <div class="buttonPlay" v-on:click="gotoPage('/play')">
          <center><img v-bind:src="'./../src/assets/img/Play_White.svg'" width="60px" height="50px"/></center>
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
    background: linear-gradient(-60deg, #1abc9c, #1abc9c, #16a085, #16a085);
    background-size: 400% 400%;
    -webkit-animation: Gradient 5s ease infinite;
    -moz-animation: Gradient 5s ease infinite;
    animation: Gradient 5s ease infinite;
    cursor:pointer;
    height: 640px;
    width: 360px;
    max-height: 640px;
    max-width:360px;
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
    margin-top:100px;
  }
  .bottomBtn{
    margin-top: 60px;
  }
  .buttonPlay{
    color:#ff6f69;
    background-color: #cc2444;
    border-radius:100%;
    border:5px solid #fff;
    padding: 10px 10px;
    width: 80px;
    height: 80px;
  }
</style>
