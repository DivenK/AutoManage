<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
      <layMenu></layMenu>
      </Col>
      <Col :span="spanRight">
      <layHeard></layHeard>
      <laycrumbs></laycrumbs>
       
      <router-view></router-view>
      <layfoot></layfoot>
      </Col>
    </Row>
  </div>
 
</template>

<script>
  import layMenu from '../components/Menu.vue'
  import layHeard from '../components/heard.vue'
  import laycrumbs from '../components/crumbs.vue'
  import layfoot from '../components/foot.vue'

export default {
    name: 'layout',
    data () {
      return {
        spanLeft: 3,
        spanRight: 21
      }
    },
    components: {
      'layMenu': layMenu,
      'layHeard': layHeard,
      'laycrumbs': laycrumbs,
      'layfoot': layfoot
    }
}
console.log('1111 layout')
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  
  }
  .layout-content {
    min-height: 550px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main {
    padding: 10px;
  }
  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
    margin-bottom: 5px;
  }
  .layout-menu-left {
    background: #464c5b;
    min-height: 700px;
  }
  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .layout-ceiling-main a {
    color: #9ba7b5;
  }
  .layout-hide-text .layout-text {
    display: none;
  }
  .ivu-col {
    transition: width .2s ease-in-out;
  }
</style>