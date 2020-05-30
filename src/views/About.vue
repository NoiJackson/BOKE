<template>
  <div>
<!--    <el-button type="text" class="btn">登录</el-button>-->

    <div class="setForm">
      <el-form :model="ruleForm"
               status-icon
               :rules="rules"
               ref="ruleForm"
               label-width="80px"
               class="demo-ruleForm"
               method="post"
               autocomplete="on">


        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名" type="text" name="username" ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码" name="password" ></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="确认密码" name="password"></el-input>
        </el-form-item>

        <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
            { required: false, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]">

          <el-input v-model="ruleForm.email" placeholder="请输入邮箱账号"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" >注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'login',
    data() {
      //用户名
      const checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        callback();
      };
      //密码
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
      //确认密码
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        //导航条
        activeIndex: '1',
        activeIndex2: '1',

        //注册表
        ruleForm: {
          username: '',
          pass: '',
          checkPass: '',
          email: ''

        },
        rules: {
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },

      submitForm(formName) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('注册成功');
          } else {
            alert('error submit!!');
            return false;
          }
        });
      },

      resetForm(formName) {
        this.$refs.ruleForm.resetFields();
      },


    },
    created() {
      axios({
        url: ''
      }).then(res => {
        // console.log(res)
        this.reslut = res;
      }).catch(error => {
        console.log(error);
      })
    }
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

  /*.btn {*/
  /*  font-size: 20px;*/
  /*  margin-left: 20px;*/
  /*}*/








</style>
