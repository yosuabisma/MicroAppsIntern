<template>
  <div class="play-page">
    <center>
      <div class="top-bar">
        <div class="spanCornerLeft turn">
          <center>
            <h6 v-if="turn<=9" >Putaran</h6>
            <h1 v-if="turn<=9" >{{turn}}</h1>
          </center>
        </div>
        <div class="spanCornerRight turn2">
          <center><h3>{{turnMSG}}</h3></center>
        </div>
      </div>
    </center>
    <br/>
    <div class="scoreResults">
      <center>
        <table>
          <tr>
            <td class="skor"><center><img v-bind:src="'./../src/assets/img/o.svg'" height="25px"/></center></td>
            <td class="skor"><center><h4>{{winO}}</h4></center></td>
            <td class="skor"><center><h4>:</h4></center></td>
            <td class="skor"><center><h4>{{winX}}</h4></center></td>
            <td class="skor"><center><img v-bind:src="'./../src/assets/img/x.svg'" height="40px"/></center></td>
          </tr>
        </table>
      </center>
    </div>
    <center>
      <table class="gameTable">
        <!--ROW1-->
        <tr>
          <td class="gameCol">
            <div class="dot" v-on:click="turn+=1;open1=true;click1='o';turnMSG='Giliran X';check();" v-if="open1===false&&turn%2===1&&click1===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div class="dot" v-on:click="turn+=1;open1=true;click1='x';turnMSG='Giliran O';check();" v-if="open1===false&&turn%2===0&&click1===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div v-if="open1===true">
              <div v-if="click1==='o'">
                <center>
                  <img v-bind:src="'./../src/assets/img/o.svg'" height="50px" width="50px"/>
                </center>
              </div>
              <div v-if="click1==='x'">
                <center>
                  <img v-bind:src="'./../src/assets/img/x.svg'" height="70px" width="70px"/>
                </center>
              </div>
            </div>
          </td>

          <td class="gameCol">
            <div class="dot" v-on:click="turn+=1;open2=true;click2='o';turnMSG='Giliran X';check();" v-if="open2===false&&turn%2===1&&click2===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div class="dot" v-on:click="turn+=1;open2=true;click2='x';turnMSG='Giliran O';check();" v-if="open2===false&&turn%2===0&&click2===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div v-if="open2===true">
              <div v-if="click2==='o'">
                <center>
                  <img v-bind:src="'./../src/assets/img/o.svg'" height="50px" width="50px"/>
                </center>
              </div>
              <div v-if="click2==='x'">
                <center>
                  <img v-bind:src="'./../src/assets/img/x.svg'" height="70px" width="70px"/>
                </center>
              </div>
            </div>
          </td>

          <td class="gameCol">
            <div class="dot" v-on:click="turn+=1;open3=true;click3='o';turnMSG='Giliran X';check();" v-if="open3===false&&turn%2===1&&click3===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div class="dot" v-on:click="turn+=1;open3=true;click3='x';turnMSG='Giliran O';check();" v-if="open3===false&&turn%2===0&&click3===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div v-if="open3===true">
              <div v-if="click3==='o'">
                <center>
                  <img v-bind:src="'./../src/assets/img/o.svg'" height="50px" width="50px"/>
                </center>
              </div>
              <div v-if="click3==='x'">
                <center>
                  <img v-bind:src="'./../src/assets/img/x.svg'" height="70px" width="70px"/>
                </center>
              </div>
            </div>
          </td>

        </tr>
        <!--ROW2-->
        <tr>
          <td class="gameCol">
            <div class="dot" v-on:click="turn+=1;open4=true;click4='o';turnMSG='Giliran X';check();" v-if="open4===false&&turn%2===1&&click4===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div class="dot" v-on:click="turn+=1;open4=true;click4='x';turnMSG='Giliran O';check();" v-if="open4===false&&turn%2===0&&click4===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div v-if="open4===true">
              <div v-if="click4==='o'">
                <center>
                  <img v-bind:src="'./../src/assets/img/o.svg'" height="50px" width="50px"/>
                </center>
              </div>
              <div v-if="click4==='x'">
                <center>
                  <img v-bind:src="'./../src/assets/img/x.svg'" height="70px" width="70px"/>
                </center>
              </div>
            </div>
          </td>

          <td class="gameCol">
            <div class="dot" v-on:click="turn+=1;open5=true;click5='o';turnMSG='Giliran X';check();" v-if="open5===false&&turn%2===1&&click5===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div class="dot" v-on:click="turn+=1;open5=true;click5='x';turnMSG='Giliran O';check();" v-if="open5===false&&turn%2===0&&click5===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div v-if="open5===true">
              <div v-if="click5==='o'">
                <center>
                  <img v-bind:src="'./../src/assets/img/o.svg'" height="50px" width="50px"/>
                </center>
              </div>
              <div v-if="click5==='x'">
                <center>
                  <img v-bind:src="'./../src/assets/img/x.svg'" height="70px" width="70px"/>
                </center>
              </div>
            </div>
          </td>

          <td class="gameCol">
            <div class="dot" v-on:click="turn+=1;open6=true;click6='o';turnMSG='Giliran X';check();" v-if="open6===false&&turn%2===1&&click6===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div class="dot" v-on:click="turn+=1;open6=true;click6='x';turnMSG='Giliran O';check();" v-if="open6===false&&turn%2===0&&click6===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div v-if="open6===true">
              <div v-if="click6==='o'">
                <center>
                  <img v-bind:src="'./../src/assets/img/o.svg'" height="50px" width="50px"/>
                </center>
              </div>
              <div v-if="click6==='x'">
                <center>
                  <img v-bind:src="'./../src/assets/img/x.svg'" height="70px" width="70px"/>
                </center>
              </div>
            </div>
          </td>
        </tr>
        <!--ROW3-->
        <tr>
          <td class="gameCol">
            <div class="dot" v-on:click="turn+=1;open7=true;click7='o';turnMSG='Giliran X';check();" v-if="open7===false&&turn%2===1&&click7===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div class="dot" v-on:click="turn+=1;open7=true;click7='x';turnMSG='Giliran O';check();" v-if="open7===false&&turn%2===0&&click7===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div v-if="open7===true">
              <div v-if="click7==='o'">
                <center>
                  <img v-bind:src="'./../src/assets/img/o.svg'" height="50px" width="50px"/>
                </center>
              </div>
              <div v-if="click7==='x'">
                <center>
                  <img v-bind:src="'./../src/assets/img/x.svg'" height="70px" width="70px"/>
                </center>
              </div>
            </div>
          </td>
          <td class="gameCol">
            <div class="dot" v-on:click="turn+=1;open8=true;click8='o';turnMSG='Giliran X';check();" v-if="open8===false&&turn%2===1&&click8===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div class="dot" v-on:click="turn+=1;open8=true;click8='x';turnMSG='Giliran O';check();" v-if="open8===false&&turn%2===0&&click8===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div v-if="open8===true">
              <div v-if="click8==='o'">
                <center>
                  <img v-bind:src="'./../src/assets/img/o.svg'" height="50px" width="50px"/>
                </center>
              </div>
              <div v-if="click8==='x'">
                <center>
                  <img v-bind:src="'./../src/assets/img/x.svg'" height="70px" width="70px"/>
                </center>
              </div>
            </div>
          </td>
          <td class="gameCol">
            <div class="dot" v-on:click="turn+=1;open9=true;click9='o';turnMSG='Giliran X';check();" v-if="open9===false&&turn%2===1&&click9===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div class="dot" v-on:click="turn+=1;open9=true;click9='x';turnMSG='Giliran O';check();" v-if="open9===false&&turn%2===0&&click9===''&&finish===false">
              <center><h1></h1></center>
            </div>
            <div v-if="open9===true">
              <div v-if="click9==='o'">
                <center>
                  <img v-bind:src="'./../src/assets/img/o.svg'" height="50px" width="50px"/>
                </center>
              </div>
              <div v-if="click9==='x'">
                <center>
                  <img v-bind:src="'./../src/assets/img/x.svg'" height="70px" width="70px"/>
                </center>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </center>
    <br/>
    <div>
      <center>
        <table>
          <tr>
            <td class="buttonBottom"><h1 class="size20 spanCornerLeft" v-on:click="gotoPage('/')"><b>Home</b></h1></td>
            <td class="buttonBottom forBTN">
              <div class="winMessage" v-if="winMessage!==''">
                <Center><h4>{{winMessage}}</h4></center>
              </div>
              <div class="drawMessage" v-if="drawMessage!==''">
                <Center><h4>{{drawMessage}}</h4></center>
              </div>
              <div v-on:click="nextGame=true;playAgain();" v-if="isAnyWinner===true||drawMessage!==''" class="playAgainButton">
                <center><h4>Lanjut Main</h4></center>
              </div>
            </td>
            <td class="buttonBottom"><h1 class="size20 spanCornerRight" v-on:click="refresh()"><b>Restart</b></h1></td>
          </tr>
        </table>
      </center>
    </div>



  </div>
</template>
<script>
  export default{
    data(){
      return{
        winO: 0,
        winX: 0,
        turn: 1,
        click1:"",
        click2:"",
        click3:"",
        click4:"",
        click5:"",
        click6:"",
        click7:"",
        click8:"",
        click9:"",
        isAnyWinner:false,
        open1:false,
        open2:false,
        open3:false,
        open4:false,
        open5:false,
        open6:false,
        open7:false,
        open8:false,
        open9:false,
        turnMSG:'Giliran O',
        winMessage:'',
        drawMessage:'',
        nextGame:false,
        finish:false,
      }
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      refresh(){
        location.reload();
      },
      playAgain(){
          this.click1="";
          this.click2="";
          this.click3="";
          this.click4="";
          this.click5="";
          this.click6="";
          this.click7="";
          this.click8="";
          this.click9="";
          this.open1=false;
          this.open2=false;
          this.open3=false;
          this.open4=false;
          this.open5=false;
          this.open6=false;
          this.open7=false;
          this.open8=false;
          this.open9=false;
          this.turn=1;
          this.turnMSG="Giliran O";
          this.winMessage='';
          this.drawMessage='';
          this.isAnyWinner=false;
          this.finish=false;
      },
      check(){
        /*Cek O*/
        if(this.click1==='o'&&this.click2==='o'&&this.click3=='o'){
          this.winO+=1;
          this.isAnyWinner=true;
          this.winMessage='O Menang';
          this.finish=true;
        }
        if(this.click4==='o'&&this.click5==='o'&&this.click6=='o'){
          this.winO+=1;
          this.isAnyWinner=true;
          this.winMessage='O Menang';
          this.finish=true;
        }
        if(this.click7==='o'&&this.click8==='o'&&this.click9=='o'){
          this.winO+=1;
          this.isAnyWinner=true;
          this.winMessage='O Menang';
          this.finish=true;
        }
        if(this.click1==='o'&&this.click4==='o'&&this.click7=='o'){
          this.winO+=1;
          this.isAnyWinner=true;
          this.winMessage='O Menang';
          this.finish=true;
        }
        if(this.click2==='o'&&this.click5==='o'&&this.click8=='o'){
          this.winO+=1;
          this.isAnyWinner=true;
          this.winMessage='O Menang';
          this.finish=true;
        }
        if(this.click3==='o'&&this.click6==='o'&&this.click9=='o'){
          this.winO+=1;
          this.isAnyWinner=true;
          this.winMessage='O Menang';
          this.finish=true;
        }
        if(this.click1==='o'&&this.click5==='o'&&this.click9=='o'){
          this.winO+=1;
          this.isAnyWinner=true;
          this.winMessage='O Menang';
          this.finish=true;
        }
        if(this.click3==='o'&&this.click5==='o'&&this.click7=='o'){
          this.winO+=1;
          this.isAnyWinner=true;
          this.winMessage='O Menang';
          this.finish=true;
        }
        /*Cek X*/
        if(this.click1==='x'&&this.click2==='x'&&this.click3=='x'){
          this.winX+=1;
          this.isAnyWinner=true;
          this.winMessage='X Menang';
          this.finish=true;
        }
        if(this.click4==='x'&&this.click5==='x'&&this.click6=='x'){
          this.winX+=1;
          this.isAnyWinner=true;
          this.winMessage='X Menang';
          this.finish=true;
        }
        if(this.click7==='x'&&this.click8==='x'&&this.click9=='x'){
          this.winX+=1;
          this.isAnyWinner=true;
          this.winMessage='X Menang';
          this.finish=true;
        }
        if(this.click1==='x'&&this.click4==='x'&&this.click7=='x'){
          this.winX+=1;
          this.isAnyWinner=true;
          this.winMessage='X Menang';
          this.finish=true;
        }
        if(this.click2==='x'&&this.click5==='x'&&this.click8=='x'){
          this.winX+=1;
          this.isAnyWinner=true;
          this.winMessage='X Menang';
          this.finish=true;
        }
        if(this.click3==='x'&&this.click6==='x'&&this.click9=='x'){
          this.winX+=1;
          this.isAnyWinner=true;
          this.winMessage='X Menang';
          this.finish=true;
        }
        if(this.click1==='x'&&this.click5==='x'&&this.click9=='x'){
          this.winX+=1;
          this.isAnyWinner=true;
          this.winMessage='X Menang';
          this.finish=true;
        }
        if(this.click3==='x'&&this.click5==='x'&&this.click7=='x'){
          this.winX+=1;
          this.isAnyWinner=true;
          this.winMessage='X Menang';
          this.finish=true;
        }
        if(this.isAnyWinner===false&&this.turn===10){
          this.drawMessage='Seri';
          this.finish=true;
        }


      }
    }
  }
</script>
<style>
  .size20{
    font-size: 20px;
  }
  .play-page{
    padding: 30px 30px;
    max-width: 360px;
    max-height: 640px;
  }
  .turn{
    background-color:#ea3457;
    border-top-left-radius:15px;
    border-bottom-left-radius:15px;
    padding: 10px 20px;
    color:#fff;
    float:left;
    width:80px;
    height: 70px;
    /*#ffe600*/
  }
  .turn2{
    background-color:#ffe600;
    border-top-right-radius:15px;
    border-bottom-right-radius:15px;
    padding: 10px 20px;
    color:#fff;
    float:left;
    width:220px;
    height: 70px;
    font-size: 24px;
    color:#602f75;
  }
  .spanCornerLeft{
    float:left;
  }
  .spanCornerRight{
    float:right;
  }
  .gameTable{
    width: 300px;
    height: 300px;
    border-radius: 15px;
    border: 8px solid #602f75;
    color:#999;
  }
  .gameCol{
    padding: 10px 10px;
    width:100px;
    height:100px;
  }
  .scoreResults{
    font-size: 20px;
  }
  .winMessage{
    padding: 10px 20px;
    color:#fff;
    width:120px;
    background-color: #53b493;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .drawMessage{
    padding: 10px 20px;
    color:#fff;
    width:120px;
    background-color: #4d4d4d;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .playAgainButton{
    background-color: #ea3457;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;
    color:#fff;
  }
  .skor{
    padding: 10px 10px;
  }
  .buttonBottom{
    padding: 6px 10px;
  }
  .forBTN{
    width:120px;
  }
  .dot{
    width:50px;
    height:50px;
  }
  .dot:hover{
    background-color: #fff;
  }
</style>
