<template>
<div class="center">
<div class="loginform">

<Form ref="formInline" :model="formInline" :rules="ruleInline" >
    <FormItem prop="">
     <label>{{message}}</label>
    </FormItem>
    <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
    </FormItem>
    <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
    </FormItem>
    <FormItem>
        <Button type="primary" class="btn_width"  @click="handleSubmit('formInline')">登录</Button>
        <Button type="info"class='but_marginright btn_width'>注册</Button>
    </FormItem>
</Form>
</div>
</div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      message: '登陆vue初体验',
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [{
          required: true,
          message: '请填写用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请填写密码',
          trigger: 'blur'
        },
        {
          type: 'string',
          min: 6,
          message: '密码长度不能小于6位',
          trigger: 'blur'
        }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      const self = this
      console.log(self.formInline.password)
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.password)
          if (this.formInline.user === 'admin' && this.formInline.password === '123456') {
            this.$Message.success('提交成功!')
            self.$router.push({path: '/Home'})
            return
          }
          this.$Message.error('账号密码验证失败!')
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    }
  }
}
</script>

<style scoped>
 .loginform{
     width: 270px;
     height: 250px;
     margin: auto;
     margin-top: 200px;
 }
 .but_marginright{
     margin-left:85px; 
 }
 .btn_width{
   width:90px;
 }
</style>

