<template>
  <div class="play-page">
    <div  v-if="isFinish===false" class="scoreProc spanCornerRight">
      <h1>{{score}}</h1>
      <h5>/100</h5>
    </div>
    <div v-if="quest1===true" class="quests question-1">
      <h1>Pertanyaan 1</h1><br/>
      <center>
        <div class="showQuest">
          <!-- <h3>{{questions[randomIndex].text}}</h3> -->
          <img v-attr="src: questions[randomIndex].link"/>
        </div>
      </center>
      <br/><br/>
      <center>
        <div class="answerList">
          <table>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 0);quest1=false;quest2=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[0].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 1);quest1=false;quest2=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[1].text}}</h1></center>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </center>
      <center>
        <div v-on:click="quest1=false;quest2=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Lewati</b>
          </div>
        </div>
      </center>
    </div>

    <div v-if="quest2===true" class="quests question-2">
      <h1>Pertanyaan 2</h1><br/>
      <center>
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
                <div v-on:click="checkAnswer(randomIndex, 0);quest2=false;quest3=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[0].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 1);quest2=false;quest3=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[1].text}}</h1></center>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 2);quest2=false;quest3=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[2].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 3);quest2=false;quest3=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[3].text}}</h1></center>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </center>
      <center>
        <div v-on:click="quest2=false;quest3=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Lewati</b>
          </div>
        </div>
      </center>
    </div>

    <div v-if="quest3===true" class="quests question-3">
      <h1>Pertanyaan 3</h1><br/>
      <center>
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
                <div v-on:click="checkAnswer(randomIndex, 0);quest3=false;quest4=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[0].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 1);quest3=false;quest4=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[1].text}}</h1></center>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 2);quest3=false;quest4=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[2].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 3);quest3=false;quest4=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[3].text}}</h1></center>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </center>
      <center>
        <div v-on:click="quest3=false;quest4=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Lewati</b>
          </div>
        </div>
      </center>
    </div>

    <div v-if="quest4===true" class="quests question-4">
      <h1>Pertanyaan 4</h1><br/>
      <center>
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
                <div v-on:click="checkAnswer(randomIndex, 0);quest4=false;quest5=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[0].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 1);quest4=false;quest5=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[1].text}}</h1></center>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 2);quest4=false;quest5=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[2].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 3);quest4=false;quest5=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[3].text}}</h1></center>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </center>
      <center>
        <div v-on:click="quest4=false;quest5=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Lewati</b>
          </div>
        </div>
      </center>
    </div>

    <div v-if="quest5===true" class="quests question-5">
      <h1>Pertanyaan 5</h1><br/>
      <center>
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
                <div v-on:click="checkAnswer(randomIndex, 0);quest5=false;quest6=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[0].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 1);quest5=false;quest6=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[1].text}}</h1></center>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 2);quest5=false;quest6=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[2].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 3);quest5=false;quest6=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[3].text}}</h1></center>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </center>
      <center>
        <div v-on:click="quest5=false;quest6=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Lewati</b>
          </div>
        </div>
      </center>
    </div>

    <div v-if="quest6===true" class="quests question-6">
      <h1>Pertanyaan 6</h1><br/>
      <center>
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
                <div v-on:click="checkAnswer(randomIndex, 0);quest6=false;quest7=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[0].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 1);quest6=false;quest7=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[1].text}}</h1></center>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 2);quest6=false;quest7=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[2].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 3);quest6=false;quest7=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[3].text}}</h1></center>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </center>
      <center>
        <div v-on:click="quest6=false;quest7=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Lewati</b>
          </div>
        </div>
      </center>
    </div>

    <div v-if="quest7===true" class="quests question-7">
      <h1>Pertanyaan 7</h1><br/>
      <center>
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
                <div v-on:click="checkAnswer(randomIndex, 0);quest7=false;quest8=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[0].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 1);quest7=false;quest8=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[1].text}}</h1></center>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 2);quest7=false;quest8=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[2].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 3);quest7=false;quest8=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[3].text}}</h1></center>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </center>
      <center>
        <div v-on:click="quest7=false;quest8=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Lewati</b>
          </div>
        </div>
      </center>
    </div>

    <div v-if="quest8===true" class="quests question-8">
      <h1>Pertanyaan 8</h1><br/>
      <center>
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
                <div v-on:click="checkAnswer(randomIndex, 0);quest8=false;quest9=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[0].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 1);quest8=false;quest9=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[1].text}}</h1></center>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 2);quest8=false;quest9=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[2].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 3);quest8=false;quest9=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[3].text}}</h1></center>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </center>
      <center>
        <div v-on:click="quest8=false;quest9=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Lewati</b>
          </div>
        </div>
      </center>
    </div>

    <div v-if="quest9===true" class="quests question-9">
      <h1>Pertanyaan 9</h1><br/>
      <center>
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
                <div v-on:click="checkAnswer(randomIndex, 0);quest9=false;quest10=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[0].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 1);quest9=false;quest10=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[1].text}}</h1></center>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 2);quest9=false;quest10=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[2].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 3);quest9=false;quest10=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[3].text}}</h1></center>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </center>
      <center>
        <div v-on:click="quest9=false;quest10=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Lewati</b>
          </div>
        </div>
      </center>
    </div>

    <div v-if="quest10===true" class="quests question-9">
      <h1>Pertanyaan 10</h1><br/>
      <center>
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
                <div v-on:click="checkAnswer(randomIndex, 0);quest10=false;isFinish=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[0].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 1);quest10=false;isFinish=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[1].text}}</h1></center>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 2);quest10=false;isFinish=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[2].text}}</h1></center>
                </div>
              </td>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 3);quest10=false;isFinish=true;randomIndexNext();" class="answer">
                  <center><h1>{{questions[randomIndex].responses[3].text}}</h1></center>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </center>
      <center>
        <div v-on:click="quest10=false;isFinish=true;">
          <div class="buttonFinishTap" v-on:click="">
            <b>Lewati</b>
          </div>
        </div>
      </center>
    </div>


    <div class="skorAkhirTitle" v-if="isFinish===true">
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
      <div class="spanCornerRight">
        <h1 class="size20" v-on:click="refresh()"><b></b>Restart</h1>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        score:0,
        quest1:true,
        quest2:false,
        quest3:false,
        quest4:false,
        quest5:false,
        quest6:false,
        quest7:false,
        quest8:false,
        quest9:false,
        quest10:false,
        isFinish:false,
        randomIndex:Math.floor(Math.random() * Math.floor(20)),
        questions: [
                    {
                      text: "1, 3, 5, 7, ...",
                      responses: [
                        {text: '8', correct: false},
                        {text: '6', correct: false}
                      ]
                    },
                    {
                      text: "11, 21, 6, 15, 20, 6, 19, ..., 6",
                      responses: [
                        {text: '19', correct: true},
                        {text: '27', correct: false}
                      ]
                    },
                    {
                      text: "2, 4, 8, 2, 8, 24, 2, 16, 72, ...",
                      responses: [
                        {text: '8', correct: false},
                        {text: '32', correct: false}
                      ]
                    },
                    {
                      text: "10, 20, 30, 40, 50, ...",
                      responses: [
                        {text: '60', correct: true},
                        {text: '45', correct: false}
                      ]
                    },
                    {
                      text: "1, 0, 1, 1, 1, -1, 1, 2, 1, -2, ...",
                      responses: [
                        {text: '0', correct: false},
                        {text: '1', correct: true}
                      ]
                    },
                    {
                      text: "10, 5, 10, 5, ...",
                      responses: [
                        {text: '25', correct: false},
                        {text: '10', correct: true}
                      ]
                    },
                    {
                      text: "1, 3, 7, 15, 31, ...",
                      responses: [
                        {text: '63', correct: true},
                        {text: '62', correct: false}
                      ]
                    },
                    {
                      text: "2, 0, 1, 4, 0, 2, 8, ...",
                      responses: [
                        {text: '10', correct: false},
                        {text: '2', correct: false}
                      ]
                    },
                    {
                      text: "1, 2, 3, 6, 5, 4, 7, 8, ..., 12",
                      responses: [
                        {text: '10', correct: false},
                        {text: '11', correct: false}
                      ]
                    },
                    {
                      text: "50, 40, 100, 90, ..., 140, 200, 190.",
                      responses: [
                        {text: '140', correct: false},
                        {text: '120', correct: false}
                      ]
                    },
                    {
                      text: "2, 4, 6, 9, 11, 13, 16, ...",
                      responses: [
                        {text: '22', correct: false},
                        {text: '17', correct: false}
                      ]
                    },
                    {
                      text: "3, 8, 13, 18, 23, ...",
                      responses: [
                        {text: '23', correct: false},
                        {text: '28', correct: true}
                      ]
                    },
                    {
                      text: "1, 2, 3, 4, 5, 6, 7, ...",
                      responses: [
                        {text: '10', correct: false},
                        {text: '11', correct: false}
                      ]
                    },
                    {
                      text: "2, 4, 4, 7, 8, 10, ...",
                      responses: [
                        {text: '16', correct: true},
                        {text: '11', correct: false}
                      ]
                    },
                    {
                      text: "1, 3, 9, ...",
                      responses: [
                        {text: '27', correct: true},
                        {text: '18', correct: false},
                      ]
                    },
                    {
                      text: "0, 0, 0, ...",
                      responses: [
                        {text: '0', correct: true},
                        {text: '-1', correct: false},
                      ]
                    },
                    {
                      text: "-1, 0, -1, ...",
                      responses: [
                        {text: '1', correct: false},
                        {text: '-11', correct: false},
                      ]
                    },
                    {
                      text: "4, 5, 7, 10, 14, 19, ...",
                      responses: [
                        {text: '25', correct: true},
                        {text: '24', correct: false},
                      ]
                    },
                    {
                      text: "5, 7, ..., 49, 500, 343, 5000",
                      responses: [
                        {text: '63', correct: false},                        {text: '150', correct: false},
                      ]
                    },
                    {
                      text: "6, 8, 10, 11, 14, 14, ...",
                      responses: [
                        {text: '18', correct: true},
                        {text: '12', correct: false},
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
        this.randomIndex=Math.floor(Math.random() * Math.floor(20));
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
  .answer{
    width:130px;
    background-color: #1dd1a1;
    padding: 10px 40px;
    border-radius: 8px;
    border: 2px solid #1dd1a1;
  }
  .answer:hover{
    background-color: #10ac84;
    border: 2px solid #fff;
  }
  /*Navigation CSS*/
  .navigation{
    padding: 25px 25px;
    margin-top: 20px;
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
    margin-top: 100px;
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
