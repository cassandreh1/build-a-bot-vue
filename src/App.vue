<template>
  <div id="app">
    <header class="row">
        <nav class="col-sm-12">
          <ul id="nav-list">
            <li class="nav-item">
              <img class="logo" src="./assets/build-a-bot-logo.png"
              alt="logo"/>
              BUILD A ROBOT
            </li>
          </ul>
          <div id="bag-icon" @mouseover="viewCart">
            <b-icon-bag-fill></b-icon-bag-fill>
          </div>
        </nav>
      </header>
      <div class="row no-gutters">
        <div class="col-sm-12" id="hero-section">
          <h1>Welcome to BUILD A ROBOT!</h1>
          <p>Where you can custom build your robot.</p>
        </div>
      </div>
    <div class="container-fluid">
      <main class="row justify-content-center">
        <div class="col-sm-12 col-md-6">
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div id="headingOne">
                <h2 class="mb-0">
                  <button class="btn btn-link btn-block text-center"
                  type="button" data-toggle="collapse"
                  data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Let's get started!
                  </button>
                </h2>
              </div>

              <div id="collapseOne" class="collapse show"
              aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  <ul>
                    <li>Use the arrows around the robot's parts to nagivate and select
                      the head, left arm, torso, right arm, and base of your robot </li>
                    <li>The product details will list out the pricing of each robot parts</li>
                    <li>Once you're satisfied with your selections,
                      simply add it to your cart </li>
                  </ul>
                  <p>Happy Shopping!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShoppingCart
          :displayCart="showCart"
          :items="cartItems"
          @closeCart="hideCart"/>
        <RobotBuilder @selectedRobot="handleSelected"/>
      </main>
    </div>
    <footer>
      <div class="row no-gutters">
        <div class="col-sm-12">
          <p>©2020 Cassandre Henriquez | All rights reserved</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
import RobotBuilder from './components/RobotBuilder.vue';
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  name: 'app',
  data() {
    return {
      showCart: false,
      cartItems: [],
    };
  },
  components: {
    RobotBuilder,
    ShoppingCart,
  },
  methods: {
    viewCart() {
      this.showCart = true;
    },
    handleSelected(selectedValue) {
      this.showCart = true;
      this.cartItems = selectedValue;
    },
    hideCart(value) {
      this.showCart = value;
    },
  },
};
</script>
<style>
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
body {
  background-attachment: fixed;
}
</style>
<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main {
  margin: 0 auto;
  background-color: white;
  min-height: 300px;
  .accordion {
    margin-top: 10px;
    .card #collapseOne{
      border: 1px solid rgba(0, 0, 0, 0.125);
    }
  }
}
#hero-section {
  text-align: center;
  background-color: #f7f7f7;
  h1 {
    margin-top: 1rem;
    color: #ffc107;
    font-weight: bold;
    margin-bottom: 0;
  }
}
.card-body p {
  text-align: center;
}
header {
  background-color: #2471A3;
  color: white;
  margin: 0 auto;
}
#nav-list {
  padding-top: 10px;
  float: left;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  // border-right: 2px solid white;
}
.logo {
  vertical-align: sub;
  height: 30px;
}
#bag-icon {
  width: 60px;
  text-align: right;
  margin-right: 40px;
  float: right;
  margin-top: 18px;
  margin-bottom: 1rem;
  svg {
    height: 30px;
    width: 22px;
  }
}

footer div.col-sm-12 {
    line-height: 4;
    text-align: center;
    background-color: #2471A3;
    color: white;
}
@media screen and (max-width: 767px) {
  .container {
    padding: 0;
  }
  #nav-list {
    padding-left: 0;
  }
  #bag-icon {
    margin-right: 0
  }
}
</style>
