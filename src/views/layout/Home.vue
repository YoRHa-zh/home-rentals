<template>
  <div class="home">
    <div class="header">
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
import user from '@/api/user';

export default {
  components: {
    Aside,
  },
  async created() {
    await user.selectAll().then((r) => console.log(r));
  },
  methods: {
    out() {
      this.$store.dispatch('loginOut');
      this.$router.go(0);
    },
  },
};
</script>
<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
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
    background-color: rgba(0, 0, 0, 0.11);
    line-height: 60px;
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
    text-align: center;
  }
}
</style>
