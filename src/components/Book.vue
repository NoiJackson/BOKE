<template>
  <div>
    <h2>哎呀，出错了</h2>
    <h3>{{msg}}</h3>
    <table>
      <tr>
        <td>编号</td>
        <td>图书名称</td>
        <td>作者</td>
      </tr>

      <tr v-for="item in books">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.author}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Book",
    data() {
      return {
        books: [
          {
            id: 1,
            name: '嘟嘟',
            author: '可爱'
          },
          {
            id: 2,
            name: '嘟嘟',
            author: '可爱'
          },
          {
            id: 3,
            name: '嘟嘟',
            author: '可爱'
          }
        ],
        msg: this.$route.query.data
      }
    }
  }
</script>

<style scoped>

</style>
