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
      <br/><br/>
      <center>
        <div class="answerList">
          <h5>Pilihan Jawaban</h5>
          <table>
            <tr>
              <td>
                <div v-if="isAnswer===false" v-on:click="checkAnswer(randomIndex, 0);isAnswer=true;isKiri=true;" class="answer">
                  <center>
                    <img class="imgAnswer" v-bind:src="'./../src/assets/img/'+questions[randomIndex].responses[0].text" height="174px" width="145px"/>
                  </center>
                </div>
                <div v-if="isAnswer===true&&isKiri===true" class="answer">
                  <center>
                    <img class="imgAnswer" v-bind:src="'./../src/assets/img/'+questions[randomIndex].responses[0].text" height="174px" width="145px"/>
                  </center>
                </div>
                <div v-if="isAnswer===true&&isKiri===false" class="darker answer">
                  <center>
                    <img class="imgAnswer" v-bind:src="'./../src/assets/img/'+questions[randomIndex].responses[0].text" height="174px" width="145px"/>
                  </center>
                </div>
                <div class="msgLoad">
                  <div v-if="questions[randomIndex].responses[0].mes==='Benar'&&isAnswer===true" class="msgLoadBenar">
                    {{questions[randomIndex].responses[0].mes}}
                  </div>
                  <div v-if="questions[randomIndex].responses[0].mes==='Salah'&&isAnswer===true" class="msgLoadSalah">
                    {{questions[randomIndex].responses[0].mes}}
                  </div>
                </div>
              </td>
              <td>
                <div v-if="isAnswer===false" v-on:click="checkAnswer(randomIndex, 1);isAnswer=true;isKanan=true;"  class="answer">
                  <center>
                    <img class="imgAnswer" v-bind:src="'./../src/assets/img/'+questions[randomIndex].responses[1].text" height="174px" width="145px"/>
                  </center>
                </div>
                <div v-if="isAnswer===true&&isKanan===true" class="answer">
                  <center>
                    <img class="imgAnswer" v-bind:src="'./../src/assets/img/'+questions[randomIndex].responses[1].text" height="174px" width="145px"/>
                  </center>
                </div>
                <div v-if="isAnswer===true&&isKanan===false" class="darker answer">
                  <center>
                    <img class="imgAnswer" v-bind:src="'./../src/assets/img/'+questions[randomIndex].responses[1].text" height="174px" width="145px"/>
                  </center>
                </div>
                <div class="msgLoad">
                  <div v-if="questions[randomIndex].responses[1].mes==='Benar'&&isAnswer===true" class="msgLoadBenar">
                    {{questions[randomIndex].responses[1].mes}}
                  </div>
                  <div v-if="questions[randomIndex].responses[1].mes==='Salah'&&isAnswer===true" class="msgLoadSalah">
                    {{questions[randomIndex].responses[1].mes}}
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </center>
      <center>
        <br/>
        <div v-if="isAnswer===true" class="placeName">
          <h4>{{namaTempat}}</h4>
        </div>
        <br/>
      </center>
      <center>
        <div v-if="isAnswer===true" v-on:click="indexQuest+=1;isAnswer=false;msg='';namaTempat='';isKiri=false;isKanan=false;randomIndexNext();" class="btnNext">
          Selanjutnya
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
        <br/><br/>
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
        msg:"",
        namaTempat:"",
        isKiri:false,
        isKanan:false,
        isAnswer:false,
        indexQuest:1,
        randomIndex:Math.floor(Math.random() * Math.floor(24)),
        questions: [
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'viti.png', correct: false, nama:"Danau Viti (Islandia)", mes:"Salah"},
                        {text: 'kelimutu.png', correct: true, nama:"Danau Kelimutu (Flores,NTT)", mes:"Benar"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'prambanan.png', correct: true, nama:"Candi Prambanan (Yogyakarta, DIY)", mes:"Benar"},
                        {text: 'angkorwat.png', correct: false, nama:"Angkor Wat (Kamboja)", mes:"Salah"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'crystal-cave.png', correct: false, nama:"Crystal Cave (Bermuda)", mes:"Salah"},
                        {text: 'gua-rangko.png', correct: true, nama:"Goa Rangko (Flores, NTT)", mes:"Benar"},
                      ]
                    },


                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'Inferno-crater-lake-new-zealand.png', correct: false, nama:"Inferno Crater Lake (New Zealand)", mes:"Salah"},
                        {text: 'Kawah-putih-Bandung-jawabarat.png', correct: true, nama:"Kawah Putih (Bandung, Jawa Barat)", mes:"Benar"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'lugu.png', correct: false, nama:"Danau Lugu (Yunnan, China)", mes:"Salah"},
                        {text: 'toba.png', correct: true, nama:"Danau Toba (Sumatera Utara)", mes:"Benar"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'Zhangjiajie.png', correct: false, nama:"Taman Hutan Nasional Zhangjiajie (China)", mes:"Salah"},
                        {text: 'pegadungan.png', correct: true, nama:"Pantai Pegadungan (Lampung)", mes:"Benar"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'krabi.png', correct: false, nama:"Kepulauan Phoo Phi Krabi (Thailand)", mes:"Salah"},
                        {text: 'rajaampat.png', correct: true, nama:"Kepulauan Raja Ampat (Raja Ampat)", mes:"Benar"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'babel.png', correct: true, nama:"Kepulauan Bangka Belitung", mes:"Benar"},
                        {text: 'pamukkale.png', correct: false, nama:"Pamukkale (Turki)", mes:"Salah"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'cinta.png', correct: true, nama:"Pulau Cinta (Gorontalo)", mes:"Benar"},
                        {text: 'bora.png', correct: false, nama:"Pulau Bora Bora (Perancis)", mes:"Salah"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'pelalang.png', correct: true, nama:"Bukit Pelalangan (Bangkalan, Jawa Timur)", mes:"Benar"},
                        {text: 'antelope.png', correct: false, nama:"Ngarai Antelope (Arizona, Amerika Serikat)", mes:"Salah"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'telaga-warna.png', correct: true, nama:"Telaga Warna (Dataran Tinggi Dieng, Jawa Tengah)", mes:"Benar"},
                        {text: 'plitvice.png', correct: false, nama:"Danau Plitvice (Kroasia)", mes:"Salah"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'jfc.png', correct: true, nama:"Jember Fashion Carnival (Jember, Jawa Timur)", mes:"Benar"},
                        {text: 'rio.png', correct: false, nama:"Rio Carnival (Brazil)", mes:"Salah"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'jomblang.png', correct: true, nama:"Gua Jomblang (Gunung Kidul, DI Yogyakarta)", mes:"Benar"},
                        {text: 'stephen.png', correct: false, nama:"Stephen Gap (Alabama, AS)", mes:"Salah"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'baluran.png', correct: true, nama:"Taman Nasional Baluran (Jawa Timur)", mes:"Benar"},
                        {text: 'maasai.png', correct: false, nama:"Situs Maasai (Kenya)", mes:"Salah"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'tagsi.png', correct: true, nama:"Pantai Tagsi (Lombok Timur, Nusa Tenggara Barat)", mes:"Benar"},
                        {text: 'balos.png', correct: false, nama:"Laguna Pantai Balos (Crete, Yunani)", mes:"Salah"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'Baluran-Indonesia.png', correct: true, nama:"Baluran (Indonesia)", mes:"Benar"},
                        {text: 'Afrika.png', correct: false, nama:"Afrika", mes:"Salah"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'Jakarta-Indonesia.png', correct: true, nama:"Jakarta (Indonesia)", mes:"Benar"},
                        {text: 'Europe.png', correct: false, nama:"Europe", mes:"Salah"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'Malang-Indonesia.png', correct: true, nama:"Malang (Indonesia)", mes:"Benar"},
                        {text: 'Yunani.png', correct: false, nama:"Yunani", mes:"Salah"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'berbisik.png', correct: true, nama:"Pasir Berbisik (Bromo, Indonesia)", mes:"Benar"},
                        {text: 'Sahara.png', correct: false, nama:"Gurun Sahara (Afrika)", mes:"Salah"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'sanfransisco.png', correct: false, nama:"San Fransisco", mes:"Salah"},
                        {text: 'palembang-indonesia.png', correct: true, nama:"Jembatan Ampera (Palembang, Indonesia)", mes:"Benar"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'pokoknya-singapura.png', correct: false, nama:"Singapura", mes:"Salah"},
                        {text: 'yogyakarta-indonesia.png', correct: true, nama:"Yogyakarta (Indonesia)", mes:"Benar"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'gn-everest.png', correct: false, nama:"Gunung Everest (Tibet)", mes:"Salah"},
                        {text: 'jayawijaya.png', correct: true, nama:"Gunung Jayawijaya (Papua, Indonesia)", mes:"Benar"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'Turkey.png', correct: false, nama:"Turki", mes:"Salah"},
                        {text: 'Medan.png', correct: true, nama:"Medan (Sumatera Utara, Indonesia)", mes:"Benar"},
                      ]
                    },
                    {
                      text: "Mana yang Indonesia ?",
                      responses: [
                        {text: 'new-zealand.png', correct: false, nama:"New Zealand", mes:"Salah"},
                        {text: 'pulau-komodo.png', correct: true, nama:"Pulau Komodo (NTT, Indonesia)", mes:"Benar"},
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
        this.randomIndex=Math.floor(Math.random() * Math.floor(24));
      },
      checkAnswer(randomIndex, index){
        if(this.questions[randomIndex].responses[index].correct===true){
          this.score+=10;
          this.msg="BENAR";
          this.namaTempat=this.questions[randomIndex].responses[index].nama;
        }else{
          this.msg="SALAH";
          this.namaTempat=this.questions[randomIndex].responses[index].nama;
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
    background: #222;
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
    font-size: 20px;
    padding: 10px 10px;
    height: 100px;
    color: #fff;
    border-bottom: 3px solid #fff;
  }
  td{
  }
  tr{
  }
  .answerList{
    padding-bottom: 30px;
    border-bottom: 3px solid #fff;
  }
  .imgAnswer{
    border: 3px solid #fff;
  }
  .imgAnswer:active{
    border: 3px solid #fd9644;
  }
  .imgAnswer:hover{
    border: 3px solid #fd9644;
  }
  .answer{
    width:145px;
    height:174px;
  }
  .answer:hover{
    color:#fff;
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
    background-color:#eb2f06;
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
  .btnNext{
    background-color:#3867d6;
    padding: 10px 20px;
    border-radius: 8px;
  }
  .btnNext:hover{
    background-color:#8854d0;
  }
  .msgLoad{
      padding: 10px 10px;
      font-weight: bold;
  }
  .msgLoadBenar{
    color:#079992;
  }
  .msgLoadSalah{
    color:#e55039;
  }
  .darker{
    -webkit-filter:brightness(20%);
  }
</style>
