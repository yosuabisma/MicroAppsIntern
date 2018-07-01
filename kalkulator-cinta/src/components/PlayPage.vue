<template>
  <div class="play-page">
    <!--div v-if="inputOK===false" class="titlePlay">
      <h1 class="pink">Kalkulator Cinta 💑</h1>
      <h4 class="pink">Hitung Peluang Cintamu</h4>
    </div-->
    <br/>
    <br/>
    <div class="calculation">
      <center>
        <!--h3 class="gray">Nama Kamu</h3><br/-->
        <input class="inputName" v-model="name1" placeholder="Nama Kamu"/>
        <br/><br/><br/>
        <div class="loveMeter">
          <br/><br/><br/><br/>
          <!--h2>{{code}} %</h2-->
          <h2><animated-number
          :value="code"
          :formatValue="formatToPrice"
          :duration="2000"
          /></h2>
        </div>
        <br/><br/><br/>
        <!--h3 class="gray">Nama Pasanganmu</h3><br/-->
        <input class="inputName" v-model="name2" placeholder="Nama Pasanganmu"/>
        <br/><br/><br/>
        <div class="calculate" v-on:click="calculateLove()">
          <b>Persentase Cintamu</b>
        </div>
        <br/><br/>
        <center>
          <div v-if="inputOK===true" class="titlePlay2">
            <img v-if="code>=0&&code<25" v-bind:src="'./../src/assets/img/minus.png'" height="180px"/>
            <img v-if="code>=25&&code<50" v-bind:src="'./../src/assets/img/25-50.png'" height="180px"/>
            <img v-if="code>=50&&code<90" v-bind:src="'./../src/assets/img/diatas 50.png'" height="180px"/>
            <img v-if="code>=90&&code<100" v-bind:src="'./../src/assets/img/90-100.png'" height="180px"/>
          </div>
        </center>
      </center>
    </div>
    <br/><br/>


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
        loveScore:0,
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
        return `${value.toFixed(0)} %`;
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
  .play-page{
    padding: 30px 30px;
    height: 640px;
    width: 360px;
    max-height: 640px;
  }
  .gray{
    color:gray;
  }
  .pink{
    color: #e04f5f;
  }
  .white{
    color:#fff;
  }

  /*.titlePlay2{
    background-color: #52969e;
    padding: 10px 10px;
  }*/
  .loveMeter{
    background-image: url("loveMeter.png");
    height: 180px;
    width: 180px;
    max-height: 180px;
    max-width: 180px;
    background-size: cover;
    color:#e04f5f;
    font-weight: bold;
  }
  .inputName{
    border: none;
    text-align: center;
    font-weight: bold;
    font-size: 28px;
    border-bottom: 3px solid #e04f5f;
    height: 50px;
    width: 250px;
    color: #e04f5f;
  }
  .calculate{
    color:#fff;
    font-size:20px;
    background-color: #cc2444;
    border-radius:8px;
    padding: 10px 10px;
    cursor:pointer;
  }

  .calculate:hover{
    background-color: #ff2d55;
  }
</style>
