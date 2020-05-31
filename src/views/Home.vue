
<template>
  <div class="home">

    <el-container class="nav">
      <el-header>
        <div class="header">
        <!-- 导航条-->
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="Transparent"
            @select="handleSelect"
            text-color="#FFFFFF"
            active-text-color="#ffd04b">

          <el-submenu index="1">
            <template slot="title">我与俊秀</template>
            <el-menu-item index="1-1">生活轨迹</el-menu-item>
            <el-menu-item index="1-2">相册</el-menu-item>
            <el-menu-item index="1-3">情书</el-menu-item>
          </el-submenu>

            <el-menu-item index="/first">
              <a href="/first"
                 target="_blank"
                 style="text-decoration-line: none">
                首页
              </a>
            </el-menu-item>
            <el-menu-item index="/book">/
              <a href="/book"
                 target="_blank"
                 style="text-decoration-line: none">
                个人中心
              </a>
            </el-menu-item>
        </el-menu>
      </div>
      </el-header>
    </el-container>

      <el-container class="content">
        <!--登录-->
        <el-main>

          <div class="login">
            <h1 class="title">从此君王不早朝</h1>

<!--            //表单-->
            <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm">

<!--              //用户名-->
              <el-form-item label="用户名" prop="username">
                <el-input
                    v-model="ruleForm.username"
                    placeholder="请输入用户名"
                    name="username"></el-input>
              </el-form-item>

<!--              //密码-->
              <el-form-item label="密码" prop="password">
                <el-input
                    type="password"
                    v-model="ruleForm.password"
                    autocomplete="off"
                    placeholder="请输入密码"
                    name="password"
                    maxlength="16"
                    minlength="6"></el-input>
              </el-form-item>

<!--              //登录按钮-->
              <el-form-item>
                <div class="submit">
                  <el-button
                      type="primary"
                      @click="submitForm(ruleForm)">
                    登录
                  </el-button>

<!--                  //重置按钮-->
                  <el-button @click="resetForm(ruleForm)">重置</el-button>
                </div>
              </el-form-item>

                <br><br>

<!--                //注册按钮-->
              <div class="sign-in">
                <el-button style="background: Transparent;border:none;"
                           @click="setId">
                  注册
                </el-button>
                <el-button style="background: Transparent;
                   border:none;">
                  忘记密码
                </el-button>
              </div>
            </el-form>
          </div>
        </el-main>
      </el-container>


  </div>
</template>

<script>
  //导入axios
  import axios  from 'axios'

  export default {
    data() {
      //检验用户名不为空的函数
      const checkUsername = (rules, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        }
        callback()
      };

      return {
        //导航条的设置
        activeIndex1: '1',
        activeIndex: this.$route.path,

        //用户名和表单的data
        ruleForm: {
          username: '',
          password: ''
        },

        //失去焦点-检验用户名不为空
        rules: {
          username: [
            {validator: checkUsername, trigger: 'blur'},
          ]
        }
      }

      },
    methods: {
      //导航条默认选中函数
      handleSelect() {
        console.log(key, keyPath)
      },

      //登录规则函数
      submitForm() {
        //发送post请求
        axios.post('http://localhost:8082/home', {
          username: this.username,
          password: this.password,

          //跨域
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).then((dat) => {
          //处理异步函数,判断数据与收据库中是否一致
          if (dat.data === '0') {
            alert('用户不存在，请重新输入')
          }else if (dat.data === '1') {
            alert('登录失败，账号或者密码错误')
          }else if (dat.data === '2') {
            //登录成功，页面跳转
            this.$router.push('/first')
          }
        }).catch((error) => {
          //传输错误
          console.log('传输失败');
        })
      },

      //重置按钮对应的函数
      resetForm() {
        this.$refs.ruleForm.resetFields()
      },

      //注册按钮点击函数
      setId() {
        this.$router.replace('/about')
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
    background:url("../assets/img/login.jpg") no-repeat fixed;
    background-size:100% 100% ;

  }
  .el-header {
    color: #333;
    line-height: 60px;
  }

  .el-main {
    color: #333;
    /*text-align: center;*/
    /*line-height: 1700px;*/
    margin-top: 200px;
    /*margin-left: 300px;*/
  }



  button {
    border-radius: 20px
  }

  .header {
    position: fixed;
  }

  .login {
    position: fixed;
    width: 30%;
    margin-left: 20%;
  }

  .content {
    width: 1800px;
    height: 800px;
  }

  .sign-in {
    margin-left: 60%;
  }

  /*.footer {*/
  /*  position: fixed;*/
  /*  margin-left: 30%;*/
  /*}*/

  .submit {
    margin-left: 50%;
  }

  /*.contact {*/
  /*  margin-right: 30px;*/
  /*}*/

  .title {
    text-align: center;
    margin-bottom: 50px;
    color: #70442b;
  }





</style>
