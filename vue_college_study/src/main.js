import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
//  引入 router 文件夹里面的router.js  即引入路由
import router from './router/router'
//  引入 Vuex 存储管理  组件内容共享  共享头像 token  ....
import store from './store/store'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,     // 放入router
  store,     // 放入store
}).$mount('#app')