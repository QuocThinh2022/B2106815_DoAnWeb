<template>
  <div class="container">
    <app-header />
    <div class="row">
      <product-item v-for="product in products" :key="product._id" :product='product' class="product-item" />
    </div>
  </div>
</template>

<script>
import ProductItem from '../../components/admin/Product/ProductItem.vue';
import AppHeader from '../../components/admin/Header/AppHeader.vue';
import ProductService from "../../services/product.service";
export default {
  data() {
    return {
      products: [],
      message: "",
    };
  },
  components: {
    AppHeader,
    ProductItem,
  },
  watch: {
    '$route.query': 'getProducts'
  },
  methods: {
    async getProducts(path = '') {
      try {
        let query = this.$route.query;
        let path = "/?";
        for (let [key, value] of Object.entries(query)) {
          path += `${key}=${value}&`;
        }
        if (path === '/?')
          path = '';
        else
          path = path.slice(0, -1);
        const response = await ProductService.getAll(path);
        this.products = response.products;
      } catch (error) {
        console.log(error);
        this.$router.push({
          name: "notfound",
          params: {
            pathMatch: this.$route.path.split("/").slice(1)
          },
          query: this.$route.query,
          hash: this.$route.hash
        });
      }
    }
  },
  async created() {
    this.getProducts(), (this.message = "get products");
  }
};
</script>


