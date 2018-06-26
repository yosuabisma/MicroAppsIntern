<template>
  <div class="play-page">

    <div  v-if="indexQuest<=10" class="scoreProc spanCornerRight">
      <h1>{{score}}</h1>
      <h5>/100</h5>
    </div>
    <div v-if="indexQuest<=10" class="quests">
      <h1>{{indexQuest}}/10</h1><br/>
      <center>
        <div class="showQuest">
          <h3>{{questions[randomIndex].text}}</h3>
        </div>
      </center>
      <center>
        <div v-if="bantuan<=3&&bantuan>=0">
          <div class="btnPetunjuk" v-on:click="bantuan-=1;showBantu=true;">
            <h6>Tampilkan Petunjuk ({{bantuan}} Kesempatan)</h6>
            <div class="yellow" v-if="showBantu===true">
              <h4>{{questions[randomIndex].petunjuk}}</h4>
            </div>
          </div>
        </div>
      </center>
      <br/><br/>
      <center>
        <div class="answerList">
          <h5>Pilihan Jawaban</h5>
          <table>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 0);indexQuest+=1;randomIndexNext();showBantu=false;" class="answer">
                  <center><h3>{{questions[randomIndex].responses[0].text}}</h3></center>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, 1);indexQuest+=1;randomIndexNext();showBantu=false;" class="answer">
                  <center><h3>{{questions[randomIndex].responses[1].text}}</h3></center>
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
        bantuan:3,
        showBantu:false,
        indexQuest:1,
        randomIndex:Math.floor(Math.random() * Math.floor(30)),
        questions: [
                    {
                      text: "pequeno almoço",
                      petunjuk:"Nomor punggung 7 pesepakbola hebat !",
                      responses: [
                        {text: 'Latin', correct: false},
                        {text: 'Portuguese', correct: true},
                      ]
                    },
                    {
                      text: "chào buổi sáng",
                      petunjuk:"Nguyen",
                      responses: [
                        {text: 'Vietnamese', correct: true},
                        {text: 'Thai', correct: false},
                      ]
                    },
                    {
                      text: "aimer",
                      petunjuk:"Romantis dekat menara",
                      responses: [
                        {text: 'Mexican', correct: false},
                        {text: 'French', correct: true},
                      ]
                    },
                    {
                      text: "ngayon",
                      petunjuk:"Luzon, Mindanao dan Panay",
                      responses: [
                        {text: 'Vietnamese', correct: false},
                        {text: 'Filipino', correct: true},
                      ]
                    },
                    {
                      text: "non",
                      petunjuk:"Romawi",
                      responses: [
                        {text: 'Latin', correct: true},
                        {text: 'Czech', correct: false},
                      ]
                    },
                    {
                      text: "na",
                      petunjuk:"Pop, boyband, atau girlband",
                      responses: [
                        {text: 'Korean', correct: true},
                        {text: 'Chinese', correct: false},
                      ]
                    },
                    {
                      text: "souhlasím",
                      petunjuk:"Lennon wall ada di ibukota negaranya",
                      responses: [
                        {text: 'Arabic', correct: false},
                        {text: 'Czech', correct: true},
                      ]
                    },
                    {
                      text: "cesta",
                      petunjuk:" Dr. France Preseren",
                      responses: [
                        {text: 'Slovenian', correct: true},
                        {text: 'Uzbek', correct: false},
                      ]
                    },
                    {
                      text: "дәл қазір (däl qazir)",
                      petunjuk:"Sabina Altynbekova mungkin anda suka",
                      responses: [
                        {text: 'Kazakh', correct: true},
                        {text: 'Russian', correct: false},
                      ]
                    },
                    {
                      text: "футбол (futbol)",
                      petunjuk:"Piala Dunia 2018",
                      responses: [
                        {text: 'Kazakh', correct: false},
                        {text: 'Russian', correct: true},
                      ]
                    },
                    {
                      text: "palaist",
                      petunjuk:"Negaranya seluas Aceh",
                      responses: [
                        {text: 'Latin', correct: false},
                        {text: 'Latvian', correct: true},
                      ]
                    },
                    {
                      text: "somnum",
                      petunjuk:"Bahasa untuk urusan Biologi",
                      responses: [
                        {text: 'Latin', correct: true},
                        {text: 'Dutch', correct: false},
                      ]
                    },
                    {
                      text: "wortelen",
                      petunjuk:"Kenangan 350 tahun bersama",
                      responses: [
                        {text: 'Dutch', correct: true},
                        {text: 'Danish', correct: false},
                      ]
                    },
                    {
                      text: "geld",
                      petunjuk:"Kenal dengan Herman Willem Daendels?",
                      responses: [
                        {text: 'English', correct: false},
                        {text: 'Dutch', correct: true},
                      ]
                    },
                    {
                      text: "stad",
                      petunjuk:"Van Persie sudah tidak di MU",
                      responses: [
                        {text: 'Danish', correct: false},
                        {text: 'Dutch', correct: true},
                      ]
                    },
                    {
                      text: "run",
                      petunjuk:"Berarti lari",
                      responses: [
                        {text: 'English', correct: true},
                        {text: 'Dutch', correct: false},
                      ]
                    },
                    {
                      text: "indemnity",
                      petunjuk:"jaminan, tanggungan",
                      responses: [
                        {text: 'English', correct: true},
                        {text: 'Swedish', correct: false},
                      ]
                    },
                    {
                      text: "åtgärd",
                      petunjuk:"Zlatan",
                      responses: [
                        {text: 'Slovenian', correct: false},
                        {text: 'Swedish', correct: true},
                      ]
                    },
                    {
                      text: "bebida",
                      petunjuk:"Sepakbolanya pernah juara dunia",
                      responses: [
                        {text: 'Spanish', correct: true},
                        {text: 'Dutch', correct: false},
                      ]
                    },
                    {
                      text: "หญิง (H̄ỵing)",
                      petunjuk:"Hati-hati dengan wanitanya",
                      responses: [
                        {text: 'Vietnamese', correct: false},
                        {text: 'Thai', correct: true},
                      ]
                    },
                    {
                      text: "unë",
                      petunjuk:"Arsitek utama Taj Mahal di India",
                      responses: [
                        {text: 'Latin', correct: false},
                        {text: 'Albanian', correct: true},
                      ]
                    },
                    {
                      text: "eu",
                      petunjuk:"Johnny Weissmuller",
                      responses: [
                        {text: 'Romanian', correct: true},
                        {text: 'Dutch', correct: false},
                      ]
                    },
                    {
                      text: "jeg",
                      petunjuk:"Negara paling bahagia pada 2017",
                      responses: [
                        {text: 'Norwegian', correct: true},
                        {text: 'Romanian', correct: false},
                      ]
                    },
                    {
                      text: "grá",
                      petunjuk:"Artinya cinta",
                      responses: [
                        {text: 'Irish', correct: true},
                        {text: 'Dutch', correct: false},
                      ]
                    },
                    {
                      text: "tule edasi",
                      petunjuk:"Negara pertama di Eropa yang memperkenalkan 'Flat Tax'",
                      responses: [
                        {text: 'Spanish', correct: false},
                        {text: 'Estonian', correct: true},
                      ]
                    },
                    {
                      text: "fort",
                      petunjuk:"Artinya pergi",
                      responses: [
                        {text: 'Luxembourgish', correct: true},
                        {text: 'Spanish', correct: false},
                      ]
                    },
                    {
                      text: "ich",
                      petunjuk:"Hitler",
                      responses: [
                        {text: 'German', correct: true},
                        {text: 'Dutch', correct: false},
                      ]
                    },
                    {
                      text: "correndo",
                      petunjuk:"Artinya berlari",
                      responses: [
                        {text: 'Spanish', correct: false},
                        {text: 'Portuguese', correct: true},
                      ]
                    },
                    {
                      text: "yürümek",
                      petunjuk:"Erdogan",
                      responses: [
                        {text: 'Turkish', correct: true},
                        {text: 'Spanish', correct: false},
                      ]
                    },
                    {
                      text: "san",
                      petunjuk:"Tim sepakbola bajunya kotak-kotak",
                      responses: [
                        {text: 'Croatian', correct: true},
                        {text: 'Spanish', correct: false},
                      ]
                    },
                  ],
      }
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      randomIndexNext(){
        this.randomIndex=Math.floor(Math.random() * Math.floor(30));
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
  .yellow{
    color: #ffb142;
  }
  .play-page{
    padding: 30px 30px;
    height: 640px;
    width: 360px;
    cursor:pointer;
    background-color: #2c2c54;
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
      background-color: #ff793f;
    }
    50% {
      background-color: #ff793f;
    }
    100% {
      transform: scale(1);
      background-color: #cd6133;
    }
  }
  .showQuest{
    margin-top: 20px;
    font-size: 30px;
    padding: 10px 10px;
    height: 100px;
    color: #ffb142;
    border-bottom: 3px solid #fff;
  }
  td{
    padding: 10px 10px;
  }
  tr{
    padding: 5px 5px;
  }
  .answerList{
    padding-bottom: 30px;
    border-bottom: 3px solid #fff;
  }
  .answer{
    width:200px;
    padding: 10px 10px;
    border: 3px solid #ffb142;
    color:#ffb142;
    border-radius: 15px;
  }
  .answer:hover{
    color:#fff;
    border: 3px solid #fff;
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
    background-color: #706fd3;

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
  .btnPetunjuk{
    padding: 10px 10px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #474787;
  }
  .btnPetunjuk:hover{
    background-color: #474787;
  }
</style>
