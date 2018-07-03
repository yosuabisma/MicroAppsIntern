<template>
  <div class="play-page">
    <div v-if="gameover===false&&isTarget===false" class="gameplay">
      <br/><br/>
      <div class="secs">
        <center>
          <h1 v-if="isKnock===true&&isOpen===false&&secs<=5" class="size50">{{ secs }}</h1>
        </center>
      </div>
      <br/><br/><br/>
      <div class="note">
        <center>
          <h5 v-if="isKnock===false">Ketuk pada salah satu pintu</h5>
          <h5 v-if="isKnock===true">Kamu telah mengetuk pintu!<br/>Segera pilih salah satu pintu</h5>
        </center>
      </div>
      <br/><br/><br/>
      <div class="game">
        <audio v-if="isKnock===true" autoplay>
          <source src="./../assets/knockdoor.mp3" type="audio/mpeg">
        </audio>
        <audio v-if="isOpen===true" autoplay>
          <source src="./../assets/openDoorSound.mp3" type="audio/mpeg">
        </audio>
        <audio autoplay loop hidden>
          <source src="./../assets/step.mp3" type="audio/mpeg">
        </audio>
        <center>
          <table>
            <tr>
              <td>
                <center>
                  <img v-on:click="start();" v-if="isKnock===false" v-bind:src="'./../src/assets/img/Pintu.svg'"/>
                  <img v-if="open1===false&&isKnock===true&&secs>5" v-bind:src="'./../src/assets/img/Pintu.svg'"/>
                  <img v-on:click="open1=true;isOpen=true;openDoor();" v-if="open1===false&&isKnock===true&&secs<=5&&isOpen===false" v-bind:src="'./../src/assets/img/Pintu.svg'"/>
                  <img v-if="open1===true" class="spanCornerLeft" v-bind:src="'./../src/assets/img/Pintu - buka.svg'"/>
                  <!--Kalau ga dipilih-->
                  <img v-if="open1===false&&isOpen===true" class="spanCornerLeft" v-bind:src="'./../src/assets/img/Pintu.svg'"/>
                </center>
              </td>
              <td>
                <center>
                  <img v-on:click="start();" v-if="isKnock===false" v-bind:src="'./../src/assets/img/Pintu.svg'"/>
                  <img v-if="open2===false&&isKnock===true&&secs>5" v-bind:src="'./../src/assets/img/Pintu.svg'"/>
                  <img v-on:click="open2=true;isOpen=true;openDoor();" v-if="open2===false&&isKnock===true&&secs<=5&&isOpen===false" v-bind:src="'./../src/assets/img/Pintu.svg'"/>
                  <img v-if="open2===true" v-bind:src="'./../src/assets/img/Pintu - buka.svg'"/>
                  <!--Kalau ga dipilih-->
                  <img v-if="open2===false&&isOpen===true" class="spanCornerLeft" v-bind:src="'./../src/assets/img/Pintu.svg'"/>
                </center>
              </td>
              <td>
                <center>
                  <img v-on:click="start();" v-if="isKnock===false" v-bind:src="'./../src/assets/img/Pintu.svg'"/>
                  <img v-if="open3===false&&isKnock===true&&secs>5" v-bind:src="'./../src/assets/img/Pintu.svg'"/>
                  <img v-on:click="open3=true;isOpen=true;openDoor();" v-if="open3===false&&isKnock===true&&secs<=5&&isOpen===false" v-bind:src="'./../src/assets/img/Pintu.svg'"/>
                  <img v-if="open3===true" v-bind:src="'./../src/assets/img/Pintu - buka.svg'"/>
                  <!--Kalau ga dipilih-->
                  <img v-if="open3===false&&isOpen===true" class="spanCornerLeft" v-bind:src="'./../src/assets/img/Pintu.svg'"/>
                </center>
              </td>
            </tr>
          </table>
        </center>
      </div>
    </div>
    <div v-if="gameover===true">
      <br/><br/><br/>
      <center>
        <h2>Permainan Berakhir</h2>
        <h4>Waktumu Habis!</h4>
      </center>
      <br/><br/><br/>
    </div>
    <div v-if="isTarget===true">
      <br/><br/><br/>
      <center>
        <h2>Permainan Berakhir</h2>
      </center>
      <br/><br/><br/>
    </div>
    {{ran}}
    {{isTarget}}<br/>
    setan 1 {{setan1}}<br/>
    setan 2 {{setan2}}<br/>
    setan 3 {{setan3}}<br/>
    open 1 {{open1}}<br/>
    open 2 {{open2}}<br/>
    open 3 {{open3}}<br/>
    {{secsLoad}}
    <!--NAVIGATION-->
    <div v-if="gameover===false&&isTarget===false" class="navigation">
      <div class="spanCornerLeft">
        <h1 class="size20" v-on:click="gotoPage('/')"><b>Kembali</b></h1>
      </div>
    </div>
    <div v-if="gameover===true||isTarget===true" class="navigationOver">
      <div class="spanCornerLeft">
        <center><h1 class="size20" v-on:click="gotoPage('/')"><b>&lt&ltKembali&gt&gt</b></h1></center>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        ran:0,
        gameover:false,
        isTarget:false,
        isKnock:false,
        isOpen:false,
        open1: false,
        open2: false,
        open3: false,
        setan1:false,
        setan2:false,
        setan3:false,
        secs:7,
        //secsLoad:9,
      }
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      refresh(){
        location.reload();
      },
      start(){
        var self = this;
        this.isKnock = true;
        setInterval(function(){
            if(self.secs == 0&&self.isOpen===false){
                self.gameover = true;
                this.secs = 0;
                //this.start = false;
            }else{
              self.secs--;
            }
        },1000);
      },
      openDoor(){
        var random = Math.floor(Math.random() * Math.floor(3));
        this.ran=random;
        if(random==0){
          this.setan1=true;
          if(this.open1===true){
            //this.isTarget = true;
            var tmp = false;
            setTimeout(function(){
              //tmp=true;
              this.isTarget=tmp;
              //alert('Target ' + this.isTarget+ ' tmp' + tmp);
            }, 3000);

          }
        }

        if(random==1){
          this.setan2=true;
          if(this.open2===true){
            //this.isTarget = true;
            var tmp = false;
            setTimeout(function(){
              //tmp=true;
              this.isTarget=tmp;
              //alert('Target ' + this.isTarget+ ' tmp' + tmp);
            }, 3000);

          }
        }

        if(random==2){
          this.setan3=true;
          if(this.open3===true){
            //this.isTarget = true;
            var tmp = false;
            setTimeout(function(){
              //tmp=true;
              this.isTarget=tmp;
              //alert('Target ' + this.isTarget+ ' tmp' + tmp);
            }, 3000);

          }
        }


      }

    }
  }
</script>
<style>
  .size50{
    font-size: 50px;
  }
  .size20{
    font-size: 20px;
  }
  .secs{
    height: 80px;
  }
  .note{
    height: 20px;
  }
  .play-page{
    padding: 20px 20px;
    height: 640px;
    width: 360px;
    cursor:pointer;
    background-color: #222222;
    color: #fff;
  }
  td{
    padding: 10px 10px;
  }
  .navigation{
    margin-top: 150px;
    padding: 10px 10px;
  }
  .navigationOver{
    color: #ffeb3b;
  }
</style>
