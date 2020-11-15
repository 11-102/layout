<template>
<div class="register_box">
  <div class="register_left"></div>
  <div class="register_center">
      <div class="register_logo"><img src="../../public/logo.png"></div>
      <div class="register_vue">
      <el-form :model="form" label-width="100px">
            <el-form-item label="你的用户名">
                <el-input  v-model="form.name" placeholder="请输入用户名"></el-input>    <!-- v-model双向绑定 -->
            </el-form-item>
            <el-form-item label="你的邮箱地址">
                <el-input v-model="form.email" placeholder="name@example.com"></el-input>    
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password" placeholder="请输入8位及以上字符"></el-input>    
            </el-form-item>
            <el-form-item>
                <el-button @click="toLogin">我有账号&nbsp;跳转登录</el-button>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>  
            </el-form-item>
      </el-form>
      </div>
  </div>
  <div class="register_right"></div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.$data.form);
      },
      toLogin() {
        this.$router.push('/login');
      },
    }
  }
</script>
<style>

</style>
