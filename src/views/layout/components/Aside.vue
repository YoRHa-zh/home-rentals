<template>
  <div class="aside">
    <el-col :span="12">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-for="item in $store.state.menuRoutes">
          <el-menu-item
          :index="item.meta.id.toString()"
            :key="item.meta.id"
            v-if="
              $store.state.user.role === 'user'
                ? item.meta.isUser
                : !item.meta.isUser
            "
          >
            <router-link :to="item.path">
              <i :class="item.meta.icon"></i>
              {{ item.meta.title }}
            </router-link>
          </el-menu-item>
        </template>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped lang="less">
.aside {
  width: 100%;
  height: 100%;
  .el-col-12 {
    height: 100%;
    ul {
      height: calc(100% - 60px);
      a {
        display: inline-block;
        text-decoration: none;
        color: rgb(224, 210, 210);
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>
