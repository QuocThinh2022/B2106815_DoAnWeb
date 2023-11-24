<template>
  <div>
    <button class="check-order btn btn-outline-success">
      <div class="icon">
        <i class="fa-solid fa-truck-fast"></i>
      </div>
      <span class="text-order">
        Kiem tra
        <br />don hang
      </span>
    </button>
    <button class="cart btn">
        <i class="fa-solid fa-cart-arrow-down"></i>
    </button>
  </div>
</template>

<style scoped>
.check-order {
  display: inline-flex;
  align-items: center;
  height: 40px;
  margin-right: 10px;
  border: none;
  background: #00483D;
  color: #fff;
  border-radius: 12px;
  padding: 0 20px
}

.icon {
  font-size: 24px;
}

.text-order {
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
  line-height: 16px;
}

.cart {
  display: inline-flex;
  height: 40px;
  font-size: 32px;
  border: none;
  background: none;
  color: #00483D;
}

.cart :hover {
    color: #198754;
}
</style>