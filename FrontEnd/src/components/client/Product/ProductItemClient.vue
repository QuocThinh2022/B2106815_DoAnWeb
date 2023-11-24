<template>
  <div>
    <div class="product-img">
      <img :src="product.thumbnail" :alt="product.title" />
    </div>
    <div class="product-desc">
      <h5 class="product-title">{{product.title}}</h5>
      <p class="product-price">{{product.price.toLocaleString()}} đ</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['product'],
}
</script>

<style scoped>
.product-item {
  box-shadow: 0 4px 6px #00000045;
  padding: 20px;
  border-radius: 10px;
  width: calc(20% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  background: #fff;
}

.product-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>