<template>
  <div class="problem">
    <div v-if="isCorrect" class="notif" id="correct">
      <center>
        <img src="./../assets/correct.png" class="notif-pic" />
      </center>
    </div>
    <div v-if="isWrong" class="notif" id="wrong">
      <center>
        <img src="./../assets/wrong.png" class="notif-pic" />
      </center>
    </div>
    <b-container fluid class="probs">
      <b-row>
        <div  v-if="indexQuest<=10" class="scoreProc spanCornerRight">
          <h1>{{score}}</h1>
          <h5>/100</h5>
        </div>
      </b-row>
      <b-row>
        <center>
          <div class="problem-set">
            <center>
            <h1 class="size56">{{ proset1 }} + ... = {{ proset2 }}</h1>
            </center>
          </div>
        </center>
      </b-row>
      <b-row>
        <b-col md="6">
          <div class="answers"  v-on:click="checkAnswer(1)">
            <center>
            <h1 class="size56" ref="val1">{{  generateAnswers[0] }}</h1>
            </center>
          </div>
        </b-col>
        <b-col md="6">
          <div class="answers" v-on:click="checkAnswer(2)">
            <center>
            <h1 class="size56" ref="val2">{{  generateAnswers[1] }}</h1>
            </center>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <div class="answers"  v-on:click="checkAnswer(3)">
            <center>
            <h1 class="size56" ref="val3">{{  generateAnswers[2] }}</h1>
            </center>
          </div>
        </b-col>
        <b-col md="6">
          <div class="answers"  v-on:click="checkAnswer(4)">
            <center>
            <h1 class="size56" ref="val4">{{  generateAnswers[3] }}</h1>
            </center>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
  import bContainer from 'bootstrap-vue/es/components/layout/container';
  import bRow from 'bootstrap-vue/es/components/layout/row';
  import bCol from 'bootstrap-vue/es/components/layout/col';
  import shuffle from 'shuffle-array';

  export default {
    data() {
      return {
        proset1: Math.floor(Math.random() * Math.floor(100)),
        proset2: Math.floor(Math.random() * Math.floor(100)),
        indexQuest: 1,
        showResult: false,
        isCorrect: false,
        isWrong: false,
        tries: 1
      }
    },

    components: {
      'b-container': bContainer,
      'b-row': bRow,
      'b-col': bCol,
      'shuffle': shuffle
    },

    computed: {
      generateAnswers() {
        var answers = new Array();
        for (var i = 0; i < 4; i++) {
          answers[i] = (this.proset2 - this.proset1) - i;
        }
        shuffle(answers);
        return answers;
      }
    },

    methods: {
      checkAnswer(value) {
        var y = 'val' + value;
        var x = parseInt(this.$refs[y].innerHTML);
        var pros1 = parseInt(this.proset1);
        var pros2 = parseInt(this.proset2);
        if (pros1 + x === pros2) {
          this.proset1 = Math.floor(Math.random() * Math.floor(100));
          this.proset2 = Math.floor(Math.random() * Math.floor(100));
        } else {
          this.proset1 = Math.floor(Math.random() * Math.floor(100));
          this.proset2 = Math.floor(Math.random() * Math.floor(100));
        }
      }
    }
  }
</script>

<style>
  .problem {
    width: 360px;
    height: 640px;
    padding-top: 60px;
    background-image: url('./../assets/mosaic.jpg');
    background-size: cover;
  }

  .notif {
    display: block;
    width: 360px;
    height: 640px;
    opacity: 0.5;
  }

  .notif img {
    margin-top: 310px;
    margin-bottom: 310px;
    width: 120px;
    height: 120px;
  }

  .spanCornerRight{
    float:right;
  }
  .scoreProc{
    background-color: #cc2444;
    padding: 10px 20px;
    margin-top: -60px;
    /* margin-right: -30px; */
  }
  /* .probs {
    margin-top: 50px;
  } */
  /* b-row {
    margin-top: 30px;
  } */
  .problem-set {
    width: 335px;
    height: 120px;
    border-width: 6px;
    border-style: solid;
    border-color: white;
    border-radius: 5px;
    background-color: #43a538;
  }

  .answers {
    width: 120px;
    height: 120px;
    border-width: 6px;
    border-style: solid;
    border-color: white;
    border-radius: 5px;
    background-color: #43a538;
    float: left;
    margin: 30px;
  }

  div h1 {
    color: white;
    margin-top: 20px;
  }

  .size56 {
    font-size: 56px;
  }


</style>
