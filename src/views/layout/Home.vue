<template>
  <div class="home">
    <div class="header">
      <div class="left">
        {{$store.state.user.role === "user"?'用户':'管理员'}}:
        {{$store.state.user.name || $store.state.user.loginId}}
      </div>
      <h2>房屋租赁系统</h2>
      <div class="right">
        <el-popconfirm
          confirm-button-text="退出"
          cancel-button-text="取消"
          icon="el-icon-info"
          icon-color="red"
          title="确定要退出登录吗？"
          @confirm="out"
        >
          <el-button slot="reference">退出</el-button>
        </el-popconfirm>
      </div>
    </div>
    <div class="aside">
      <Aside />
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Aside from '@/views/layout/components/Aside.vue';

export default {
  components: {
    Aside,
  },
  methods: {
    out() {
      this.$store.dispatch('loginOut');
      this.$router.push('/login');
    },
  },
};
</script>
<style scoped lang="less">
.home {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .aside {
    float: left;
    width: 300px;
    height: 100vh;
    overflow: hidden;
  }
  .header {
    position: relative;
    width: 100%;
    height: 60px;
    text-align: center;
    background-color: rgba(236, 227, 227, 0.897);
    line-height: 60px;
    .left{
      float: left;
      margin-left: 30px;
      font-weight: bolder;
      letter-spacing: 5px;
    }
    .right {
      width: 100px;
      position: absolute;
      z-index: 999;
      right: 0;
      overflow: hidden;
      margin-top: -60px;
    }
  }
  .main {
    overflow: hidden;
    height: 100vh;
    text-align: center;
  }
}
</style>
