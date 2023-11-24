<template>
  <div>
    <div class="product-img">
      <img :src="product.thumbnail" :alt="product.title" />
    </div>
    <div class="product-desc">
      <h5 class="product-title">{{product.title}}</h5>
      <p class="product-price">{{product.price.toLocaleString()}} đ</p>
    </div>
    <div class="product-handler">
      <button class="btn product-edit"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="btn product-undo" v-if="product.deleted"><i class="fa-solid fa-rotate-left"></i></button>
      <button class="btn product-delete" v-else @click="deleteProduct"><i class="fa-solid fa-trash"></i></button>
    </div>
  </div>
</template>

<script>
import ProductService from '../../../services/product.service';
export default {
    props: ['product'],
    methods: {
      async deleteProduct () {
        console.log(this.product._id);
        this.product = await ProductService.deleteTempProduct(this.product._id);
      }
    },
}
</script>

<style scoped>
.product-item {
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 20px;
  background: #fff;
  padding: 10px;
  border: 1px solid #00000045;
}

.product-img {
  width: 60px;
  height: 60px;
}

.product-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-desc {
  margin-left: 10px;
  flex: 1;
}

.product-price {
  color: rgb(246, 76, 76);
  font-size: 18px;
  font-weight: 600;
}
</style>