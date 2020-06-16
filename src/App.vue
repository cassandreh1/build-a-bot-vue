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
          <h3>Welcome to BUILD A ROBOT!</h3>
          <p>Where you can build your own customize robot of you're likings.</p>
        </div>
      </div>
    <div class="container">
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
                    <li>You can use the arrow to nagivate and select the Head, Left Arm,
                      Torso, Right Arm, and Base of your robot </li>
                    <li>The product details will list out the pricing of robort parts</li>
                    <li>Once you're satisfied with your selections,
                      simply add it to your Cart. </li>
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
  .container {
    .accordion .card #collapseOne{
      border: 1px solid rgba(0, 0, 0, 0.125);
    }
  };
}
#hero-section {
  text-align: center;
  background-color: #f7f7f7;
  h3 {
    color: #ffc107;
  }
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
  padding-right: 40px;
  float: right;
  margin-top: 18px;
  margin-bottom: 1rem;
  svg {
    height: 30px;
    width: 22px;
  }
}
@media screen and (max-width: 767px) {
  .container {
    padding: 0;
  }
  #nav-list {
    padding-left: 0;
  }
  #bag-icon {
    padding-right: 0
  }
}
</style>
