<template>
  <div>
    <h2>这是首页，嘟嘟最可爱</h2>
    <h3>登录成功，{{msg}}</h3>
  </div>

</template>

<script>
  export default {
    name: "First",
    data() {
      return {
        //msg: this.$route.query.data
        msg: null
      }
    },
    created() {
      this.msg = this.$route.query.message
    }
  }
</script>

<style scoped>

</style>
