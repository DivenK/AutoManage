<template>
   <div class="layout-breadcrumb layout-breadcrumb-textcolor">
        <Breadcrumb>
          <BreadcrumbItem href="#">{{baseUrl}}</BreadcrumbItem>
          <BreadcrumbItem href="#">{{currentUlr}}</BreadcrumbItem>
        </Breadcrumb>
   </div>
</template>

<script>
export default {
  name: 'crumb',
  data () {
    return {
      currentUlr: '博客介绍',
      baseUrl: '首页'
    }
  },
  created () {
    var self = this
    console.log(self.$router)
  }
}
</script>

<style scoped>
 .layout-breadcrumb {
    padding: 10px 15px 0;
  }
  .layout-breadcrumb-textcolor{
        color: blue;
    }
   
</style>

