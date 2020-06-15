<template>
  <div id="app">
    <div class="container">
      <header class="row">
        <nav class="col-sm-12">
          <ul>
            <li class="nav-item">
              <img class="logo" src="./assets/build-a-bot-logo.png"
              alt="logo"/>
              Build-a-bot
            </li>
            <li class="nav-item">
              <b-icon-bag-fill></b-icon-bag-fill>
            </li>
          </ul>
        </nav>
      </header>
      <main class="row">
        <RobotBuilder />
      </main>
    </div>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
import RobotBuilder from './build/RobotBuilder.vue';

export default {
  name: 'app',
  components: {
    RobotBuilder,
  },
};
</script>
<style>
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
body {
  background:  linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  min-height: 300px;
}
header {
  background-color: #999;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
@media screen and (max-width: 767px) {
  .container {
    padding: 0;
  }
}
</style>
