<template>
<div class="layout-header">
    <Row>
        <Col :span='4' offset="2">
        <Select v-model="search" filterable multiple>
           <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
        </Col>
        <Col :span='2' offset="16">
        <Dropdown>
            <Button type="ghost">
              <Icon type="android-person"></Icon>
              Admin
              <Icon type="arrow-down-b"></Icon>
             </Button>
            <DropdownMenu slot="list">
                <DropdownItem>
                    <Icon type="compose"></Icon> 账号设置</DropdownItem>
                <DropdownItem>
                    <Icon type="compose"></Icon> 修改密码</DropdownItem>
                <DropdownItem>
                    <Icon type="power"></Icon> 退出</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </Col>
    </Row>
</div>
</template>

<script>
export default {
  name: 'layHeard',
  data () {
    return {
      spanLeft: 3,
      spanRight: 21,
      cityList: [{
        value: 'beijing',
        label: '北京市'
      },
      {
        value: 'shanghai',
        label: '上海市'
      },
      {
        value: 'shenzhen',
        label: '深圳市'
      },
      {
        value: 'hangzhou',
        label: '杭州市'
      },
      {
        value: 'nanjing',
        label: '南京市'
      },
      {
        value: 'chongqing',
        label: '重庆市'
      }
      ],
      search: []
    }
  }
}
</script>

<style scoped>
.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    margin-top: 14px;
    margin-right: 3px;
}
</style>
