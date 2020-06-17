<template>
  <div class="col-sm-12">
    <div class="row no-guttters content">
      <div class="col-sm-12 col-md-6 padding-top-bottom-20">
        <div class="top-row">
          <PartSelector
          :parts="availableParts.heads"
          position="top"
          @partSelected="part => selectedRobot.head = part"/>
        </div>
        <div class="middle-row">
          <PartSelector
            :parts="availableParts.arms"
            position="left"
            @partSelected="part => selectedRobot.leftArm = part"/>
          <PartSelector
            :parts="availableParts.torsos"
            position="center"
            @partSelected="part => selectedRobot.torso = part"/>
          <PartSelector
            :parts="availableParts.arms"
            position="right"
            @partSelected="part => selectedRobot.rightArm = part"/>
        </div>
        <div class="bottom-row">
          <PartSelector
          :parts="availableParts.bases"
          position="bottom"
          @partSelected="part => selectedRobot.base = part"/>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 padding-top-bottom-20" id="product-details">
        <h1 class="blue-color">{{ selectedRobot.head.title }} -
          <span id="total-cost">{{ totalCost | currency }}</span></h1>
        <h4>Product details:</h4>
        <h6>Head - {{ selectedRobot.head.cost | currency }}</h6>
        <p>{{ selectedRobot.head.description }}</p>
        <h6>Left Arm - {{ selectedRobot.leftArm.cost | currency}}</h6>
        <p>{{ selectedRobot.leftArm.description }}</p>
        <h6>Torso - {{ selectedRobot.torso.cost | currency }}</h6>
        <p>{{ selectedRobot.torso.description }} <br>
          <a href="javascript:void(0)" v-if="!showMore" @click="showMore = true">See more...</a>
        </p>
        <span v-show="showMore">
          <h6>Right Arm - {{ selectedRobot.rightArm.cost | currency }}</h6>
          <p>{{ selectedRobot.rightArm.description }}</p>
          <h6>Base - {{ selectedRobot.base.cost | currency }}</h6>
          <p>{{ selectedRobot.base.description }}</p>
        </span>
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="input-group flex-nowrap">
              <div class="input-group-prepend">
                <span class="input-group-text blue-color" id="addon-wrapping">QTY:</span>
              </div>
              <input
                v-model="quantity"
                type="number"
                class="form-control"
                min="1"
                aria-label="quantity"
                aria-describedby="addon-wrapping">
            </div>
              <div class="alert alert-danger" role="alert" v-show="isQtyValid">
                Please enter a quantity.
              </div>
          </div>
          <div class="col-sm-12 col-md-6 button-wrapper">
            <button class="add-to-cart btn btn-warning" @click="addToCart()">Add to Cart </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartSelector from './PartSelector.vue';
import availableParts from '../data/parts';
import createdHookMixin from './created-hook-mixin';

export default {
  name: 'RobotBuilder',
  components: { PartSelector },
  data() {
    return {
      availableParts,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {},
      },
      totalCost: 0,
      showMore: false,
      quantity: 1,
      isQtyValid: false,
    };
  },
  mixins: [createdHookMixin],
  computed: {
    salesBorderClass() {
      return this.selectedRobot.head.onSale ? 'sales-border' : '';
    },
    headBorderStyle() {
      return {
        border: this.selectedRobot.head.onSale
          ? '3px solid red'
          : '3px solid gray',
      };
    },
  },
  watch: {
    selectedRobot: {
      handler() {
        const { cost } = this.calculateCost();
        this.totalCost = cost;
        this.showMore = false;
        this.quantity = 1;
      },
      deep: true,
    },
    quantity() {
      if (this.quantity) this.isQtyValid = false;
    },
  },
  methods: {
    calculateCost() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost
      + robot.leftArm.cost
      + robot.torso.cost
      + robot.rightArm.cost
      + robot.base.cost;
      return { robot, cost };
    },
    addToCart() {
      if (!this.quantity) {
        this.isQtyValid = true;
        return;
      }
      this.isQtyValid = false;
      // eslint-disable-next-line prefer-const
      let { cost, robot } = this.calculateCost();
      cost *= this.quantity;
      this.cart.push(Object.assign({}, robot, { cost, quantity: this.quantity }));
      this.$emit('selectedRobot', this.cart);
    },
  },
};
</script>
// adding lang attribut to use sass
<style lang="scss">
.padding-top-bottom-20 {
  padding-top: 30px;
  padding-bottom: 20px;
}
.button-wrapper {
  margin-top: 0;
  padding-bottom: 50px;
  .add-to-cart.btn-warning {
    color: red;
    font-weight: bold;
    font-size: 16px;
  }
}
#total-cost {
  font-size: 25px;
}
.blue-color {
  color: #055d96 !important;
}
h1 {
  margin-bottom:2rem;
}
h4 {
  margin-bottom: 10px;
  border-bottom: 1px solid #055d96;
}
h6 {
  margin-bottom: 0;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.sales-border {
  border: 3px solid red;
}
@media screen and (max-width: 767px) {
  .button-wrapper {
    margin-top: 30px;
    .add-to-cart {
      width: 100%;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 992px) {
  #product-details {
    padding-right: 0px;
    padding-left: 24px;
  }
}
@media screen and (min-width: 768px) {
  .button-wrapper {
      padding-left: 0 !important;
  }
}
@media screen  and (min-width: 992px){
  .add-to-cart {
    width: 50%;
  }
}
</style>
