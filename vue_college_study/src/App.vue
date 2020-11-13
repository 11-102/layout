<style src="../public/css/app.css"></style>
<style src="../public/css/components.css"></style>
<template>
  <div class="box">
      <div class="header">
        <!-- <el-button type="primary" icon="el-icon-menu" @click="toMore" circle></el-button> -->
             <!-- <img src="../public/Gzlg.jpg">  -->

        <router-link to="/home" class="tabs_2">首页</router-link>
        <router-link to="/find" class="tabs_3">发现</router-link>
        <!-- <div class="tabs_4"><p>搜索框</p></div> -->
        <!-- <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select> -->
        <el-input placeholder="请输入搜索内容" class="tabs_4"></el-input>
        <el-button type="primary" plain><router-link to="/login" class="tabs_5">登录</router-link></el-button>
        <el-button type="primary" class="tabs_6" @click="toRegist">注册加入</el-button>
        <router-view></router-view>
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="first"></el-tab-pane>
        <el-tab-pane label="发现" name="second"></el-tab-pane>
        </el-tabs> -->
      </div>
      <div class="main">
                <div class="left"></div>
                <div class="center"></div>   <!--  style="background-color: royalblue" -->
                <div class="right"></div>
      </div>
      <div class="footer">
        <div class=""></div>
      </div>
  </div>
</template>

<script>
// import '../public/app.css'      

export default {
  name: 'app',
  methods: {
  toRegist() {
      this.$router.push('/regist').catch(err => err)     //    catch  定位到当前导航不报错 
    },
  }
  }
</script>

