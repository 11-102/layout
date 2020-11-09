<template>
  <div class="box">
      <div class="container">
      <div class="topnav">
      <!-- <el-button type="primary" icon="el-icon-menu" @click="toMore" circle></el-button> -->
      <el-dropdown>
            <span class="el-dropdown-link">更多<i class=""></i>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
      <router-link to="/home" class="home">首页</router-link>
      <router-link to="/find" class="explore">发现</router-link>
      <router-link to="/login" class="login">登录</router-link>
      <el-button type="primary" class="register" @click="toRegist">注册加入</el-button>
      <router-view></router-view>
      <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="first"></el-tab-pane>
        <el-tab-pane label="发现" name="second"></el-tab-pane>
      </el-tabs> -->
      </div>
      </div>
  </div>
</template>

<script>
import '../public/app.css'      
// import '../public/css/search.css' 
export default {
  name: 'app',
  methods: {
  toRegist() {
      this.$router.push('/regist').catch(err => err)     //    catch  定位到当前导航不报错 
    },
  }
}
</script>

