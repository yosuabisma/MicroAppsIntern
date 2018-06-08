<template>
  <div class="main-page">
    <div class="title">
      <h1 class="size72 purple"><b>Truth</b></h1>
      <h1 class="size72 purple"><b>or Dare</b></h1>
    </div>
    <div class="bottomBtn">
      <center>
        <div class="buttonPlay">
          <b>Play</b>
        </div>
      </center>
    </div>

  </div>
</template>
<script>

</script>
<style>
  .main-page {
    padding:30px 30px;
    color: #fff;
    background: linear-gradient(-60deg, #5856ff, #5856ff, #ff2d55, #ff2d55);
    background-size: 400% 400%;
    -webkit-animation: Gradient 5s ease infinite;
    -moz-animation: Gradient 5s ease infinite;
    animation: Gradient 5s ease infinite;
  }

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  .main-page{
    padding:30px 30px;
  }
  .size72{
    font-size:72px;
  }
  .title{
    margin-top:70px;
  }
  .purple{
    color:#fff;
  }
  .bottomBtn{
    margin-top: 286px;
  }
  .buttonPlay{
    color:#fff;
    font-size:48px;
    background-color: #cc2444;
    border-radius:8px;
    padding: 10px 10px;
  }
  .buttonPlay:hover{
    background-color: #ff2d55;
  }
</style>
