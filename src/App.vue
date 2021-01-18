<template>
  <div class="container-fluid text-center" id="nav">
    <div class="row justify-content-center">
      <div class="col-2 col-md-4"></div>

        <div class="col-2 col-md-1 display-4 d-flex flex-row justify-content-center p-3 mr-1">
          <router-link to="/">
            <div class="nav-child">
              <i class="fab fa-instagram" style="color: dodgerblue"></i>
            </div>
          </router-link>
        </div>

          <div class="col-2 col-md-1 display-4 d-flex flex-row justify-content-center p-3">
          <router-link to="/about">
            <div class="nav-child">
              <i class="fab fa-youtube" style="color: red"></i>
            </div>
          </router-link>
          </div>

      <div class="col-2 col-md-1 display-4 d-flex flex-row justify-content-center p-3 ml-1">
      <router-link to="/tiktok">
            <div class="nav-child">
              <i class="fab fa-tiktok" style="color: black;text-shadow: 1px 1px 2px red"></i>
            </div>
          </router-link>

        </div>
      <div class="col-2 col-md-4"></div>
    </div>
  </div>

  <router-view/>
</template>

<style lang="scss">
  @import "./styles/_variables.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
}


#nav {
  margin-top: 20px;
}

#nav a {
  font-size: 48px;
  padding: 10px 20px;
}
a{
  color: $black;
}

#nav a.router-link-active {
  border: 1px solid $light-grey;
  border-radius: 50%;
  background-color: $light-grey;
}

i:hover{
  opacity: 0.7;
}
h1,h2,h3,h4,h5,h6{
  color: $black;
}
</style>
