<template>
    <el-form :model="form" label-width="100px">
          <el-form-item label="你的用户名">
              <el-input  v-model="form.name" placeholder="请输入用户名"></el-input>    <!-- v-model双向绑定 -->
          </el-form-item>
          <el-form-item label="你的邮箱地址">
              <el-input v-model="form.email" placeholder="name@example.com"></el-input>    
          </el-form-item>
          <el-form-item label="密码">
              <el-input v-model="form.password"  placeholder="请输入8位及以上字符"></el-input>    
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>  
          </el-form-item>
    </el-form>
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
      }
    }
  }
</script>
<style>

</style>
