<style src="../public/css/app.css"></style>
<style src="../public/css/components.css"></style>
<template>
  <div class="box">
      <div class="header">
        <!-- <el-button type="primary" icon="el-icon-menu" @click="toMore" circle></el-button> -->

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
        <div class="fooA">
          <div class="fooA1">
              <div class="fooA1_1">
                <p>tel:15626273440<br>鸿亮开发<br>
                   QQ:1007807393@qq.com</p>
              </div>
              <div class="fooA1_2">
                  <p>Copyright©广州理工学院<br>
                   地址：广州市白云区太和兴太三路638号　邮编：510540</p>
              </div>
          </div>
          <div class="fooA2">
              <div class="fooA2_1">
                <p>招生咨询电话:020-87478354 87478449&nbsp;&nbsp;传真:020-87478354<br>
                   粤ICP备13049318号</p>
              </div>
              <div class="fooA2_2">
                <p><a href="../public/call.html">联系我们</a> | <a href="http://www.thxy.cn">学校官网</a></p>
                <p>测试一下</p>
              </div>
          </div>
        </div>
        <div class="fooB" @click="backtop"><i class="el-icon-caret-top">返回顶部</i></div>
      </div>
</div>
</template>

<script>  
export default {
  name: 'app',
  mounted() {    // 点击返回顶部 按钮后  1
       window.addEventListener("scroll",this.showbtn,true);   
    },
  methods: {
  toRegist() {
      this.$router.push('/regist').catch(err => err)     //    catch  定位到当前导航不报错 
    },/**
        * 回到顶部功能实现过程：
        * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
        * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
        * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
        * 4. 最后记得在移动到顶部时，清除定时器
      */
   // 显示回到顶部按钮       2
  showbtn(){
          let that = this;
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          that.scrollTop = scrollTop
  },   // 回到顶部按钮的方法  3
  backtop(){
          var timer = setInterval(function(){
            let osTop = document.documentElement.scrollTop || document.body.scrollTop;
            let ispeed = Math.floor(-osTop / 5); 
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            this.isTop = true;
            if(osTop === 0){
              clearInterval(timer);
            }
          },30)
        }
  }
  }
</script>