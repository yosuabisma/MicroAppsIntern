<template>
  <div class="main-page">
    <audio autoplay loop hidden>
      <source src="./../assets/step.mp3" type="audio/mpeg">
    </audio>
    <audio autoplay>
      <source src="./../assets/knockdoor.mp3" type="audio/mpeg">
    </audio>
    <div class="about">
      <img v-on:click="gotoPage('/about')" class="spanCornerLeft" v-bind:src="'./../src/assets/img/Information_White.svg'" height="30px"/>
    </div>
    <div class="title">
      <br/><br/>
      <center>
        <h1>Tok! Tok!</h1>
      </center>
    </div>
    <br/><br/><br/>
    <center>
      <table>
        <tr>
          <td>
            <center>
              <!--img class="spanCornerLeft" v-bind:src="'./../src/assets/img/Pintu.svg'"/-->
            </center>
          </td>
          <td>
            <center>
              <img class="door spanCornerLeft" v-bind:src="'./../src/assets/img/Pintu.svg'"/>
            </center>
          </td>
          <td>
            <center>
              <!--img class="spanCornerLeft" v-bind:src="'./../src/assets/img/Pintu.svg'"/-->
            </center>
          </td>
        </tr>
      </table>
    </center>
    <div class="bottomBtn">
      <center>
        <div class="buttonPlay" >
          <center>
            <img class="buttonPlay" v-on:click="gotoPage('/play')" v-bind:src="'./../src/assets/img/Play_White.svg'" width="80px" height="70px"/>
          </center>
        </div>
      </center>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },


    }
  }
</script>
<style>
  /*FONT*/
  .size72{
    font-size:72px;
  }
  .size60{
    font-size:60px;
  }
  .size36{
    font-size:36px;
  }
  .size20{
    font-size: 20px;
  }
  .size24{
    font-size: 24px;
  }
  .white{
    color:#f2f2f2;
  }
  .blue{
    color: #47a8e5;
  }
  .spanCornerRight{
    float: right;
  }
  .purple{
    color:#5856ff;
  }
  .height1{
    line-height: 67.5px;
  }
  .height2{
    line-height: 22.5px;
  }

  .main-page {
    padding:30px 30px;
    background: #222222;
    color: #fff;
    cursor:pointer;
    max-height: 640px;
    max-width: 360px;
    height: 640px;
    width: 360px;
  }
  .title{
    margin-top:50px;
  }
  .bottomBtn{
    margin-top: 20px;
  }
  .buttonPlay{
  }
  td{
    padding: 10px 10px;
  }
</style>
