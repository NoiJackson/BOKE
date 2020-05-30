
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

            <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm">

              <el-form-item label="用户名" prop="username">
                <el-input
                    v-model="ruleForm.username"
                    placeholder="请输入用户名"
                    name="username"></el-input>
              </el-form-item>

              <el-form-item label="密码" prop="pass">
                <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                    placeholder="请输入密码"
                    name="password" @keyup.enter.native="submitForm"></el-input>
              </el-form-item>

              <el-form-item>
                <div class="submit">
                  <el-button
                      type="primary"
                      @click.native.prevent="submitForm('ruleForm')"
                      :loading="loading">
                    登录
                  </el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </div>
              </el-form-item>

                <br><br>
                <div class="sign-in">
                    <el-button style="background: Transparent;
                    border:none;"
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
  export default {
    data() {
      const checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        callback();
      };

      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        activeIndex1: '1',
        activeIndex: this.$route.path,

        ruleForm: {
          pass: '',
          username: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ]
        },
        loading: false
      };
    },
    methods: {
      handleSelect(key, keyPath) {
       // return  this.$route.path

      },

      submitForm(formName) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.loading = true;
            this.$store
              .dispatch('Login', this.ruleForm)
              .then(response => {
                this.loading = false;
                let code =  response.data.code;
                if (code === 200) {
                  this.$router.push({
                    path: '/first',
                    // query: {data: response.data.data}
                  });
                }else {
                  this.$router.push({
                    path: '/book'
                    // query: {message: response.data.message}
                  })
                }
              }).catch(() => {
                this.loading = false
            })
            alert('submit!')
            this.$router.replace('/first')
          } else {
            console.log('参数错误');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs.ruleForm.resetFields()
      },
      setId() {
        // alert('ok')
        this.$router.replace('/about')
      },
      created() {
        axios.post({
          url: 'http://localhost:8082/home'
        }).then(res => {
          // console.log(res)
          this.reslut = res;
        }).catch(error => {
          console.log(error);
        })
      }
    }
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
