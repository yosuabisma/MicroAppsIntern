<template>

  <div class="about-page">
    <div class="close">
      <h1 v-on:click="gotoPage('/')">X</h1>
    </div>
    <div class="titleAbout">
      <h1 class="size72 purple height1"><b>About</b></h1>
      <h1 class="size24 height2 teamName"><b>Team XXX</b></h1>
    </div>
    <div class="teamMember">
      <h1 class="size20">@abi_abdurrhmn</h1>
      <h1 class="size20">@aprianilsesra</h1>
      <h1 class="size20">@aryaguna57</h1>
      <h1 class="size20">@awaliamithaa</h1>
      <h1 class="size20">@bisma_putrapratama</h1>
      <h1 class="size20">@irena_gita</h1>
      <h1 class="size20">@vianrd</h1>
    </div>
    <div class="version">
      <center>
        <h1 class="size16">Version 1.0</h1>
      </center>
    </div>
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
  .size20{
    font-size: 20px;
  }
  .size24{
    font-size: 24px;
  }
  .size16{
    font-size: 16px;
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

  .about-page {
    padding:30px 30px;
    /*height: 640px;
    width: 360px;*/
  }
  .close{
    color:#222222;
    float: right;
  }
  .titleAbout{
    margin-top: 22px;
  }
  .teamName{
    margin-top: 12px;
  }
  .teamMember{
    margin-top: 52px;
    color: #ff2d55;
    font-weight: bold;
  }
  .version{
    margin-top: 122px;
  }
</style>
