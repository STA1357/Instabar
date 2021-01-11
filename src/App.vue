<template>
  <div id="nav">
    <router-link to="/">
      <i class="fab fa-viber" style="color: blueviolet"></i>
    </router-link>
    <router-link to="/about">
      <i class="fab fa-youtube" style="color: red"></i>
    </router-link>
    <router-link to="/tiktok">
      <i class="fab fa-tiktok" style="color: black;text-shadow: 1px 1px 2px red"></i>
    </router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  font-size: 38px;
  padding: 30px;

}

#nav a.router-link-exact-active {
}
i:hover{
  opacity: 0.7;
}

</style>
