<template>
  <div class="layout-content">
    <div class="layout-content-main"><h1>{{msg}}</h1></div>
    <div>
       <label for="">&nbsp &nbsp 目前这个模板都是只有相关的前端的部分，会采用swagger来规范后端的接口。</label>
       <Alert>
        &nbsp &nbsp 这个博客主要是用来学习VUE 的实践写的，其中用到的版本是<a href="https://cn.vuejs.org/v2/guide/index.html">VUE 2.0 </a>。 组件方面是 <a href="https://www.iviewui.com/docs/guide/introduce">IView</a> 。
        <template slot="desc">本人是前端小白，也是刚刚接触vue，欢迎需要学习的童鞋们一起讨论，先去相关官网网站了解基础后，来查看该博客会比较容易理解。<br/>
           QQ群：<label style="color:#ff9900;font-size:16px">293700533</label>     &nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp   问题密码：<label style="color:#ff9900;font-size:16px">VUE</label>
           
        </template>
       </Alert>
    </div>
  </div>
</template>
<script>
 
export default {
   name: 'Home',
   data () {
     return {
       msg: 'vue2.0开源博客@v0.0.1 版本',
       content: '本人是前端小白，也是刚刚接触vue，欢迎需要学习的童鞋们，先去相关官网网站了解基础后，来查看该博客会比较容易理解。'
     }
   }
}
</script>
