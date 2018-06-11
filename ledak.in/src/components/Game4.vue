<template>
  <div class="game-4">
    <br/><br/>

    <div class="player-1">
      <div class="spanCornerLeft">
        <h1 class="size20 green"><b>Player</b></h1>
        <h1>1</h1>
      </div>
      <div class="spanCornerRight">
        <h1>9</h1>
        <h1 class="size20 green"><b>Tap Left</b></h1>
      </div>
      <br/><br/>
      <center>
        <div class="stabilizer">
          <div class="tap1" v-on:click="count1+=1;mod=count1%10;">
            <h1 class="counterAnim">Tap!</h1>
          </div>
        </div>
      </center>
      <center>
          <br/>
          <h1 class="size48 green counterAnim">{{count1}} X</h1>
          <br/>
          <div class="buttonFinishTap" v-on:click="checkMod()">
            <b>Next Player Turn</b>
          </div>
      </center>
    </div>

    <div class="player-2">
      <div class="tap2">

      </div>
    </div>
    <div class="player-3">
      <div class="tap3">

      </div>
    </div>
    <div class="player-4">
      <div class="tap4">

      </div>
    </div>

    <div class="navigation">
      <div class="spanCornerLeft">
        <h1 class="size20" v-on:click="gotoPage('/')"><b>Home</b></h1>
      </div>
    </div>
    <!--div class="testingCalculation">
      <h1>Your Click {{count1}}</h1>
      <h1>Random Num {{random}}</h1>
      <h1>Mod Result = {{mod}}</h1>
    </div-->
  </div>
</template>
<script>
  var randomGenerate = Math.floor(Math.random() * Math.floor(10));
  export default {
      data(){
        return{
          random:randomGenerate,
          mod:0,
          count1: 0
          //finish1: false
        }
      },
      computed:{

      },
      methods: {
        gotoPage(route) {
          this.$router.push(route);
        },
        checkMod(){
          if(this.mod === this.random){
            this.$router.push('/play');
          }else{
            /*Next Player*/
          }
        }
      }
  }

</script>
<style>
  /*stabilizer*/
  .stabilizer{
    height: 280px;
  }
  /*font*/
  .size20{
    font-size: 20px;
  }
  .size48{
    font-size: 48px;
  }
  .green{
    color:#4cd964;
  }
  .spanCornerLeft{
    float:left;
  }
  .spanCornerRight{
    float: right;
  }
  /*main div*/
  .game-4{
    padding:25px 25px;
    color: #fff;
    background: linear-gradient(-45deg, #5856ff, #4166f5, #ff2d55, #ff2d55);
    background-size: 400% 400%;
    -webkit-animation: Gradient 2s ease infinite;
    -moz-animation: Gradient 2s ease infinite;
    animation: Gradient 2s ease infinite;
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



  .tap1{
    background-color: #4cd964;
    border-radius: 100%;
    color:#fff;
    height: 284px;
    width: 284px;
    font-size: 36px;
    padding: 105px 70px;
    margin-top: 60px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  }
  .tap1:active{
    background-color: #4cac64;
    height: 246px;
    width: 246px;
    font-size: 28px;
    padding: 94px 67px;
  }

  /*Finish Tap Button*/

  .buttonFinishTap{
    color:#fff;
    font-size:36px;
    background-color: #cc2444;
    border-radius:8px;
    padding: 6px 6px;
    animation-name: stretch;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;
  }
  .buttonFinishTap:hover{
    background-color: #ff2d55;
  }

  @keyframes stretch {
    0% {
      transform: scale(.8);
      background-color: #cc2444;
    }
    50% {
      background-color: #cc2444;
    }
    100% {
      transform: scale(1);
      background-color: #ff2d55;
    }
  }
  /*counter Anim*/
  .counterAnim{
    animation-name: stretch2;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;
  }

  @keyframes stretch2 {
    0% {
      transform: scale(.8);
    }
    50% {
    }
    100% {
      transform: scale(1);
    }
  }

  /*Navigation CSS*/
  .navigation{
    padding: 25px 25px;
    margin-top: 40px;
  }

</style>
