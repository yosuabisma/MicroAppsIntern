<template>
  <div class="main-page">
    <div class="title">
      <h1>Ideal.in</h1>
    </div>
    <br/>
    <br/>
    <div class="calculation">
      <div class="weight">
        <h3 class="gray">Weight : <span><input class="inputWeight" v-model="weight" maxlength="3"/></span> kg</h3>
        <br/>
        <vue-slider v-model="weight"
        :min="0"
        :max="250"
        :dotSize="20"
        :width="auto"
        :height="10"
        :sliderStyle="{backgroundColor:'#fff', border: '10px solid #0088ff'}"
        :processStyle="{backgroundColor:'#0088ff'}"
        ></vue-slider>
      </div>
      <br/>
      <div class="height">
        <h3 class="gray">Height : <span><input class="inputWeight" v-model="height" maxlength="3"/></span> cm</h3>
        <br/>
        <vue-slider v-model="height"
        :min="0"
        :max="250"
        :dotSize="20"
        :width="auto"
        :height="10"
        :sliderStyle="{backgroundColor:'#fff', border: '10px solid #0088ff'}"
        :processStyle="{backgroundColor:'#0088ff'}"
        ></vue-slider>
      </div>
      <br/><br/><br/>
      <center>
        <div class="calculate" v-on:click="calculateBMI()">
          <b>Calculate</b>
        </div>
      </center>
    </div>
    <br/><br/>
    <div v-if="bmiscore>0" class="result">
      <h4>BMI Score : {{bmiscore}}</h4>
      <br/>
      <div v-if="bmiscore<15" class="cat vsuw">
        <center><h3>Very Severely Underweight</h3></center>
      </div>
      <div v-if="bmiscore>=15&&bmiscore<16" class="cat suw">
        <center><h3>Severely Underweight</h3></center>
      </div>
      <div v-if="bmiscore>=16&&bmiscore<18.5" class="cat uw">
        <center><h3>Underweight</h3></center>
      </div>
      <div v-if="bmiscore>=18.5&&bmiscore<25" class="cat nw">
        <center><h3>Normal (Ideal / Healthly Weight)</h3></center>
      </div>
      <div v-if="bmiscore>=25&&bmiscore<30" class="cat ow">
        <center><h3>Overweight</h3></center>
      </div>
      <div v-if="bmiscore>=30&&bmiscore<35" class="cat mob">
        <center><h3>Moderately Obese</h3></center>
      </div>
      <div v-if="bmiscore>=35&&bmiscore<40" class="cat sob">
        <center><h3>Severely Obese</h3></center>
      </div>
      <div v-if="bmiscore>40" class="cat vsob">
        <center><h3>Very Severely Obese</h3></center>
      </div>
      <br/>
    </div>
  </div>
</template>
<script>
  import vueSlider from 'vue-slider-component';
  export default {
    data(){
      return{
        height:0,
        weight:0,
        bmiscore:0,
      }
    },
    components: {
      vueSlider
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      calculateBMI(){
        var hMeter = this.height/100;
        var h2 = hMeter * hMeter;
        this.bmiscore = (this.weight / h2).toFixed(2);
      }
    }
  }
</script>
<style>
  .main-page{
    padding: 30px 30px;
    height: 640px;
    width: 360px;
    max-height: 640px;
  }
  .gray{
    color:gray;
  }
  .inputWeight{
    border:none;
    border-bottom: 2px solid gray;
    color:#0088ff;
    font-size: 36px;
    max-width: 100px;
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
  .calculation{
    padding: 16px 16px;
    border: 2px solid gray;
    color:gray;
    border-radius:8px;
  }
  .cat{
    padding: 5px 5px;
    border-radius:8px;
    max-height: 150px;
    color:white;

  }
  .vsuw{
    background-color: #e6dbac;
    color:#d6b85a;
  }
  .suw{
    background-color: #eedc9a;
    color:#d6b85a;
  }
  .uw{
    background-color: #e9e076;
    color:#d6b85a;
  }
  .nw{
    background-color: #3cb043;
  }
  .ow{
    background-color:#cd5c5c;
  }
  .mob{
    background-color:#b43757;
  }
  .sob{
    background-color:#b90e0a;
  }
  .vsob{
    background-color:#d21404;
  }
</style>
