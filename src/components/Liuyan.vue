<template>
  <el-table :data="tableData" style="width: 100%" max-height="650">
    <el-table-column fixed prop="id" label="ID" width="150"> </el-table-column>
    <el-table-column prop="time" label="时间" width="200"> </el-table-column>
    <el-table-column prop="content" label="内容" width="200"> </el-table-column>
    <el-table-column prop="User.name" label="姓名" width="120">
    </el-table-column>
    <el-table-column prop="User.phone" label="电话" width="300">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.row, scope.$index, tableData)"
          type="button"
          size="large"
        >
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import Message from '@/api/message';

export default {
  methods: {
    async deleteRow(row, index, rows) {
      await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          Message.delete(row.id).then((r) => {
            console.log(r);
            rows.splice(index, 1);
          });
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
    },
  },
  data() {
    return {
      tableData: [],
    };
  },
  async created() {
    await Message.getAll().then((r) => {
      this.tableData = r.data.data.data;
    });
  },
};
</script>
