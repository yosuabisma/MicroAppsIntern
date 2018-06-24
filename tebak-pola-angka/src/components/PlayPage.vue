<template>
  <div class="play-page">

    <div v-if="quest1===true" class="quests question-1">
      <h1>Pertanyaan 1</h1><br/>
      <center>
        <div class="showQuest">
          <h3>{{questions[randomIndex].text}}</h3>
        </div>
      </center>
      <div class="answerList">
        <h1>{{questions[randomIndex].responses[0].text}}</h1>
        <h1>{{questions[randomIndex].responses[1].text}}</h1>
        <h1>{{questions[randomIndex].responses[2].text}}</h1>
        <h1>{{questions[randomIndex].responses[3].text}}</h1>
      </div>
      <center>
        <div v-on:click="quest1=false;quest2=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Selanjutnya</b>
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
      <center>
        <div v-on:click="quest2=false;quest3=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Selanjutnya</b>
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
      <center>
        <div v-on:click="quest3=false;quest4=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Selanjutnya</b>
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
      <center>
        <div v-on:click="quest4=false;quest5=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Selanjutnya</b>
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
      <center>
        <div v-on:click="quest5=false;quest6=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Selanjutnya</b>
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
      <center>
        <div v-on:click="quest6=false;quest7=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Selanjutnya</b>
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
      <center>
        <div v-on:click="quest7=false;quest8=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Selanjutnya</b>
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
      <center>
        <div v-on:click="quest8=false;quest9=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Selanjutnya</b>
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
      <center>
        <div v-on:click="quest9=false;quest10=true;">
          <div class="buttonFinishTap" v-on:click="randomIndexNext()">
            <b>Selanjutnya</b>
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
      <center>
        <div v-on:click="quest10=false;isFinish=true;">
          <div class="buttonFinishTap" v-on:click="">
            <b>Selanjutnya</b>
          </div>
        </div>
      </center>
    </div>

    <div v-if="isFinish===true">
      <h3>
      Anda Selesai Menjawab
    </h3>
      <p>

      </p>
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
        //userResponses: Array(quiz.questions.length).fill(false),
        randomIndex:Math.floor(Math.random() * Math.floor(10)),
        questions: [
                    {
                      text: "1, 3, 5, 7, ...",
                      responses: [
                        {text: '8'},
                        {text: '9', correct: true},
                        {text: '10'},
                        {text: '6'},
                      ]
                    },
                    {
                      text: "11, 21, 6, 15, 20, 6, 19, ..., 6",
                      responses: [
                        {text: '19', correct: true},
                        {text: '17'},
                        {text: '6'},
                        {text: '27'},
                      ]
                    },
                    {
                      text: "2, 4, 8, 2, 8, 24, 2, 16, 72, ...",
                      responses: [
                        {text: '8'},
                        {text: '2', correct: true},
                        {text: '16'},
                        {text: '32'},
                      ]
                    },
                    {
                      text: "10, 20, 30, 40, 50, ...",
                      responses: [
                        {text: '60', correct: true},
                        {text: '70'},
                        {text: '55'},
                        {text: '45'},
                      ]
                    },
                    {
                      text: "1, 0, 1, 1, 1, -1, 1, 2, 1, -2, ...",
                      responses: [
                        {text: '0'},
                        {text: '-1'},
                        {text: '-2'},
                        {text: '1', correct: true},
                      ]
                    },
                    {
                      text: "10, 5, 10, 5, ...",
                      responses: [
                        {text: '25'},
                        {text: '20'},
                        {text: '15'},
                        {text: '10', correct: true},
                      ]
                    },
                    {
                      text: "1, 3, 7, 15, 31, ...",
                      responses: [
                        {text: '63', correct: true},
                        {text: '45'},
                        {text: '56'},
                        {text: '62'},
                      ]
                    },
                    {
                      text: "2, 0, 1, 4, 0, 2, 8, ...",
                      responses: [
                        {text: '10'},
                        {text: '4'},
                        {text: '0', correct: true},
                        {text: '2'},
                      ]
                    },
                    {
                      text: "1, 2, 3, 6, 5, 4, 7, 8, ..., 12",
                      responses: [
                        {text: '10'},
                        {text: '9', correct: true},
                        {text: '8'},
                        {text: '11'},
                      ]
                    },
                    {
                      text: "1, 2, 3, 4, 5, 6, 7, ...",
                      responses: [
                        {text: '10'},
                        {text: '8', correct: true},
                        {text: '9'},
                        {text: '11'},
                      ]
                    },

                  ], /*10 Pertanyaan*/

      }
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      randomIndexNext(){
        this.randomIndex=Math.floor(Math.random() * Math.floor(10));
      },
      // Return "true" count in userResponses
      score: function() {
        return this.userResponses.filter(function(val) { return val }).length;
      }
    }
  }
</script>
<style>
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
    margin-top: 50px;
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
</style>
