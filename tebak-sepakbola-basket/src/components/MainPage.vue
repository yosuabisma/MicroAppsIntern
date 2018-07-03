<template>
  <div class="main-page">
    <div class="about">
      <img v-on:click="gotoPage('/about')" class="spanCornerLeft" v-bind:src="'./../src/assets/img/Information_White.svg'" height="30px"/>
    </div>
    <div class="title">
      <center>
        <br/><br/>
        <img v-bind:src="'./../src/assets/img/Group 26.svg'" height="160px"/>
        <h1 class="yellow size36"><b>Tebak Tokoh</b></h1>
        <h1 class="white size24"><b>Sepak Bola vs Basket</b></h1>
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
  .yellow{
    color:yellow;
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
    background: linear-gradient(-60deg, #192a56, #192a56, #273c75,#273c75);
    background-size: 400% 400%;
    -webkit-animation: Gradient 5s ease infinite;
    -moz-animation: Gradient 5s ease infinite;
    animation: Gradient 5s ease infinite;
    cursor:pointer;
    height: 640px;
    width: 360px;
    max-height: 640px;
    max-width: 360px;
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
    background-color: #EE5A24;
    border-radius:100%;
    border:5px solid #fff;
    padding: 10px 10px;
    width: 80px;
    height: 80px;
  }
</style>
