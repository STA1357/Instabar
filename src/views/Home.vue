<template>
  <div class="home">
     <h1 class="homeTitle">Скидки до -50%
       <br>Успей заказать!</h1>
    <div class="clock" id="clock">
        <div class="timer"> {{ hours }} {{ minutes }} {{ seconds }} </div>
        <div class="timerTitle"></div>
    </div>

    <div class="sub-container">
        <div id="insideNav">
          <router-link to="/subscribers" style="text-decoration-line: none;">
            <p class="rout-p left">Подписчики</p>
          </router-link>
            <router-link to="/views" style="text-decoration-line: none">
                <p class="rout-p">Просмотры</p>
            </router-link>
            <router-link to="/likes" style="text-decoration-line: none">
                <p class="rout-p">Лайки</p>
            </router-link>
            <router-link to="/auto-likes" style="text-decoration-line: none">
                <p class="rout-p right">Авто Лайки</p>
            </router-link>
        </div>
      <router-view/>
    </div>

    <hr>
    <div class="info"></div>
    <div class="info"></div>
    <div class="info"></div>
    <HelloWorld/>
  </div>
</template>

<style>

  h5{
    color: black;
    padding: 10px;
    margin-top:15px;
  }

  h6{
    color: dodgerblue;
    padding: 10px;
    margin-bottom: 15px;
      font-weight: bold;
  }
 p{
   font-size: 16px;
 }

.rout-p{
    padding: 10px 40px;
    border: 1px solid lightgray;
}
.rout-p:hover{
    background-color: dodgerblue;
    color: white;
}
.rout-p.left{
    border-radius: 30px 0 0 30px;
}
.rout-p.right{
    border-radius: 0 30px 30px 0;
}
 #insideNav{
     display: flex;
     flex-direction: row;
     justify-content: center;
     margin: 5px;
 }

.homeTitle{
  color: black;
  font-weight: bold;
  font-size: 42px;
}
.timer{
  margin-top: 20px;
  font-size: 42px;
  font-weight: bold;
  color: black;
}

.info{
  display: none;
}


hr{
  width: 100px;
}
</style>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }
  },
  methods: {
    fakeTimer(){
      const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
      const x = setInterval(() => {
        const now = new Date(). getTime();
        const distance = countDownDate - now;
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) {
          clearInterval(x);
        }
      },0)
    }
  },
  mounted() {
    this.fakeTimer();
  },
  components: {
    HelloWorld
  }
}

</script>
