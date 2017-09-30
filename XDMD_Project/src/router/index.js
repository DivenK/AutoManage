import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home/index.vue'

import layout from '@/components/layout.vue'

import login from '@/page/Login/login.vue'

import InputBlog from '@/page/Blogs/SubmitBlogs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: login
    },
    { path: '',
      component: layout,
      children: [
        {
        // 当 /layout/Home 匹配成功，嵌套路由的使用
        // Home 会被渲染在 layout 的 <router-view> 中
          path: 'Home',
          component: Home
        },
        {
          path: 'BlogC',
          component: InputBlog
        }
      ]
    }

  ]
})
