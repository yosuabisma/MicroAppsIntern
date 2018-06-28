<template>
  <div class="play-page">
    <div  v-if="indexQuest<=20&&showFull===false" class="scoreProc spanCornerRight">
      <h1>{{score}}</h1>
      <h5>/100</h5>
    </div>
    <div v-if="showFull===false&&indexQuest<=20" class="quests">
      <h1>{{indexQuest}} / 20</h1><br/>
      <center>
        <h5>Pemain Olahraga Apakah Ini ?</h5>
        <br/><br/>
        <div class="showQuest">
          <img class="imgAnswer" v-bind:src="'./../src/assets/img/'+questions[randomIndex].text" height="250px"/>
        </div>
      </center>
      <br/><br/>
      <center>
        <div class="answerList">
          <div class="paddingExtra">
            <div v-on:click="checkAnswer(randomIndex, 0);showFull=true;" class="spanCornerLeft answer">
              <center><h1>{{questions[randomIndex].responses[0].text}}</h1></center>
            </div>
          </div>
          <div class="paddingExtra">
            <div v-on:click="checkAnswer(randomIndex, 1);showFull=true;" class="spanCornerRight answer">
              <center><h1>{{questions[randomIndex].responses[1].text}}</h1></center>
            </div>
          </div>
        </div>
      </center>
    </div>

    <div v-if="showFull===true">
      <center>
        <br/><br/><br/>
        <img  v-bind:src="'./../src/assets/img/'+questions[randomIndex].text2" height="350px" width="250px" class="borderShow"/><br/><br/>
        <div v-on:click="randomIndexNext();showFull=false;indexQuest+=1;" class="nextBTN">
            <center><h1>Selanjutnya</h1></center>
        </div>
      </center>
    </div>

    <center>
      <div  v-if="indexQuest>20" class="imgResults">
        <div v-if="score>0&&score<=20">
          <img v-bind:src="'./../src/assets/img/skorIMG/1.gif'" height="160px"/>
        </div>
        <div v-if="score>20&&score<=40">
          <img v-bind:src="'./../src/assets/img/skorIMG/2.gif'" height="160px"/>
        </div>
        <div v-if="score>40&&score<=60">
          <img v-bind:src="'./../src/assets/img/skorIMG/3.gif'" height="160px"/>
        </div>
        <div v-if="score>60&&score<=80">
          <img v-bind:src="'./../src/assets/img/skorIMG/4.gif'" height="160px"/>
        </div>
        <div v-if="score>80&&score<=100">
          <img v-bind:src="'./../src/assets/img/skorIMG/5.gif'" height="160px"/>
        </div>
      </div>
    </center>

    <div class="skorAkhirTitle" v-if="indexQuest>20">
      <center>
        <h1>
          Selesai !
        </h1>
        <h3>Skor Akhir Kamu</h3>
        <div class="skorAkhir">
          <h1>{{score}}</h1>
          <h5>/ 100</h5>
        </div>
      </center>
    </div>

    <div v-if="showFull===false" class="navigation">
      <center>
        <div class="spanCornerLeft">
          <h1 class="size20" v-on:click="gotoPage('/')"><b>Home</b></h1>
        </div>
      </center>
    </div>

  </div>
</template>
<script>
  export default{
    data(){
      return{
        score:0,
        indexQuest:1,
        showFull:false,
        randomIndex:Math.floor(Math.random() * Math.floor(69)),
        questions: [
                    {
                      text: "football-player/Mask Group 1.png",
                      text2: "Bola/Mask Group 1.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 2.png",
                      text2: "Bola/Mask Group 2.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 3.png",
                      text2: "Bola/Mask Group 3.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 4.png",
                      text2: "Bola/Mask Group 4.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 5.png",
                      text2: "Bola/Mask Group 5.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 6.png",
                      text2: "Bola/Mask Group 6.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 7.png",
                      text2: "Bola/Mask Group 7.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 8.png",
                      text2: "Bola/Mask Group 8.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 9.png",
                      text2: "Bola/Mask Group 9.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 10.png",
                      text2: "Bola/Mask Group 10.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 11.png",
                      text2: "Bola/Mask Group 11.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 12.png",
                      text2: "Bola/Mask Group 12.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 13.png",
                      text2: "Bola/Mask Group 13.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 106.png",
                      text2: "Bola/Mask Group 106.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 107.png",
                      text2: "Bola/Mask Group 107.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 108.png",
                      text2: "Bola/Mask Group 108.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 109.png",
                      text2: "Bola/Mask Group 109.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 111.png",
                      text2: "Bola/Mask Group 111.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 112.png",
                      text2: "Bola/Mask Group 112.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 113.png",
                      text2: "Bola/Mask Group 113.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 114.png",
                      text2: "Bola/Mask Group 114.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 115.png",
                      text2: "Bola/Mask Group 115.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 116.png",
                      text2: "Bola/Mask Group 116.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 117.png",
                      text2: "Bola/Mask Group 117.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 118.png",
                      text2: "Bola/Mask Group 118.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 119.png",
                      text2: "Bola/Mask Group 119.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 120.png",
                      text2: "Bola/Mask Group 120.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 121.png",
                      text2: "Bola/Mask Group 121.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 122.png",
                      text2: "Bola/Mask Group 122.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 123.png",
                      text2: "Bola/Mask Group 123.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 124.png",
                      text2: "Bola/Mask Group 124.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 125.png",
                      text2: "Bola/Mask Group 125.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 126.png",
                      text2: "Bola/Mask Group 126.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 127.png",
                      text2: "Bola/Mask Group 127.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 128.png",
                      text2: "Bola/Mask Group 128.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 129.png",
                      text2: "Bola/Mask Group 129.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 130.png",
                      text2: "Bola/Mask Group 130.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 131.png",
                      text2: "Bola/Mask Group 131.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 132.png",
                      text2: "Bola/Mask Group 132.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 133.png",
                      text2: "Bola/Mask Group 133.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 134.png",
                      text2: "Bola/Mask Group 134.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 135.png",
                      text2: "Bola/Mask Group 135.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 140.png",
                      text2: "Bola/Mask Group 140.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 1.png",
                      text2: "Basket/Mask Group 1.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 2.png",
                      text2: "Basket/Mask Group 2.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 3.png",
                      text2: "Basket/Mask Group 3.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 4.png",
                      text2: "Basket/Mask Group 4.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 5.png",
                      text2: "Basket/Mask Group 5.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 6.png",
                      text2: "Basket/Mask Group 6.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 7.png",
                      text2: "Basket/Mask Group 7.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 8.png",
                      text2: "Basket/Mask Group 8.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 9.png",
                      text2: "Basket/Mask Group 9.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 10.png",
                      text2: "Basket/Mask Group 10.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 11.png",
                      text2: "Basket/Mask Group 11.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 12.png",
                      text2: "Basket/Mask Group 12.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 13.png",
                      text2: "Basket/Mask Group 13.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 14.png",
                      text2: "Basket/Mask Group 14.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 15.png",
                      text2: "Basket/Mask Group 15.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 16.png",
                      text2: "Basket/Mask Group 16.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 17.png",
                      text2: "Basket/Mask Group 17.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 18.png",
                      text2: "Basket/Mask Group 18.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 19.png",
                      text2: "Basket/Mask Group 19.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 20.png",
                      text2: "Basket/Mask Group 20.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 21.png",
                      text2: "Basket/Mask Group 21.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 22.png",
                      text2: "Basket/Mask Group 22.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 23.png",
                      text2: "Basket/Mask Group 23.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 24.png",
                      text2: "Basket/Mask Group 24.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 25.png",
                      text2: "Basket/Mask Group 25.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },

                  ], /*20 Pertanyaan*/

      }
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      randomIndexNext(){
        this.randomIndex=Math.floor(Math.random() * Math.floor(69));
      },
      checkAnswer(randomIndex, index){
        if(this.questions[randomIndex].responses[index].correct===true){
          this.score+=5;
        }
      },
      refresh(){
        location.reload();
      }
    }
  }
</script>
<style>
  /*font*/
  .size20{
    font-size: 20px;
  }
  .play-page{
    padding: 30px 30px;
    height: 640px;
    width: 360px;
    cursor:pointer;
    background: linear-gradient(-60deg, #192a56, #192a56, #273c75,#273c75);
    background-size: 400% 400%;
    -webkit-animation: Gradient 2s ease infinite;
    -moz-animation: Gradient 2s ease infinite;
    animation: Gradient 2s ease infinite;
    cursor:pointer;
    color: #fff;
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

  .imgAnswer{
    border: 20px solid  #EE5A24;
    border-radius:100%;
  }
  td{
    padding: 10px 10px;
  }
  .answerList{
    margin-top: 10px;
  }
  .answer{
    width:140px;
    font-size: 10px;
    background-color: #EE5A24;
    padding: 10px 10px;
    border-radius: 100px;
    border: 2px solid #EE5A24;
  }
  .answer:hover{
    background-color: #EE5A24;
    border: 2px solid #fff;
  }
  .paddingExtra{
    padding-right:1px;
    padding-left:1px;
  }
  /*Navigation CSS*/
  .navigation{
    padding: 25px 25px;
    margin-top: 100px;
  }
  .spanCornerLeft{
    float:left;
  }
  .spanCornerRight{
    float:right;
  }
  .scoreProc{
    background-color: #EE5A24;
    padding: 10px 20px;
    margin-top: -30px;
    margin-right: -30px;
  }
  .skorAkhir{
    margin-top: 100px;
    animation-name: stretchSkor;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;
  }
  .skorAkhirTitle{
    margin-top: 20px;
    margin-bottom: 100px;
  }
  @keyframes stretchSkor {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.6);
    }
  }
  .borderShow{
    border: 10px solid #fff;
    animation-name: stretchNXT;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;
  }
  .nextBTN{
    width:140px;
    font-size: 10px;
    background-color: #EE5A24;
    padding: 10px 10px;
    border-radius: 100px;
    border: 2px solid #EE5A24;
  }
  @keyframes stretchNXT {
    0% {
      transform: scale(.8);
    }
    100% {
      transform: scale(1);
    }
  }
  .nextBTN:hover{
    background-color: #EE5A24;
    border: 2px solid #fff;
  }
</style>
