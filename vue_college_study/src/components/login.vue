<template>
<div class="login_vue">
      <img src="../../public/Gzlg.jpg">
  <div>
         <h3> Gz|理工 </h3>
        <p>与你的朋友一起分享 <br> 最新消息 和 乐趣时刻. </p>
  </div>
  <div>
        <h3>等你好久了</h3>
        <p>登录 Gz理工 来管理您的帐户.</p>
  </div>    
  <div>
      <div>
          <label>你的邮箱地址 </label>
      </div>
        <div class="">
          <span class="icon">
            <i class="icon-feather-mail"></i>
          </span>
          <input class="uk-input" type="email" placeholder="name@example.com">
      </div>

      <div>
            <label>密码 </label>
      </div>
      <div class="">
          <span class="icon">
            <i class="icon-feather-mail"></i>
          </span>
          <input class="uk-input" type="password" placeholder="********">
      </div>

      <div>
            <label>确认密码 </label>
      </div>
      <div class="">
          <span class="icon">
            <i class="icon-feather-mail"></i>
          </span>
          <input class="uk-input" type="password" placeholder="********">
      </div>

      <div class="">
          <div class="uk-width-expand@s">
            <p>没有账号? <el-button type="primary" @click="toRegist">注册一下</el-button></p>
          </div>
          <div class="uk-width-auto@s">
            <button type="submit" class="button primary">开启社交吧</button>
          </div>
      </div>
  </div>     
</div>
    <!-- <el-form label-width="100px" class="login_vue">
          <el-form-item label="你的邮箱地址">
              <el-input v-model="form.email" placeholder="name@example.com"></el-input>    
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
    </el-form> -->
</template>

<script>
export default {
  name:'login',
  // data() {
  //     return {
  //       form: {
  //         email: '',
  //         password: '',
  //       }
  //     }
  //   },
  //   methods: {
  //     onSubmit() {
  //       console.log(this.$data.form);
  //     }
  //   }
   methods: {
  toRegist() {
      this.$router.push('/regist').catch(err => err)     //    catch  定位到当前导航不报错 
    },
   }
}
</script>