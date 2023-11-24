<template>
  <form @submit.prevent="onSubmit" class="d-flex" role="search">
    <input
      class="form-control"
      type="search"
      v-model="searchQuery"
      @input="updateQuery"
      placeholder="Hom nay ban can tim gi?"
      aria-label="Search"
    />
    <button class="btn btn-outline-success" type="submit">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </form>
</template>

<script>
export default {
   data() {
    return {
      searchQuery: '',
    };
  },
  watch: {
    'searchQuery': 'onSubmit'
  },
  methods: {
    onSubmit() {
      if (this.searchQuery !== '')
          this.$router.push({query: Object.assign({}, this.$route.query, { title: this.searchQuery })});
      else
        this.$router.replace({'query': null});
    }
  }
};
</script>

<style scoped>
button {
  background: #00483d;
  color: #fff;
  border: 1px solid #00483d;
  border-radius: 0px 8px 8px 0px;
}

.form-control {
  border-right: 1px solid #00483d;
  border-radius: 8px 0px 0px 8px;
}

.form-control:focus {
  box-shadow: none;
  border-color: #00483d;
}
</style>