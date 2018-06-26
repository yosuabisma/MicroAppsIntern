<template>
  <div class="play-page">
    <div  v-if="indexQuest<=10" class="scoreProc spanCornerRight">
      <h1>{{score}}</h1>
      <h5>/100</h5>
    </div>
    <div v-if="indexQuest<=10" class="quests">
      <h1>{{indexQuest}}/10</h1><br/>
      <center>
        <h4>Lengkapi pola angka berikut ini</h4>
        <div class="showQuest">
          <h3>{{questions[randomIndex].text}}</h3>
        </div>
      </center>
      <br/><br/>
      <center>
        <div class="answerList">
          <table>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 0);indexQuest+=1;randomIndexNext();" class="answerA">
                  <center><h1>{{questions[randomIndex].responses[0].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 1);indexQuest+=1;randomIndexNext();" class="answerB">
                  <center><h1>{{questions[randomIndex].responses[1].text}}</h1></center>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 2);indexQuest+=1;randomIndexNext();" class="answerC">
                  <center><h1>{{questions[randomIndex].responses[2].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 3);indexQuest+=1;randomIndexNext();" class="answerD">
                  <center><h1>{{questions[randomIndex].responses[3].text}}</h1></center>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </div>

    <center>
      <div  v-if="indexQuest>10" class="imgResults">
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

    <div class="skorAkhirTitle" v-if="indexQuest>10">
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
      <div class="spanCornerLeft">
        <h1 class="size20" v-on:click="gotoPage('/')"><b>Home</b></h1>
      </div>
    </div>

  </div>
</template>
<script>
  export default{
    data(){
      return{
        score:0,
        indexQuest:1,
        randomIndex:Math.floor(Math.random() * Math.floor(38)),
        questions: [
                    {
                      text: "1, 3, 5, 7, ...",
                      responses: [
                        {text: '8', correct: false},
                        {text: '9', correct: true},
                        {text: '10', correct: false},
                        {text: '6', correct: false},
                      ]
                    },
                    {
                      text: "11, 21, 6, 15, 20, 6, 19, ..., 6",
                      responses: [
                        {text: '19', correct: true},
                        {text: '17', correct: false},
                        {text: '6', correct: false},
                        {text: '27', correct: false},
                      ]
                    },
                    {
                      text: "2, 4, 8, 2, 8, 24, 2, 16, 72, ...",
                      responses: [
                        {text: '8', correct: false},
                        {text: '2', correct: true},
                        {text: '16', correct: false},
                        {text: '32', correct: false},
                      ]
                    },
                    {
                      text: "10, 20, 30, 40, 50, ...",
                      responses: [
                        {text: '60', correct: true},
                        {text: '70', correct: false},
                        {text: '55', correct: false},
                        {text: '45', correct: false},
                      ]
                    },
                    {
                      text: "99, 1, 98, 2, 97, 3, 96, ...",
                      responses: [
                        {text: '8', correct: false},
                        {text: '6', correct: false},
                        {text: '5', correct: false},
                        {text: '4', correct: true},
                      ]
                    },
                    {
                      text: "10, 5, 10, 5, ...",
                      responses: [
                        {text: '25', correct: false},
                        {text: '20', correct: false},
                        {text: '15', correct: false},
                        {text: '10', correct: true},
                      ]
                    },
                    {
                      text: "1, 3, 7, 15, 31, ...",
                      responses: [
                        {text: '63', correct: true},
                        {text: '45', correct: false},
                        {text: '56', correct: false},
                        {text: '62', correct: false},
                      ]
                    },
                    {
                      text: "2, 0, 1, 4, 0, 2, 8, ...",
                      responses: [
                        {text: '10', correct: false},
                        {text: '4', correct: false},
                        {text: '0', correct: true},
                        {text: '2', correct: false},
                      ]
                    },
                    {
                      text: "1, 2, 3, 6, 5, 4, 7, 8, ..., 12",
                      responses: [
                        {text: '10', correct: false},
                        {text: '9', correct: true},
                        {text: '8', correct: false},
                        {text: '11', correct: false},
                      ]
                    },
                    {
                      text: "50, 40, 100, 90, ..., 140, 200, 190",
                      responses: [
                        {text: '140', correct: false},
                        {text: '150', correct: true},
                        {text: '160', correct: false},
                        {text: '120', correct: false},
                      ]
                    },
                    {
                      text: "2, 4, 6, 9, 11, 13, 16, ...",
                      responses: [
                        {text: '22', correct: false},
                        {text: '20', correct: false},
                        {text: '18', correct: true},
                        {text: '17', correct: false},
                      ]
                    },
                    {
                      text: "3, 8, 13, 18, 23, ...",
                      responses: [
                        {text: '23', correct: false},
                        {text: '33', correct: false},
                        {text: '38', correct: false},
                        {text: '28', correct: true},
                      ]
                    },
                    {
                      text: "1, 2, 3, 4, 5, 6, 7, ...",
                      responses: [
                        {text: '10', correct: false},
                        {text: '8', correct: true},
                        {text: '9', correct: false},
                        {text: '11', correct: false},
                      ]
                    },
                    {
                      text: "2, 4, 4, 7, 8, 10, ...",
                      responses: [
                        {text: '16', correct: true},
                        {text: '13', correct: false},
                        {text: '15', correct: false},
                        {text: '11', correct: false},
                      ]
                    },
                    {
                      text: "1, 3, 9, ...",
                      responses: [
                        {text: '27', correct: true},
                        {text: '36', correct: false},
                        {text: '45', correct: false},
                        {text: '18', correct: false},
                      ]
                    },
                    {
                      text: "0, 0, 0, ...",
                      responses: [
                        {text: '0', correct: true},
                        {text: '1', correct: false},
                        {text: '2', correct: false},
                        {text: '-1', correct: false},
                      ]
                    },
                    {
                      text: "-1, 0, -1, ...",
                      responses: [
                        {text: '1', correct: false},
                        {text: '0', correct: true},
                        {text: '-1', correct: false},
                        {text: '-11', correct: false},
                      ]
                    },
                    {
                      text: "4, 5, 7, 10, 14, 19, ...",
                      responses: [
                        {text: '25', correct: true},
                        {text: '20', correct: false},
                        {text: '23', correct: false},
                        {text: '24', correct: false},
                      ]
                    },
                    {
                      text: "5, 7, ..., 49, 500, 343, 5000",
                      responses: [
                        {text: '63', correct: false},
                        {text: '25', correct: false},
                        {text: '50', correct: true},
                        {text: '150', correct: false},
                      ]
                    },
                    {
                      text: "6, 8, 10, 11, 14, 14, ...",
                      responses: [
                        {text: '18', correct: true},
                        {text: '14', correct: false},
                        {text: '16', correct: false},
                        {text: '12', correct: false},
                      ]
                    },
                    {
                      text: "8, 10, 11, 14, 14, 18, 17, ...",
                      responses: [
                        {text: '22', correct: true},
                        {text: '14', correct: false},
                        {text: '18', correct: false},
                        {text: '19', correct: false},
                      ]
                    },
                    {
                      text: "9, 3, 10, 3, 11, 3, 12, ...",
                      responses: [
                        {text: '10', correct: false},
                        {text: '4', correct: false},
                        {text: '3', correct: true},
                        {text: '13', correct: false},
                      ]
                    },
                    {
                      text: "0, 1, 6, 3, 4, 9, 6, ...",
                      responses: [
                        {text: '3', correct: false},
                        {text: '6', correct: false},
                        {text: '7', correct: true},
                        {text: '8', correct: false},
                      ]
                    },
                    {
                      text: "2, 20, ..., 2000",
                      responses: [
                        {text: '100', correct: false},
                        {text: '200', correct: true},
                        {text: '50', correct: false},
                        {text: '300', correct: false},
                      ]
                    },
                    {
                      text: "10, 5, 15, ..., 22.5, 11.25",
                      responses: [
                        {text: '10', correct: false},
                        {text: '7.5', correct: true},
                        {text: '6.5', correct: false},
                        {text: '15', correct: false},
                      ]
                    },
                    {
                      text: "1, 3, 9, 27, ...",
                      responses: [
                        {text: '36', correct: false},
                        {text: '45', correct: false},
                        {text: '81', correct: true},
                        {text: '54', correct: false},
                      ]
                    },
                    {
                      text: "1, 3, 6, 10, 15, ...",
                      responses: [
                        {text: '25', correct: false},
                        {text: '20', correct: false},
                        {text: '21', correct: true},
                        {text: '18', correct: false},
                      ]
                    },
                    {
                      text: "0, 7, 15, 24, 34, ...",
                      responses: [
                        {text: '43', correct: false},
                        {text: '44', correct: false},
                        {text: '40', correct: false},
                        {text: '45', correct: true},
                      ]
                    },
                    {
                      text: "0, 1, 2, 3, 6, 7, 14, 15, ...",
                      responses: [
                        {text: '27', correct: false},
                        {text: '16', correct: false},
                        {text: '20', correct: false},
                        {text: '30', correct: true},
                      ]
                    },
                    {
                      text: "3, 4, 6, 8, 12, 16, ...",
                      responses: [
                        {text: '48', correct: false},
                        {text: '36', correct: false},
                        {text: '18', correct: false},
                        {text: '24', correct: true},
                      ]
                    },
                    {
                      text: "4, 16, 5, 25, 6, 36, 7, ...",
                      responses: [
                        {text: '46', correct: false},
                        {text: '8', correct: false},
                        {text: '45', correct: false},
                        {text: '49', correct: true},
                      ]
                    },
                    {
                      text: "69, 23, 92, ..., 110.4",
                      responses: [
                        {text: '17', correct: false},
                        {text: '24', correct: false},
                        {text: '55', correct: false},
                        {text: '18.4', correct: true},
                      ]
                    },
                    {
                      text: "11, ..., 1001, 10001, 100001",
                      responses: [
                        {text: '101', correct: true},
                        {text: '111', correct: false},
                        {text: '112', correct: false},
                        {text: '1', correct: false},
                      ]
                    },
                    {
                      text: "105, 35, 36, 12, ...",
                      responses: [
                        {text: '13', correct: true},
                        {text: '103', correct: false},
                        {text: '18', correct: false},
                        {text: '6', correct: false},
                      ]
                    },
                    {
                      text: "321, 456, 987, 123, 654, ...",
                      responses: [
                        {text: '789', correct: true},
                        {text: '897', correct: false},
                        {text: '456', correct: false},
                        {text: '988', correct: false},
                      ]
                    },
                    {
                      text: "14, 7, 15, 45, 16, 8, 17, ...",
                      responses: [
                        {text: '51', correct: true},
                        {text: '34', correct: false},
                        {text: '8.5', correct: false},
                        {text: '8', correct: false},
                      ]
                    },
                    {
                      text: "101, 102, 103, 301, 201, ...",
                      responses: [
                        {text: '101', correct: true},
                        {text: '301', correct: false},
                        {text: '102', correct: false},
                        {text: '103', correct: false},
                      ]
                    },
                    {
                      text: "11, 22, 33, 11, 33, 44, 11, ..., 55",
                      responses: [
                        {text: '44', correct: true},
                        {text: '33', correct: false},
                        {text: '22', correct: false},
                        {text: '11', correct: false},
                      ]
                    },

                  ], /*38 Pertanyaan*/

      }
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      randomIndexNext(){
        this.randomIndex=Math.floor(Math.random() * Math.floor(38));
      },
      checkAnswer(randomIndex, index){
        if(this.questions[randomIndex].responses[index].correct===true){
          this.score+=10;
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
    background-color: #16a085;
    color: #fff;
  }
  .buttonFinishTap{
    color:#fff;
    font-size:36px;
    background-color: #cc2444;
    border-radius:8px;
    padding: 6px 6px;
    margin-top: 20px;
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
  .showQuest{
    margin-top: 20px;
    font-size: 18px;
    background-color: #d5f5e3;
    border-radius: 10px;
    padding: 20px 20px;
    height: 90px;
    color: #186a3b;
  }
  td{
    padding: 10px 10px;
  }
  tr{
    padding: 5px 5px;
  }
  .answerA{
    width:130px;
    background-color: #2980b9;
    padding: 10px 40px;
    border-radius: 8px;
    border: 2px solid #2980b9;
  }
  .answerA:hover{
    border: 2px solid #fff;
  }
  .answerB{
    width:130px;
    background-color: #f1c40f;
    padding: 10px 40px;
    border-radius: 8px;
    border: 2px solid #f1c40f;
  }
  .answerB:hover{
    border: 2px solid #fff;
  }
  .answerC{
    width:130px;
    background-color: #1dd1a1;
    padding: 10px 40px;
    border-radius: 8px;
    border: 2px solid #1dd1a1;
  }
  .answerC:hover{
    border: 2px solid #fff;
  }
  .answerD{
    width:130px;
    background-color: #e74c3c;
    padding: 10px 40px;
    border-radius: 8px;
    border: 2px solid #e74c3c;
  }
  .answerD:hover{
    border: 2px solid #fff;
  }
  /*Navigation CSS*/
  .navigation{
    padding: 25px 25px;
    margin-top: 80px;
  }
  .spanCornerLeft{
    float:left;
  }
  .spanCornerRight{
    float:right;
  }
  .scoreProc{
    background-color: #cc2444;
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
