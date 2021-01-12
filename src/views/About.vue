<template>
  <div class="youtube">
    <div class="youtube-title">
      <h1 class="youtube-title-h1">Прокачай <br>свой YouTube!</h1>
    </div>
  </div>
  <div class="youtube-nav">
    <div id="insideNav">
      <router-link to="/youtubeLikes" style="text-decoration-line: none" active-class="youtube-left">
        <p class="rout-youtube-p left">Лайки</p>
      </router-link>
      <router-link to="/youtubeSubscribers" style="text-decoration-line: none" active-class="youtube-center">
        <p class="rout-youtube-p">Подписчики</p>
      </router-link>
      <router-link to="/youtubeViews" style="text-decoration-line: none" active-class="youtube-right">
        <p class="rout-youtube-p right">Просмотры</p>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

.youtube{
  display: flex;
}
.youtube-title{
  text-align: left;
  color: black;
  margin-left: 75px;
  margin-top: 15px;
}
.youtube-title-h1{
  font-size: 64px;
  font-weight: bold;
  width: 550px;
}
.youtube-nav{
  margin-top: 60px;
}
.rout-youtube-p{
  border: 1px solid darkgray;
  padding: 9px 40px;
}
.rout-youtube-p:hover{
  color: white;
  background-color: red;
}
.rout-youtube-p.left{
  border-radius: 20px 0 0 20px;
}
.rout-youtube-p.right{
  border-radius: 0 20px 20px 0;
}
.youtube-left{
  color: white;
  height: 45px;
  background-color: red;
  border: 1px solid red;
  border-radius: 26px 0 0 24px;
}
.youtube-center{
  color: white;
  height: 45px;
  background-color: red;
  border: 1px solid red;
}
.youtube-right{
  color: white;
  height: 45px;
  background-color: red;
  border: 1px solid red;
  border-radius: 0 26px 26px 0;
}

</style>