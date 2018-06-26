<template>
  <div class="play-page">
    <div  v-if="indexQuest<=20" class="scoreProc spanCornerRight">
      <h1>{{score}}</h1>
      <h5>/100</h5>
    </div>
    <div v-if="indexQuest<=20" class="quests">
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
            <div v-on:click="checkAnswer(randomIndex, 0);indexQuest+=1;randomIndexNext();" class="spanCornerLeft answer">
              <center><h1>{{questions[randomIndex].responses[0].text}}</h1></center>
            </div>
          </div>
          <div class="paddingExtra">
            <div v-on:click="checkAnswer(randomIndex, 1);indexQuest+=1;randomIndexNext();" class="spanCornerRight answer">
              <center><h1>{{questions[randomIndex].responses[1].text}}</h1></center>
            </div>
          </div>
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

    <div class="navigation">
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
        randomIndex:Math.floor(Math.random() * Math.floor(98)),
        questions: [
                    {
                      text: "football-player/Mask Group 1.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 2.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 3.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 4.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 5.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 6.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 7.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 8.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 9.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 10.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 11.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 12.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 13.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 14.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 15.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 16.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 17.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 18.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 19.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 20.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 22.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 23.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 25.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 26.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 27.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 29.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 30.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 31.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 32.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 33.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 35.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 36.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 37.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 38.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 39.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 41.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 42.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 43.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 45.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 47.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 48.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 49.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 50.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 51.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 53.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 54.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 55.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 56.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 57.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 59.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 60.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 61.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 62.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 63.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 65.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 66.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 67.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 68.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 69.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 71.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 72.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 73.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 74.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 75.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 77.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 78.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 79.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 80.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 81.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 83.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 86.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 89.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "football-player/Mask Group 92.png",
                      responses: [
                        {text: 'Basket', correct: false},
                        {text: 'Sepak Bola', correct: true},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 1.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 2.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 3.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 4.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 5.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 6.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 7.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 8.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 9.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 10.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 11.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 12.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 13.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 14.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 15.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 16.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 17.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 18.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 19.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 20.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 21.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 22.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 23.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 24.png",
                      responses: [
                        {text: 'Basket', correct: true},
                        {text: 'Sepak Bola', correct: false},
                      ]
                    },
                    {
                      text: "basket-player/Mask Group 25.png",
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
        this.randomIndex=Math.floor(Math.random() * Math.floor(98));
      },
      checkAnswer(randomIndex, index){
        if(this.questions[randomIndex].responses[index].correct===true){
          this.score+=5;
          //this.randomIndex=Math.floor(Math.random() * Math.floor(10));
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

  /*.showQuest{
    margin-top: 20px;
    font-size: 18px;
    background: linear-gradient(-60deg, #a57031, #dca24e, #dca24e,#46210e);
    border-radius: 10px;
    padding: 20px 20px;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    height: 280px;
    width: 270px;
    border: 5px solid  #eccc68;
    color: #46210e;
  }*/
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
</style>
