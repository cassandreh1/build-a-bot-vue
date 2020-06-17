<template>
    <div id="cart-container" v-show="showCart">
      <table>
        <thead>
          <tr>
            <th>Shopping Cart
                <b-icon-x @click="closeBtn()"></b-icon-x>
            </th>
          </tr>
        </thead>
        <tbody>
            <tr v-if="items.length === 0"> You have no items in you cart</tr>
          <tr v-for="(robot, index) in items" :key="index">
            <td>
              <div class="preview">
                <div class="preview-content">
                  <div class="top-row">
                    <img :src="robot.head.src"/>
                  </div>
                  <div class="middle-row">
                    <img :src="robot.leftArm.src" class="rotate-left"/>
                    <img :src="robot.torso.src"/>
                    <img :src="robot.rightArm.src" class="rotate-right"/>
                  </div>
                  <div class="bottom-row">
                    <img :src="robot.base.src"/>
                  </div>
                </div>
              </div>
              <div class="details">
                 <div class="title">{{robot.head.title }}</div>
                 <div class="qty">QTY: {{robot.quantity}}</div>
                 <div class="cost">{{ robot.cost | currency }}</div>
              </div>
            </td>
          </tr>
          <tr v-if="items.length">
              <td>
                  <span class="title">Subtotal:</span>
                  <span class="content-right">{{ calculateSubTotal | currency}}</span>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
export default {
  name: 'ShoppingCart',
  props: {
    displayCart: Boolean,
    items: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      showCart: this.displayCart || false,
    };
  },
  computed: {
    calculateSubTotal() {
      let subtotal = 0;
      if (this.items.length) {
        this.items.forEach((item) => {
          subtotal += item.cost;
        });
      }
      return subtotal;
    },
  },
  methods: {
    closeBtn() {
      this.$emit('closeCart', false);
    },
  },
  watch: {
    displayCart() {
      this.showCart = this.displayCart;
    },
  },
  updated() {
    // console.log(this.items);
  },
};
</script>
<style lang="scss" scoped>
#cart-container {
    min-width: 230px;
    position: absolute;
    z-index: 2;
    background-color: #e6f4fd;
    right: 5px;
    top: 50px;
    border-radius: 5px;
    padding: 8px;
    color: #055d96;
}
.bi-x {
    float: right;
    font-size: 23px;
}
.cost {
//   text-align: right;
}
td, th {
  text-align: left;
  padding: 12px 5px;
  border-bottom: 1px solid #055d96;
}
.preview {
    float: left;
    margin-right: 10px;
}
.title {
    font-weight: bold;
}
.details {
    float: right;
}
.content-right {
  float: right;
}
.preview-content {
  border: 1px solid #055d96;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
@media screen and (max-width: 767px) {
    // #cart-container {
    //     top: 50px;
    // }
}
</style>
