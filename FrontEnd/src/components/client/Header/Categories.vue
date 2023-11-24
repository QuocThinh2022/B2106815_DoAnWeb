<template>
  <nav class="nav d-flex justify-content-evenly">
    <router-link
      :to="{name: 'home', query: {category: category._id}}"
      v-for="category in productCategories"
      :key="category.id"
      class="category-item"
    >
      <img :src="category.thumbnail" alt="category.title" />
    </router-link>
  </nav>
</template>

<script>
import ProductCategoryService from "../../../services/productCategory.service";
export default {
  data() {
    return {
      productCategories: [],
      message: ""
    };
  },
  watch: {
    // Theo dõi biến nào đó và fetch lại dữ liệu khi nó thay đổi
    fetchDataTrigger: {
      handler() {
        this.getProductCategories();
      },
      immediate: true // để fetch dữ liệu ngay khi component được khởi tạo
    }
  },
  methods: {
    async getProductCategories() {
      try {
        const respone = await ProductCategoryService.getAll();
        this.productCategories = respone.productCategories;
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
    this.getProductCategories(), (this.message = "get product categories");
  }
};
</script>

<style scoped>
.category-item {
  width: 100px;
  height: 50px;
  margin: 0 10px;
  /* border: 1px solid #000; */
  text-align: center;
}

.category-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>