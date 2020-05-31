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
      this.msg = '嘟嘟是最漂亮的小仙女'
    }
  }
</script>

<style scoped>

</style>
