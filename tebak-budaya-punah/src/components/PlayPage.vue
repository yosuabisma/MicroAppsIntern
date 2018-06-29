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
        <h2 v-if="questions[randomIndex].type_id===1" class="question-what">Tradisi apa ini?</h2>
        <h2 v-else-if="questions[randomIndex].type_id===2" class="question-what">Suku apa ini?</h2>
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

    <!-- <div class="navigation">
      <div class="spanCornerLeft">
        <h1 class="size20" v-on:click="gotoPage('/')"><b>Home</b></h1>
      </div>
      <div class="spanCornerRight">
        <h1 class="size20" v-on:click="refresh()"><b></b>Restart</h1>
      </div>
    </div> -->
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
                      link: "./../src/assets/mapasilaga.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Mapasilaga Tedong', correct: true},
                        {text: 'Tabuik', correct: false}
                      ],
                      hints: [
                        "2 ekor kerbau berjenis bule atau lumpur dipertandingkan",
                        "Saling adu kekuatan, dan setelah itu baru dipotong untuk persembahan",
                        "Perayaan ini hanya diadakan ketika ada kematian yang menimpa salah seorang suku"
                      ]
                    },
                    {
                      link: "./../src/assets/tabuik.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Tabuik', correct: true},
                        {text: 'Pemakaman Suku Minahasa', correct: false}
                      ],
                      hints: [
                        "Mengusung jenazah",
                        "Diadakan untuk memperingati Asyura pada 10 muharram. Di mana Imam Husain yang merupakan cucu Nabi Muhammad wafat.",
                        "Di sini biasanya masyarakat lokal akan menampilkan kembali pertempuran Karbala.",
                        "Diadakan di pinggir pantai pariaman"
                      ]
                    },
                    {
                      link: "./../src/assets/pemakaman-minahasa.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Rambu Solo', correct: false},
                        {text: 'Pemakaman Suku Minahasa', correct: true}
                      ],
                      hints: [
                        "Tujuan dari tradisi ini adalah untuk mengantarkan roh leluhur sanak saudara yang meninggal menuju ke alam baka.",
                        "Memindahkan sisa jasad dari liang kubur menuju tempat yang disebut dengan Sandung",
                        "Tak cuma posisi duduk, arahnya juga harus menghadap utara"
                      ]
                    },
                    {
                      link: "./../src/assets/iki-palek.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Rambu Solo', correct: false},
                        {text: 'Iki Palek', correct: true}
                      ],
                      hints: [
                        "Dilakukan oleh Suku Dani",
                        "Pemotongan jari yang dilakukan sebagai bentuk kesediaan karena ditinggal anggota keluarga"
                      ]
                    },
                    {
                      link: "./../src/assets/batombe.jpg",
                      type_id: 1,
                      responses: [
                        {text: 'Basapa', correct: false},
                        {text: 'Batombe', correct: true}
                      ],
                      hints: [
                        "Masing-masing orang diharuskan untuk melantunkan pantun",
                        "Biasanya diadakan saat sebuah rumah selesai dibangun",
                        "Tujuannnya sendiri untuk menghibur orang yang bekerja agar kembali semangat"
                      ]
                    },
                    {
                      link: "./../src/assets/suku-sakai.jpg",
                      type_id: 2,
                      responses: [
                        {text: 'Suku Sakai', correct: false},
                        {text: 'Suku Akit', correct: true}
                      ],
                      hints: [
                        "Merupakan komunitas pedalaman asli yang menetap di daratan Riau",
                        "Percampuran orang Wedoid dan orang Melayu Tua"
                      ]
                    },
                    {
                      link: "./../src/assets/suku-togutil.jpg",
                      type_id: 2,
                      responses: [
                        {text: 'Suku Lingon', correct: false},
                        {text: 'Suku Togutil', correct: true}
                      ],
                      hints: [
                        "Dikenal juga dengan Suku Tobelo Dalam, mereka merupakan kelompok etnis yang tinggal di hutan.",
                        "Tinggal secara nomaden alias berpindah-pindah dari satu hutan ke hutan yang lain, di sekitar Totodoku."
                      ]
                    },
                    {
                      link: "./../src/assets/suku-samin.jpg",
                      type_id: 2,
                      responses: [
                        {text: 'Suku Dayak', correct: false},
                        {text: 'Suku Samin', correct: true}
                      ],
                      hints: [
                        "Memberikan ajaran berupa sedulur siker, yang berarti mengorbankan semangat perlawanan pada Belanda diluar kekerasan.",
                        "Suku ini juga dikenal sebagai suku yang mengisolasi diri hingga pada tahun 70-an mereka baru tahu jika Indonesia telah merdeka."
                      ]
                    },
                    {
                      link: "./../src/assets/suku-hutan.jpg",
                      type_id: 2,
                      responses: [
                        {text: 'Suku Batak', correct: false},
                        {text: 'Suku Hutan', correct: true}
                      ],
                      hints: [
                        "Merupakan kelompok etnis yang tinggal di Dusun Sungai Sadap, Kelurahan Rempang, Kecamatan Galang, Batam, Kepulauan Riau."
                      ]
                    },
                    {
                      link: "./../src/assets/suku-kajang.jpg",
                      type_id: 2,
                      responses: [
                        {text: 'Suku Dani', correct: false},
                        {text: 'Suku Kajang', correct: true}
                      ],
                      hints: [
                        "Biasa disebut sebagai masyarakat Ammatoa atau masyarakat Patuntung atau masyarakat kamase-masea.",
                        "Kelompok masyarakat lokal yang berdiam di Desa Tana Toa, daerah Possi Tana dan wilayah Balagana, Kabupaten Bulukumba, Provinsi Sulawesi Selatan"
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
    background-color: #A52A2A;
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
    background-color: #d5f5e3;
    border-radius: 10px;
    padding: 20px 20px;
    height: 250px;
    color: #186a3b;
  }
  .answerList {
    /* margin-top: 20px; */
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
