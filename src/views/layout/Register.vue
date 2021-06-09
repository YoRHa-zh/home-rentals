<template>
  <div class="register">
    <div class="head">
    <el-page-header @back="goBack" content="返回登录页"> </el-page-header>
    </div>
    <h2>用户注册</h2>
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="form"
      label-width="100px"
      class="demo-form"
    >
      <el-form-item label="用户名" prop="name">
        <el-input type="text" v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="card">
        <el-input type="text" v-model="form.card" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from '@/api/register';

export default {
  data() {
    const checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }
      return callback();
    };
    const validateCard = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入身份证号'));
      }
      if (value.length !== 18) {
        return callback(new Error('身份证号码不正确'));
      }
      return callback();
    };
    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入手机号'));
      }
      if (value.length !== 11 || !value.startsWith(1)) {
        return callback(new Error('手机号不正确'));
      }
      return callback();
    };
    return {
      form: {
        name: '',
        card: '',
        phone: '',
      },
      rules: {
        card: [{ validator: validateCard, trigger: 'blur' }],
        phone: [{ validator: validatePhone, trigger: 'blur' }],
        name: [{ validator: checkName, trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
          await axios.register(this.form).then((r) => {
            console.log(r.data.data);
          });
          alert('注册成功!电话即是你之后的登录密码！');
          return this.$router.push({ name: 'Login' });
        }
        console.log('error submit!!');
        return false;
      });
    },
    resetForm(form) {
      this.$refs[form].resetFields();
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="less">
.register {
  h2 {
    margin: 0 30px 30px 0;
  }
  .head{
    margin-bottom: 30px;
  }
  width: 500px;
  height: 400px;
  border: 1px solid rgb(226, 224, 224);
  margin: 30px auto;
  padding: 50px;
}
</style>
