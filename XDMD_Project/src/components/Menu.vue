<template>
   <Menu  theme="dark" width="auto" open-names="" active-name="">
        <div class="layout-logo-left"></div>
        <Submenu :name='index' v-for="(item,index) in menuList" :key="item.id" >
          <template slot="title">
            <Icon :type="item.icon"></Icon>
              {{item.title}}
          </template>
          <Menu-item :name="index+'-'+subindex" v-for="(subitem,subindex) in item.content" :key=subitem.id >{{subitem.subTitle}}</Menu-item>
      
        </Submenu>
     
   </Menu> 
</template>

<script>
  export default {
    name: 'layMenu',
    data () {
      return {
        spanLeft: 3,
        spanRight: 21,
        menuList: []
      }
    },
    created () {
      var self = this
      self.GetMenus()
    },
    methods: {
      GetMenus (key) {
        var self = this
        self.menuList = [{
          title: '个人中心',
          icon: 'ios-navigate',
          content: [{
            subTitle: '个人资料'
          },
          {
            subTitle: '修改密码'
          }]
        },
        {
          title: '博客管理',
          icon: 'ios-keypad',
          content: [{
            subTitle: '发布文章'
          },
          {
            subTitle: '文章列表'
          },
          {
            subTitle: '文章分类'
          },
          {
            subTitle: '评论列表'
          }]
        },
        {
          title: '定时任务管理',
          icon: 'ios-analytics',
          content: [{
            subTitle: '任务管理'
          },
          {
            subTitle: '新闻抓取管理'
          }]
        }]
      }
    }
  }
</script>

<style scoped>
 .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
</style>