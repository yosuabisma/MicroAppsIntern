<template>
  <div class="game-2">
    <div class="player-1">
      <div class="powerup1">
      </div>
      <div class="tapzone">
        <center>
          <div class="tap1" v-on:click="count1+=1">
              <center><h1 class="size30 white tapAnim">Tap !</h1></center>
          </div>
        </center>
      </div>
      <div class="spanCornerLeft">
        <h5 class="white">SCORE</h5>
        <h2 class="white">{{count1}}</h2>
      </div>
    </div>
    <div class="timerDiv">
      <div class="time white">
        <center><h1><p class="rotate90"><span id="countdowntimer">60</span></p></h1></center>
      </div>
    </div>
    <div class="player-2">
      <div class="powerup2">
      </div>
      <div class="tapzone">
        <center>
          <div class="tap2" v-on:click="count2+=1">
            <center><h1 class="size30 white tapAnim">Tap !</h1></center>
          </div>
        </center>
      </div>
      <div class="spanCornerLeft">
        <h5 class="white">SCORE</h5>
        <h2 class="white">{{count2}}</h2>
      </div>
    </div>
  </div>
</template>
<script>
  var timeleft = 60;
  var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
  },1000);

  export default {
    data(){
      return{
        count1:0,
        count2:0
      }
    },
    methods: {

    }
  }
</script>
<style>
  /*font*/
  .size30{
    font-size: 30px;
  }
  .white{
    color:#fff;
  }
  .spanCornerLeft{
    float: left;
  }
  .spanCornerRight{
    float: right;
  }

  .game2{
    max-height: 680px;
    max-width: 360px;
    padding: 30px 30px;
  }
  .timerDiv{
    max-height: 80px;
    padding: 5px 5px;
    background-color: black;
    font-weight: bold;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
  }
  .rotate90{
    /*rotate*/
    -ms-transform: rotate(-90deg); /* IE 9 */
   -webkit-transform: rotate(-90deg); /* Safari */
   transform: rotate(-90deg); /* Standard syntax */
  }
  .player-1{
    height: 300px;
    max-height: 300px;
    background-color:#081534;
    /*border-bottom: 2px solid #fff;*/
    padding: 30px 30px;
    background: linear-gradient(-45deg, #081534, #133a7c, #081534, #133a7c);
    background-size: 400% 400%;
    -webkit-animation: Gradient 5s ease infinite;
    -moz-animation: Gradient 5s ease infinite;
    animation: Gradient 5s ease infinite;
    /*rotate*/
    -ms-transform: rotate(180deg); /* IE 9 */
   -webkit-transform: rotate(180deg); /* Safari */
   transform: rotate(180deg); /* Standard syntax */
  }
  .player-2{
    height: 300px;
    max-height: 300px;
    background-color:#081534;
    /*border-top: 2px solid #fff;*/
    padding: 30px 30px;
    background: linear-gradient(-45deg, #081534, #133a7c, #081534, #133a7c);
    background-size: 400% 400%;
    -webkit-animation: Gradient 5s ease infinite;
    -moz-animation: Gradient 5s ease infinite;
    animation: Gradient 5s ease infinite;
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
  .tapzone{
    height: 150px;
  }
  .tap1{
    background-color: #e74c3c;
    height: 150px;
    border-radius: 100%;
    width: 150px;
    padding:60px 30px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  }
  .tap1:active{
    background-color: #c0392b;
    height: 120px;
    width: 120px;
    font-size: 20px;
    padding:50px 10px;
  }
  .tap2{
    background-color: #3498db;
    height: 150px;
    border-radius: 100%;
    width: 150px;
    padding:60px 30px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  }
  .tap2:active{
    background-color: #2980b9;
    height: 120px;
    width: 120px;
    font-size: 20px;
    padding:50px 10px;
  }
  .tapAnim{
    animation-name: stretch;
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;
  }
  @keyframes stretch {
    0% {
      transform: scale(.6);
    }
    100% {
      transform: scale(1);
    }
  }
  .powerup1{
    height: 60px;
  }
  .powerup2{
    height: 60px;
  }
</style>
