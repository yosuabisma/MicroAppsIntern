<template>
  <div class="mainDiv-truth-or-dare">
    <center>
      <div v-if="isTruth===false&&isDare===false" class="selectTruthDare">
        <div class="buttonTruth" v-on:click="isTruth=true">
          <center><b>Truth</b></center>
        </div>
        <center><h1 class="size42" style="padding:30px 30px;">or</h1></center>
        <div class="buttonDare" v-on:click="isDare=true">
          <center><b>Dare</b></center>
        </div>
      </div>
      <div v-if="isTruth===true" class="truthDiv">
        <center>
          <div class="truthDareTitle">
            Truth
          </div>
        </center>
        <div class="stabilizerTOD">
          {{truthList[randomIndexTruth].message}}
        </div>
        <div class="navigationTruthDare">
          <div class="spanCornerLeft">
            <h1 class="size20" v-on:click="gotoPage('/')"><b>Home</b></h1>
          </div>
          <div class="spanCornerRight">
            <h1 class="size20" v-on:click="gotoPage('/play')"><b></b>Play Again</h1>
          </div>
        </div>
      </div>
      <div v-if="isDare===true" class="dareDiv">
        <center>
          <div class="truthDareTitle">
            Dare
          </div>
        </center>
        <div class="stabilizerTOD">
          {{dareList[randomIndexDare].message}}
        </div>
        <div class="navigationTruthDare">
          <div class="spanCornerLeft">
            <h1 class="size20" v-on:click="gotoPage('/')"><b>Home</b></h1>
          </div>
          <div class="spanCornerRight">
            <h1 class="size20" v-on:click="gotoPage('/play')"><b></b>Play Again</h1>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>
<script>
  export default {
      data(){
        return{
          isTruth:false,
          isDare:false,
          randomIndexTruth:Math.floor(Math.random() * Math.floor(10)),
          randomIndexDare:Math.floor(Math.random() * Math.floor(10)),
          truthList : [
            {message: 'What was the last thing you searched for on your phone?'},
            {message: 'Do you still enjoy Spongebob Squarepants?'},
            {message: 'Have you ever cheated on a test?'},
            {message: 'Have you had your first kiss?'},
            {message: 'When was the last time you cleaned your room?'},
            {message: 'Do you keep a diary/journal?'},
            {message: 'Have you ever lied to us?'},
            {message: 'What would you do with USD 1,000?'},
            {message: 'Are you afraid of the dark?'},
            {message: 'Have you ever peed in a pool?'} /*10*/
          ],
          dareList : [
            {message: 'Dance with no music for 1 minute.'},
            {message: 'Attempt to do 10 pushups.'},
            {message: 'Do your best lion roar.'},
            {message: 'Prank call your bestfriend.'},
            {message: 'Make a really silly face and take a selfie.'},
            {message: 'Take a selfie and post it in Instagram Story'},
            {message: 'Act like a monkey.'},
            {message: 'Text someone using only your nose.'},
            {message: 'Do the chicken dance.'},
            {message: 'Draw a mustache on yourself without a mirror.'} /*10*/
          ]
        }
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
    font-size:72px;
  }
  .size42{
    font-size: 42px;
  }
  .size20{
    font-size: 20px;
  }
  .mainDiv-truth-or-dare{
    height: 640px;
    width: 360px;
  }
  .selectTruthDare{
    background-color: #fff;
  }
  /*Button Truth or Dare*/
  .buttonTruth{
    color:#fff;
    font-size:72px;
    background-color: #5856ff;
    border-radius:8px;
    padding: 60px 60px;
    height: 181px;
    width: 300px;
    margin-top: 48px;
    animation-name: stretchTruth;
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
  .buttonDare{
    color:#fff;
    font-size:72px;
    background-color: #ff2d55;
    border-radius:8px;
    padding: 60px 60px;
    height: 181px;
    width: 300px;
    animation-name: stretchDare;
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

  @keyframes stretchTruth {
    0% {
      transform: scale(.8);
    }
    50% {
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes stretchDare {
    0% {
      transform: scale(1);
    }
    50% {
    }
    100% {
      transform: scale(.8);
    }
  }
  /*truthDareTitle*/
  .truthDareTitle{
    background-color: #fff;
    color:black;
    font-size: 24px;
    padding: 4px 16px;
    border-radius: 8px;
    font-weight: bold;
    width:94px;
    height: 38px;
    margin-top: 200px;
  }


  /*Truth Div*/
  .truthDiv{
    background-color: #5856ff;
    color: #fff;
    height: 640px;
    width: 360px;
    padding: 30px 30px;
  }
  .dareDiv{
    background-color: #ff2d55;
    color: #fff;
    height: 640px;
    width: 360px;
    padding: 30px 30px;
  }



  /*Dare Div*/


  /*Navigation CSS*/
  .navigationTruthDare{
    padding: 25px 25px;
    margin-top: 150px;
    color:#fff;
  }
  .spanCornerLeft{
    float: left;
  }
  .spanCornerRight{
    float: right;
  }
  .stabilizerTOD{
    margin-top: 36px;
    height: 100px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
  }

</style>
