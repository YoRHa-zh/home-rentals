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
          <el-button
            type="primary"
            size="large"
            @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="edit">
      <el-dialog title="修改房屋信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="row.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="身份证" :label-width="formLabelWidth">
            <el-input v-model="row.card" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="row.phone" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="edit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import user from '@/api/user';

export default {
  methods: {
    async edit() {
      await user.updateUser(this.row.id, this.row).then(() => {
        user.selectAll().then((r) => {
          this.tableData = r.data.data.data;
        });
      });
      this.$message({
        type: 'success',
        message: '修改成功!',
      });
      this.dialogFormVisible = false;
    },

    handleEdit(e) {
      this.row = e;
      this.dialogFormVisible = true;
    },
    handleDelete(e) {
      this.row = e;
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          user.deleteUser(this.row.id).then((r) => console.log(r));
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
          user.selectAll().then((r) => {
            this.tableData = r.data.data.data;
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
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
      dialogFormVisible: false,
    };
  },
};
</script>
<style scoped lang="less">
.userinfo {
  width: 100%;
}
</style>
