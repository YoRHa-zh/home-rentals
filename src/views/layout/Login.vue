<template>
  <div class="login">
    <h1>房屋租赁系统</h1>
    <h2>登录</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.loginId"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.loginPwd"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-radio-group v-model="form.role">
          <el-radio label="普通用户"></el-radio>
          <el-radio label="管理员"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Login">登录</el-button>
        <el-button type="primary" @click="Register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from '@/api/login';

export default {
  data() {
    return {
      form: {
        loginId: '',
        loginPwd: '',
        role: '普通用户',
      },
    };
  },
  methods: {
    async Login() {
      if (this.form.role === '管理员') {
        await axios.adminLogin(this.form).then((r) => {
          if (r.data.data === null) {
            alert('密码错误');
          }
          console.log(r);
          this.$store.dispatch('setUserInfo', r.data.data);
          this.$router.push('/vcharts');
        });
        return;
      }
      await axios.userLogin(this.form).then((r) => {
        console.log(r);
        if (r.data.data === null) {
          alert('密码错误');
        }
        this.$store.dispatch('setUserInfo', r.data.data);
        this.$router.push('/');
      });
    },
    Register() {
      return this.$router.push({ name: 'Register' });
    },
  },
};
</script>

<style scoped lang="less">
.login {
  width: 500px;
  height: 400px;
  border: 1px solid rgb(226, 224, 224);
  margin: 30px auto;
  padding: 50px;
  h1{
    text-align: center;
  }
  h2 {
    margin: 0 30px 30px 0;
  }
}
</style>
