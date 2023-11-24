<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-5 col-5">
          <logo />
        </div>
        
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-5" v-if="window.width > 767">
          <input-search />
        </div>

        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 d-flex justify-content-end">
          <cart />
        </div>
      </div>
      <div class="row justify-content-center mt-3" v-if="window.width <= 767">
        <div class="col-10" >
          <input-search />
        </div>
      </div>
      <div class="row">
        <categories />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "../Header/Logo.vue";
import Categories from "../Header/Categories.vue";
import InputSearch from "../Header/InputSearch.vue";
import Cart from "../Header/Cart.vue";

export default {
  name: "App",
  components: {
    Logo,
    Categories,
    InputSearch,
    Cart
  },

  data() {
    return {
        window: {
        width: 0,
        height: 0
        }
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  }
};
</script>

<style scoped>
.header {
  padding-top: 20px;
  /* background: olive; */
}

/* .row div {
    border: 1px solid #000;
} */
</style>