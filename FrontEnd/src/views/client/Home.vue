<template>
  <div class="container">
    
    <app-header />
    <h1>page home</h1>
    <div class="row d-flex flex-wrap">
      <product-item-client v-for="product in products" :key="product.id" :product = "product" class="product-item" />
    </div>
  </div>
</template>

<script>
import ProductItemClient from '../../components/client/Product/ProductItemClient.vue';
import AppHeader from '../../components/client/Header/AppHeader.vue';
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
    ProductItemClient,
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

        // const response = await axios.get('api/product');
        // this.products = response.data.products;

        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // this.products = response.data;
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


