<template>
  <div class="userinfo">
     <el-table :data="tableData" border style="width: 100%" height="600">
      <el-table-column prop="id" label="ID" width="150"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="150"> </el-table-column>
      <el-table-column prop="card" label="身份证号" width="250">
      </el-table-column>
      <el-table-column prop="phone" label="电话" width="250"> </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="danger" size="large"
            >编辑</el-button
          >
          <el-button type="primary" size="large" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import user from '@/api/user';

export default {
  methods: {
    handleEdit(e) {
      this.row = e;
      console.log(e);
    },
    handleDelete(e) {
      this.row = e;
      user.deleteUser(this.row.id).then((r) => console.log(r));
    },
  },
  async created() {
    await user.selectAll().then((r) => {
      console.log(r);
      this.tableData = r.data.data.data;
    });
  },

  data() {
    return {
      tableData: [],
      row: {},
    };
  },
};
</script>
<style scoped lang="less">
.userinfo{
  width: 100%;
}
</style>
