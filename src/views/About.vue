<template>
  <div>
<!--    <el-button type="text" class="btn">登录</el-button>-->

    <div class="setForm">
      <!-- 表单-->
      <el-form :model="ruleForm"
               status-icon
               ref="ruleForm"
               label-width="80px"
               method="post"
               :rules="rules"
               autocomplete="on">

        <!-- 用户名-->
        <el-form-item label="用户名" prop="username">
          <el-input
              v-model="ruleForm.username"
              placeholder="请输入用户名"
              type="text" name="username"
              @input="userNameLimit"
              @focus="focus"></el-input>
        </el-form-item>

        <!-- 密码-->
        <el-form-item label="密码" prop="pass">
          <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
              placeholder="请输入密码"
              @input="userPasswordLimit"
              name="password" ></el-input>
        </el-form-item>

        <!-- 确认密码-->
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
              type="password"
              v-model="ruleForm.checkPassword"
              autocomplete="on"
              placeholder="确认密码"
              name="password"></el-input>
        </el-form-item>

        <el-form-item>
          <!-- 注册按钮-->
          <el-button type="primary" @click="submitForm(ruleForm)" >注册</el-button>
          <!-- 重置按钮-->
          <el-button @click="resetForm(ruleForm)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>

  //导入axios
  import axios from 'axios'

  export default {
    data() {
      //检验用户名的函数
      const checkUsername = (rules, value, callback) => {
        if (!value) {
          //用户名不为空
          return callback(new Error('用户名不能为空'))
        } else {
          // 发送post请求
          const promise = axios.post('http://localhost:8082/home', {
            username: this.username,
            //跨域
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            //异步操作-对应数据库查询是否存在字段
          }).then(dat => {
            if (dat.data === '0') {
              console.log('用户名可用');
            } else if (dat.data === '1') {
              return callback(new Error('用户名已存在'))
            }
          })
          }
      };

      return {
        //注册表
        ruleForm: {
          username: '',
          password: '',
          checkPassword: ''
          // email: ''

        },
        //动态检验规则
        rules: {
          username: [
            {validator: checkUsername, trigger: 'blur'},
          ]
        }
      }
    },
    methods: {
      //限制用户名只能输入中文、英文、数字、下划线的函数
      userNameLimit() {
        // this.username = this.username.replace(/[^\a-\z\A-\Z0-9\u4e00-\u9fe5_]/g, '')
      },

      //限制密码只能输入英文、数字
      userPasswordLimit() {
        // this.password = this.password.replace(/[^\a-\z\A-\Z0-9]/g, '')
      },

      //获取焦点
      focus() {
        postMessage(null)
      },

      //注册按钮点击函数
      submitForm() {

        //用户名或者密码不能为空
        if (this.username !== '') {
          alert('用户名不为空')

        }else if (this.password !== '') {
          alert('密码不为空')

        } else {
          //发送post请求
          axios.post('http://localhost:8082/home', {
            username: this.username,
            password: this.password,
            //跨域
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            //异步操作-对应数据库查询是否存在字段
          }).then((dat) => {
            if (dat.data === "1") {
              alert('注册成功')
              this.$router.replace('/home')
            } else {
              alert('注册失败，请再试一次')
            }
          })
        }
      },


      //重置按钮点击函数
      resetForm() {
        this.$refs.ruleForm.resetFields();
      }

    },

  }
</script>

<style>
 * {
   padding: 0;
   margin: 0;

 }

 body {
   position: relative;
   background: url("../assets/img/bg4.jpg") no-repeat;
   width: 100%;
   height: 100%;
 }

  .setForm {
    /*position: absolute;*/
    /*float: bottom;*/
    margin-top: 10%;
    margin-left: 10%;
    width: 500px;
  }

  .el-form-item label{
    font-size: 15px;
    color: #1b1e21;
  }









</style>
