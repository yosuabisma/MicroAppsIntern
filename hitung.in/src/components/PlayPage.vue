<template>
  <div class="play-page">
    <div class="rule-of-game">
      <div class="rules-box">
        <center>
          <h1 class="size16 margin2">Kamu harus mengerjakan 10 soal dengan jawaban yang tepat selama 60 detik agar nilai mu 100.</h1>
          <h1 class="size24 margin1">Selamat Bermain!</h1>

          <div class="ok-button" v-on:click="gotoPage('/problems')"><h1 class="size24 margin2">OK</h1></div>
        </center>
      </div>
    </div>
  </div>
</template>
<script>
  /*from https://nightcatsama.github.io/vue-slider-component/example/#QuickStart*/
  import vueSlider from 'vue-slider-component';
  export default {
    data(){
      return{
        nextPlay:false,
        nums:4,
      }
    },
    components: {
      vueSlider
    },
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
  .size60{
    font-size: 60px;
  }
  .size24{
    font-size: 24px;
  }
  .skipFont{
    color:yellow;
    animation-name: stretchTapToPlay;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;
  }
  @keyframes stretchTapToPlay {
    0% {
      transform: scale(.6);
    }
    50% {
    }
    100% {
      transform: scale(1.2);
    }
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
  /*Main DIV*/
  .play-page {
    height: 640px;
    width: 360px;
    background-color: #5856ff;
  }
  .rule-of-game {
    max-height: 640px;
    overflow: auto;
  }
  .emote {
    margin-top: 48px;
    width: 72px;
    height: 72px;
  }
  .rules-box{
    padding: 30px 30px;
    color: #fff;
  }
  .box-tap{
    background-color: #fff;
    padding: 15px 50px;
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
    padding: 90px 60px;
  }
  .notes{
    height: 110px;
    background-color: #5856ff;
    color: #fff;
    padding: 30px 30px;
  }

  /*Select Player*/
  .playerIndicator{
    margin-top: 70px;
  }
  .numSelect{
    background-color: #ff2d55;
    color: #fff;
    padding: 30px 30px;
  }
  .vueslide{
    margin-top: 190px;
  }

  /*button play start*/
  .startPlay{
    color:#007aff;
    font-size:48px;
    background-color: #fff;
    border-radius:8px;
    padding: 10px 10px;
    margin-top: 75px;

    animation-name: stretchPlay;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;
    /*background: linear-gradient(-60deg, #ff2d55, #ff2d55, #5856ff, #5856ff);
    background-size: 1000% 1000%;
    -webkit-animation: Gradient 5s ease infinite;
    -moz-animation: Gradient 5s ease infinite;
    animation: Gradient 5s ease infinite;*/
  }
  .startPlay:hover{
    background-color: #fff;
  }

  @keyframes stretchPlay {
    0% {
      transform: scale(.8);
      background-color: #fff;
    }
    50% {
      background-color: #fff;
    }
    100% {
      transform: scale(1);
      background-color: #fff;
    }
  }
  .buttonFinishTapEX{
    color:#fff;
    font-size:30px;
    background-color: #cc2444;
    border-radius:8px;
    padding: 6px 6px;
  }
  .ok-button {
    margin-top: 200px;
    width: 100px;
    height: 30px;
    background-color: #ff1e38;
  }
  .ok-button h1 {
    margin-top: 80px;
  }
</style>
