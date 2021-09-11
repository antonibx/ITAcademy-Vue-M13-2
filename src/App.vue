<template>
  <div class="page">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/coets">Coets</router-link> |
      <router-link to="/carrera">Carrera</router-link>
    </div>
    <router-view/>
  </div>
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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page {
  min-height: 100vh;
  background-image: url('https://img.wallpapic.com/i1862-037-811/medium/space-purple-blue-astronomy-wallpaper.jpg');
  background-size: cover;
}
</style>
