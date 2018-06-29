<template>
  <div class="play-page">
    <center>
    <div class="hint-container" v-if="HintsAreShown===true">
      <ul>
        <li v-for="item in questions[randomIndex].hints">{{item}}</li>
      </ul>
      <div class="back-button" v-on:click="toggleHints()">
        <center><h3>Go Back</h3></center>
      </div>
    </div>
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
        <div class="spanCornerLeft pilihanSkorAkhir">
          <h1 class="size20" v-on:click="gotoPage('/')"><b>Home</b></h1>
        </div>
        <div class="spanCornerRight pilihanSkorAkhir">
          <h1 class="size20" v-on:click="refresh()"><b></b>Restart</h1>
        </div>
      </center>
    </div>
  </center>
    <div  v-if="indexQuest<=10" class="scoreProc spanCornerRight">
      <h1>{{score}}</h1>
      <h5>/100</h5>
    </div>
    <div v-if="indexQuest<=10" class="quests">
      <h1>Pertanyaan {{indexQuest}}</h1><br/>
      <center>
        <h2 v-if="questions[randomIndex].type_id===1" class="question-what">Siapa nama pahlawan ini?</h2>
        <h2 v-else class="question-what">Siapa nama pahlawan ini?</h2>
        <div class="showQuest">
          <!-- <h3>{{questions[randomIndex].text}}</h3> -->
          <img v-bind:src="'' + questions[randomIndex].link" class="question-set" />
        </div>
      </center>
      <div v-on:click="toggleHints()" class="hint-button" style="background-color: #000000; color: White; margin-top: 2.5px;">
        <h3>Show Hints</h3>
      </div>
      <br/><br/>
      <center>
        <div class="answerList">
          <table>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, randomPosition[0]);/*indexQuest+=1;randomIndexNext(); */" class="answer">
                  <center><h2>{{questions[randomIndex].responses[randomPosition[0]].text}}</h2></center>
                </div>
                <center><h3 style="color: #20FE20;" v-if="isAnswered && questions[randomIndex].responses[randomPosition[0]].correct">Benar</h3></center>
                <center><h3 style="color: #FE2020;" v-if="isAnswered && !questions[randomIndex].responses[randomPosition[0]].correct">Salah</h3></center>
              </td>
            </tr>
            <tr>
              <td>
                <div v-on:click="checkAnswer(randomIndex, randomPosition[1]);/*indexQuest+=1;randomIndexNext(); */" class="answer">
                  <center><h2>{{questions[randomIndex].responses[randomPosition[1]].text}}</h2></center>
                </div>
                <center><h3 style="color: #20FE20;" v-if="isAnswered && questions[randomIndex].responses[randomPosition[1]].correct">Benar</h3></center>
                <center><h3 style="color: #FE2020;" v-if="isAnswered && !questions[randomIndex].responses[randomPosition[1]].correct">Salah</h3></center>
              </td>
            </tr>
          </table>
        </div>
      </center>
      <center>
        <div v-if="isAnswered" class="continue-button" v-on:click="carryOn();">
          <center>
            <h1>Lanjut</h1>
          </center>
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
  import shuffle from 'shuffle-array';

  export default{
    data(){
      return{
        score:0,
        isAnswered: false,
        HintsAreShown: false,
        indexQuest:1,
        randomIndex:Math.floor(Math.random() * Math.floor(10)),
        questions: [
                    {
                      link: "./../src/assets/ki-hajar-dewantara.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Ki Hajar Dewantara', correct: true},
                        {text: 'H.O.S. Cokroaminoto', correct: false}
                      ],
                      hints: [
                        "Dikenal dengan Bapak Pendidikan Nasional"
                      ]
                    },
                    {
                      link: "./../src/assets/sam-ratulangi.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Sam Ratulangi', correct: true},
                        {text: 'Tan Malaka', correct: false}
                      ],
                      hints: [
                        "Terkenal dengan filsafat ‘Si tou timou tumou tou‘ yang berarti ‘manusia baru dapat disebut sebagai manusia, jika sudah dapat memanusiakan manusia’."
                      ]
                    },
                    {
                      link: "./../src/assets/m-husni-thamrin.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'M. Husni Thamrin', correct: true},
                        {text: 'Pattimura', correct: false}
                      ],
                      hints: [
                        "wajahnya terpampang di mata uang kertas Rp 2.000."
                      ]
                    },
                    {
                      link: "./../src/assets/sultan-hassanudin.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Sultan Hassanudin', correct: true},
                        {text: 'Pattimura', correct: false}
                      ],
                      hints: [
                        "Terkenal dengan sebutan “Ayam Jantan dari Timur”"
                      ]
                    },
                    {
                      link: "./../src/assets/tirtayasa.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Sultan Raden Agung Tirtayasa', correct: true},
                        {text: 'Sri Sultan Hamengkubuwono', correct: false}
                      ],
                      hints: [
                        "Pangeran Surya yang merupakan Sultan Banten ke-6, berasal dari Banten. Siapakah nama pahlawan ini?"
                      ]
                    },
                    {
                      link: "./../src/assets/tirtayasa.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Sultan Raden Agung Tirtayasa', correct: true},
                        {text: 'Hamengkubuwono', correct: false}
                      ],
                      hints: [
                        "Pangeran Surya yang merupakan Sultan Banten ke-6, berasal dari Banten. Siapakah nama pahlawan ini?"
                      ]
                    },
                    {
                      link: "./../src/assets/hamengkubuwono.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Pakubuwono', correct: false},
                        {text: 'Hamengkubuwono', correct: true}
                      ],
                      hints: [
                        "merupakan pendiri sekaligus raja pertama Kesultanan Yogyakarta"
                      ]
                    },
                    {
                      link: "./../src/assets/hamengkubuwono.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Pakubuwono', correct: false},
                        {text: 'Hamengkubuwono', correct: true}
                      ],
                      hints: [
                        "Merupakan pendiri sekaligus raja pertama Kesultanan Yogyakarta"
                      ]
                    },
                    {
                      link: "./../src/assets/tuanku-imam-bonjol.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Tuanku Imam Bonjol', correct: true},
                        {text: 'Pangeran Diponegoro', correct: false}
                      ],
                      hints: [
                        "Pemimpin perang Padri"
                      ]
                    },
                    {
                      link: "./../src/assets/pattimura.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Pattimura', correct: true},
                        {text: 'Djunda Kartawidjaja', correct: false}
                      ],
                      hints: [
                        "Wajahnya terpampang di mata uang kertas lama Rp 1.000"
                      ]
                    },
                    {
                      link: "./../src/assets/pangeran-diponegoro.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Pattimura', correct: true},
                        {text: 'Djunda Kartawidjaja', correct: false}
                      ],
                      hints: [
                        "Biasanya difoto dengan pose naik quda",
                        "Ditangkap oleh Belanda dan diasingkan di Makassar"
                      ]
                    },
                    // {
                    //   link: "./../src/assets/",
                    //   type_id: 1,
                    //   responses: [
                    //     {text: , correct: false},
                    //     {text: , correct: true}
                    //   ],
                    //   hints: [
                    //
                    //   ]
                    // },
                  ] /*10 Pertanyaan*/
      }
    },
    components: {
      'shuffle': shuffle
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      randomIndexNext(){
        this.randomIndex=Math.floor(Math.random() * Math.floor(10));
      },
      checkAnswer(randomIndex, index) {
        if(this.questions[randomIndex].responses[index].correct===true){
          this.score+=10;
          //this.randomIndex=Math.floor(Math.random() * Math.floor(10));
        }
        this.isAnswered = true;
      },
      carryOn() {
        this.indexQuest += 1;
        this.isAnswered = false;
        this.randomIndexNext();
      },
      refresh(){
        location.reload();
      },
      toggleHints() {
        this.HintsAreShown = !this.HintsAreShown;
      }
    },
    computed: {
      randomPosition() {
        var arr = [0,1];
        shuffle(arr);
        return arr;
      }
    }
  }
</script>
<style>
  /*font*/
  .size20{
    font-size: 20px;
  }
  .showQuest img {
    width: 250px;
    height: 210px;
  }
  .play-page{
    padding: 30px 30px;
    height: 680px;
    width: 360px;
    cursor:pointer;
    background-color: #585858;
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
  .continue-button{
    background-color: #F63A1D;
    width: 200px;
    height: 60px;
    padding-top: 10px;
    border-radius: 10px;
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
    background-color: #A8A8A8;
    border-radius: 10px;
    padding: 20px 20px;
    height: 250px;
    color: #fff;
  }
  .answerList {
    margin-top: -20px;
  }
  td{
    padding: 10px 10px;
  }
  tr{
    padding: 5px 5px;
  }
  .answer{
    width:260px;
    background-color: #1dd1a1;
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
    /* margin-top: 100px;
    margin-bottom: 100px; */
    display: block;
    position: absolute;
    background-color: rgba(255,255,255,1);
    width: 300px;
    height: 560px;
    padding-top: 90px;
    padding-left: 25px;
    padding-right: 25px;
    overflow: hidden;
    color: black;
  }
  .skorAkhirTitle .pilihanSkorAkhir {
    width: 80px;
    height: 30px;
    /* background-color: red; */
    margin-top: 180px;
  }
  .hint-container{
    /* margin-top: 100px;
    margin-bottom: 100px; */
    display: block;
    position: absolute;
    background-color: rgba(255,255,255,1);
    width: 300px;
    height: 560px;
    padding-top: 90px;
    padding-left: 25px;
    padding-right: 25px;
    overflow: hidden;
    color: black;
  }
  .hint-container ul li {
    text-align: justify;
  }
  .back-button {
    margin-top: 30px;
  }
  .hint-button {
    text-align: center;
    width: 110px;
    height: 24px;
    border-radius: 5px;
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
