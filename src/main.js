'use strict'
// 1. 导入组件
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


// 引入自己的css
import '../statics/css/base.css'

// 使用vue-resource
Vue.use(VueResource)

// 使用路由
Vue.use(VueRouter)


// 2. 创建Vue对象
new Vue({
  el: '#app',
  render: c => c(App)
})