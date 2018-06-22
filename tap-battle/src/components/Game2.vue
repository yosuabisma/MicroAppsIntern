<template>
  <div class="game-2">
    <div class="player-1">
      <h6 class="white">Score 1 : {{count1}}</h6>
      <button v-on:click="activate">TEST</button>
      <div class="time">
        {{sec}}
      </div>
      <div class="tapzone">
        <center>
          <div class="tap1" v-on:click="count1+=1">
              <center><h1 class="size30 white tapAnim">Tap !</h1></center>
          </div>
        </center>
      </div>
      <div class="powerup1">
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
      <h6 class="white">Score 2 : {{count2}}</h6>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        sec:60,
        count1:0,
        count2:0
      }
    },
    methods: {
      activate() {
        window.setInterval(this.sec -= 1, 1000);
        //setTimeout(() => this.sec -= 1, 1000);
      }
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
  .game2{
    max-height: 600px;
    padding: 30px 30px;
  }
  .player-1{
    height: 300px;
    max-height: 300px;
    background-color:#081534;
    border-bottom: 2px solid #fff;
    padding: 30px 30px;
    background: linear-gradient(-45deg, #081534, #133a7c, #081534, #133a7c);
    background-size: 400% 400%;
    -webkit-animation: Gradient 5s ease infinite;
    -moz-animation: Gradient 5s ease infinite;
    animation: Gradient 5s ease infinite;
  }
  .player-2{
    height: 300px;
    max-height: 300px;
    background-color:#081534;
    border-top: 2px solid #fff;
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
    height: 90px;
  }
  .powerup2{
    height: 90px;
  }
</style>
