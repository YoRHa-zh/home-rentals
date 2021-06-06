<template>
  <div class="userinfo">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="120"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="card" label="身份证号" width="200">
      </el-table-column>
      <el-table-column prop="phone" label="电话" width="200"> </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import user from '@/api/user';

export default {
  methods: {
    handleClick(row) {
      console.log(row);
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
    };
  },
};
</script>
<style scoped lang="less">
.userinfo{
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
