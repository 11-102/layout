<template>
    <el-form label-width="100px">
          <el-form-item label="你的邮箱地址">
              <el-input v-model="form.email" placeholder="name@example.com"></el-input>    <!-- v-model="form.name" -->
          </el-form-item>
          <el-form-item label="密码">
              <el-input v-model="form.password" placeholder="请输入密码"></el-input>    
          </el-form-item>
          <el-form-item label="确认密码">
              <el-input v-model="form.password"  placeholder="请确认您的密码"></el-input>    
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="onSubmit">开启社交吧</el-button>
          </el-form-item>
    </el-form>
</template>

<script>
export default {
  name:'login',
  data() {
      return {
        form: {
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