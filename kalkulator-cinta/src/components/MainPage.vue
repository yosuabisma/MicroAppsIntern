<template>
  <div class="main-page">
    <div class="about">
      <img v-on:click="gotoPage('/about')" class="spanCornerLeft" v-bind:src="'./../src/assets/img/Information_White.svg'" height="30px"/>
    </div>
    <br/><br/><br/>
    <img v-bind:src="'./../src/assets/img/logoLoveTester.png'" height="70px"/>
    <br/>
    <!--table>
      <tr>
        <td>
          <img v-bind:src="'./../src/assets/img/Group 23.svg'" width="220px" height="320px"/>
        </td>
        <td>
          <div class="spanCornerRight buttonPlay" v-on:click="gotoPage('/play')">
            <img v-bind:src="'./../src/assets/img/Play_White.svg'" width="60px" height="50px"/>
          </div>
        </td>
      </tr>
    </table-->
    <center>
      <img v-bind:src="'./../src/assets/img/Group 23.svg'" height="300px"/><br/><br/><br/>
      <div class="buttonPlay" v-on:click="gotoPage('/play')">
        <img v-bind:src="'./../src/assets/img/Play_White.svg'" width="60px" height="50px"/>
      </div>
    </center>
  </div>
</template>
<script>
  export default {
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      }
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
    background: #c3cce9;
    height: 640px;
    width: 360px;
    max-height: 640px;
    max-width: 360px;
  }
  /*.logoLove{
    background-image:url('logo.svg');
    height: 300px;
    background-size: cover;
  }*/


  .title{
    margin-top:100px;
  }
  .bottomBtn{
    margin-top: 60px;
  }
  .buttonPlay{
    color:#ff6f69;
    background-color: #c43416;
    border-radius:100%;
    border:5px solid #fff;
    padding: 10px 10px;
    width: 80px;
    height: 80px;
  }
</style>
