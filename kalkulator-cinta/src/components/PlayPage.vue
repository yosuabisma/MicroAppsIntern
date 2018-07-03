<template>
  <div class="play-page">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <center>
      <div class="heart">
          <br/><br/>
          <h1 class="percent">
            <animated-number
            :value="code"
            :formatValue="formatToPrice"
            :duration="2000"
            />
          </h1>
      </div>
    </center>
    <div class="cloud">
      <center>
        <div v-if="inputOK===false" class="pink">
          <input class="inputName" v-model="name1" placeholder="Nama Kamu" maxlength="15"/>
          <br/><br/>
        </div>
        <div v-if="inputOK===false" class="pink">
          <input class="inputName" v-model="name2" placeholder="Nama Pasanganmu" maxlength="15"/>
        </div>
        <div class="selamat" v-if="inputOK===true">
          <h1>Selamat!</h1>
          <h3 class="pink"><b>{{name1}}</b> <br/>&<br/> <b>{{name2}}</b></h3>
        </div>
      </center>
      <center>
        <br/>
        <div v-if="inputOK===false" class="calculate" v-on:click="calculateLove()">
          <b>Kalkulasi</b>
        </div>
        <div v-if="inputOK===true" class="calculate" v-on:click="restart()">
          <b>Ulangi</b>
        </div>
      </center>

    </div>
    <br/><br/>
    <div class="showResult">
      <div  v-if="inputOK===true" class="w3-container w3-center w3-animate-bottom">
        <img v-if="code<=20" v-bind:src="'./../src/assets/img/0-20.png'" height="120px"/>
        <img v-if="code>20&&code<=50" v-bind:src="'./../src/assets/img/21-50.png'" height="120px"/>
        <img v-if="code>50&&code<=70" v-bind:src="'./../src/assets/img/50-70.png'" height="120px"/>
        <img v-if="code>70&&code<=100" v-bind:src="'./../src/assets/img/71-100.png'" height="120px"/>
      </div>
    </div>
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";
  export default {
    data(){
      return{
        name1:'',
        name2:'',
        code:0,
        inputOK:false,
      }
    },
    components: {
      AnimatedNumber
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      formatToPrice(value) {
        return `${value.toFixed(0)}%`;
      },
      restart(){
        this.inputOK=false;
        this.name1='';
        this.name2='';
        this.code=0;
      },
      calculateLove() {
        var sum1 = 0;
        var sum2 = 0;
        var i=0;
        while(i< this.name1.length){
          sum1 = sum1 + this.name1.charCodeAt(i);
          i++;
        }
        var j=0;
        while(j< this.name2.length){
          sum2 = sum2 + this.name2.charCodeAt(j);
          j++;
        }
        this.code = (sum1 + sum2)%100;

        this.inputOK=true;
      }

    }
  }
</script>
<style>
  .pink{
    color:#c43416;
  }
  .play-page{
    background: #c3cce9;
    height: 640px;
    width: 360px;
    max-height: 640px;
    max-width: 360px;
  }
  .heart{
    background-image: url('Group 13.svg');
    height: 180px;
    background-size: 180px;
    background-repeat: no-repeat;
    background-position: center;
    color:#fff;
    font-size: 20px;
    font-weight: bold;
  }
  .spanCornerLeft{
    float: left;
  }
  .spanCornerRight{
    float:right;
  }
  .inputName{
    border: none;
    text-align: center;
    font-size: 24px;
    border: 3px solid #c43416;
    height: 40px;
    width: 250px;
    color:#c43416;
    padding: 8px 8px;
    background: #fff;
    border-radius: 5px;
  }
  .cloud{
    background-color: #c3cce9;
    height: 250px;
    background-size: cover;

  }
  .calculate{
    color:#fff;
    font-size:20px;
    background-color: #c43416;
    border-radius:8px;
    padding: 10px 10px;
    width: 200px;
    cursor:pointer;
  }
  .showResult{
    height: 220px;
    max-height: 220px;
    padding: 16px 16px;
    background-color: black;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background-color: #aeb7d5;
  }
  .selamat{
    margin-top: -30px;
  }
</style>
