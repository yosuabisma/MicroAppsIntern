<template>
  <div class="play-page">
    <div class="titlePlay">
      <h1 class="pink">Kalkulator Cinta 💑</h1>
      <h4 class="pink">Hitung Peluang Cintamu</h4>
    </div>
    <br/>
    <br/>
    <div class="calculation">
      <center>
        <h3 class="gray">Nama Kamu</h3><br/>
        <input class="inputName" v-model="name1"/>
        <br/><br/><br/>
        <div class="loveMeter">
          <br/><br/><br/><br/>
          <h2>{{code}} %</h2>
        </div>
        <br/><br/><br/>
        <h3 class="gray">Nama Doi</h3>
        <br/>
        <input class="inputName" v-model="name2"/>
        <br/><br/><br/>

        <div class="calculate" v-on:click="calculateLove()">
          <b>Persentase Cintamu</b>
        </div>
      </center>
    </div>
    <br/><br/>


  </div>
</template>
<script>
  import vueSlider from 'vue-slider-component';
  /*import hashCode from 'js-hash-code';*/
  /*var obj = document.getElementById('input1');
  var hashcode = hash(obj);
  alert(hashcode);*/
  export default {
    data(){
      return{
        name1:'',
        name2:'',
        code:0,
        loveScore:0,
      }
    },
    components: {
      vueSlider
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
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
  /*.calculation{
    padding: 16px 16px;
    background-color: #fff;
    border: 2px solid #e04f5f;
    color:#e04f5f;
    border-radius:8px;
  }*/
</style>
