<template>
  <div class="liuyan">
    <el-table :data="tableData" style="width: 100%" max-height="500">
      <el-table-column fixed prop="id" label="ID" width="150">
      </el-table-column>
      <el-table-column prop="time" label="时间" width="200"> </el-table-column>
      <el-table-column prop="content" label="内容" width="200">
      </el-table-column>
      <el-table-column prop="User.name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="User.phone" label="电话" width="300">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="
              deleteRow(scope.row, scope.$index, tableData)
            "
            type="button"
            size="large"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pager">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="pageChange"
        :page-size="form.limit"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Message from '@/api/message';

export default {
  methods: {
    async deleteRow(row, index, rows) {
      await this.$confirm('此操作将永久删除该条留言信息, 是否继续?', '提示', {
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
    async pageChange(e) {
      this.form.page = e;
      await Message.getAll(this.form).then((r) => {
        this.tableData = r.data.data.data;
        this.total = r.data.data.total;
        this.tableData = this.tableData.filter((it) => it.User !== null);
      });
    },
  },
  data() {
    return {
      tableData: [],
      form: {
        page: 1,
        limit: 6,
      },
    };
  },
  async created() {
    await Message.getAll(this.form).then((r) => {
      this.tableData = r.data.data.data;
      this.total = r.data.data.total;
      this.tableData = this.tableData.filter((it) => it.User !== null);
    });
  },
};
</script>
<style scoped lang="less">
.liuyan {
  width: 100%;
  height: 100%;
  .pager {
    position: absolute;
    left: 300px;
    bottom: 70px;
  }
}
</style>
