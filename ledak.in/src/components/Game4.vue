<template>
  <div class="game-4">
    <br/><br/>

    <div v-if="isPlay1===true&&turn1<=10" class="player-1">
      <div class="spanCornerLeft">
        <h1 class="size20 white"><b>Player</b></h1>
        <h1>1</h1>
      </div>
      <div class="spanCornerRight">
        <h1 class="size20 white"><b>Turn</b></h1>
        <h1>{{turn1}}</h1>
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
          <br/>
          <!--h1 class="size48 green counterAnim">{{count1}} X</h1-->
          <br/>
          <div v-on:click="turn1+=1;isPlay2=true;isPlay1=false;count1=0;">
            <div class="buttonFinishTap" v-on:click="checkMod()">
              <b>Next Player Turn</b>
            </div>
          </div>
      </center>
    </div>

    <div v-if="isPlay2===true&&turn2<=10" class="player-2">
      <div class="spanCornerLeft">
        <h1 class="size20 white"><b>Player</b></h1>
        <h1>2</h1>
      </div>
      <div class="spanCornerRight">
        <h1 class="size20 white"><b>Turn</b></h1>
        <h1>{{turn2}}</h1>
      </div>
      <br/><br/>
      <center>
        <div class="stabilizer">
          <div class="tap2" v-on:click="count2+=1;mod=count2%10;">
            <h1 class="counterAnim">Tap!</h1>
          </div>
        </div>
      </center>
      <center>
          <br/>
          <br/>
          <!--h1 class="size48 green counterAnim">{{count2}} X</h1-->
          <br/>
          <div v-on:click="turn2+=1;isPlay3=true;isPlay2=false;count2=0;">
            <div class="buttonFinishTap" v-on:click="checkMod()">
              <b>Next Player Turn</b>
            </div>
          </div>
      </center>
    </div>

    <div v-if="isPlay3===true&&turn3<=10" class="player-3">
      <div class="spanCornerLeft">
        <h1 class="size20 white"><b>Player</b></h1>
        <h1>3</h1>
      </div>
      <div class="spanCornerRight">
        <h1 class="size20 white"><b>Turn</b></h1>
        <h1>{{turn3}}</h1>
      </div>
      <br/><br/>
      <center>
        <div class="stabilizer">
          <div class="tap3" v-on:click="count3+=1;mod=count3%10;">
            <h1 class="counterAnim">Tap!</h1>
          </div>
        </div>
      </center>
      <center>
          <br/>
          <br/>
          <!--h1 class="size48 green counterAnim">{{count3}} X</h1-->
          <br/>
          <div v-on:click="turn3+=1;isPlay4=true;isPlay3=false;count3=0;">
            <div class="buttonFinishTap" v-on:click="checkMod()">
              <b>Next Player Turn</b>
            </div>
          </div>
      </center>
    </div>

    <div v-if="isPlay4===true&&turn4<=10" class="player-4">
      <div class="spanCornerLeft">
        <h1 class="size20 white"><b>Player</b></h1>
        <h1>4</h1>
      </div>
      <div class="spanCornerRight">
        <h1 class="size20 white"><b>Turn</b></h1>
        <h1>{{turn4}}</h1>
      </div>
      <br/><br/>
      <center>
        <div class="stabilizer">
          <div class="tap4" v-on:click="count4+=1;mod=count4%10;">
            <h1 class="counterAnim">Tap!</h1>
          </div>
        </div>
      </center>
      <center>
          <br/>
          <br/>
          <!--h1 class="size48 green counterAnim">{{count4}} X</h1-->
          <br/>
          <div v-if="turn4<10" v-on:click="turn4+=1;isPlay1=true;isPlay4=false;count4=0;">
            <div class="buttonFinishTap" v-on:click="checkMod()">
              <b>Next Player Turn</b>
            </div>
          </div>
          <div v-if="turn4===10" v-on:click="isPlay4=false;count4=0;">
            <div class="buttonFinishTap" v-on:click="checkModAndFinish()">
              <b>Finish Game</b>
            </div>
          </div>
      </center>
    </div>

    <div class="navigation">
      <div class="spanCornerLeft">
        <h1 class="size20" v-on:click="gotoPage('/')"><b>Home</b></h1>
      </div>
      <div class="spanCornerRight">
        <h1 class="size20" v-on:click="refresh()"><b></b>Restart</h1>
      </div>
    </div>
    <!--div class="testingCalculation">
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
          count1: 0,
          count2: 0,
          count3: 0,
          count4: 0,
          turn1: 1,
          turn2: 1,
          turn3: 1,
          turn4: 1,
          isPlay1:true,
          isPlay2:false,
          isPlay3:false,
          isPlay4:false
          //finish1: false
        }
      },
      computed:{

      },
      methods: {
        gotoPage(route) {
          this.$router.push(route);
        },
        refresh(){
          location.reload();
        },
        checkMod(){
          if(this.mod === this.random){
            this.$router.push('/play');
          }else{
          }
        },
        checkModAndFinish(){
          if(this.mod === this.random){
            this.$router.push('/play');
          }else{
              this.$router.push('/game-over');
            /*GameOver*/
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
  .white{
    color:#fff;
  }
  .green{
    color:#4cd964;
  }
  .blue{
    color:#007aff;
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

  .tap2{
    background-color: #007aff;
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
  .tap2:active{
    background-color: #004dff;
    height: 246px;
    width: 246px;
    font-size: 28px;
    padding: 94px 67px;
  }

  .tap3{
    background-color: #ff2d55;
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
  .tap3:active{
    background-color: #ff0055;
    height: 246px;
    width: 246px;
    font-size: 28px;
    padding: 94px 67px;
  }

  .tap4{
    background-color: #ffcc00;
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
  .tap4:active{
    background-color: #ff9f00;
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
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
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
    margin-top: 20px;
  }

</style>
