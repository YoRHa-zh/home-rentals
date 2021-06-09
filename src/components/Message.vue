<template>
  <div class="message">
    <el-table :data="tableData" style="width: 100%" max-height="650">
      <el-table-column fixed prop="id" label="ID" width="150">
      </el-table-column>
      <el-table-column prop="time" label="时间" width="200"> </el-table-column>
      <el-table-column prop="content" label="内容" width="200">
      </el-table-column>
      <el-table-column prop="User.name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="User.phone" label="电话" width="300">
      </el-table-column>
    </el-table>
    <div class="btn">
      <el-button type="primary" size="large" @click="dialogFormVisible = true"
        >我要留言</el-button
      >
      <el-dialog title="添加留言" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="内容" :label-width="formLabelWidth">
            <el-input
              v-model="form.content"
              autocomplete="off"
              type="textarea"
              :rows="7"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addMessage">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Message from '@/api/message';

export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: this.$store.state.user.name,
        phone: this.$store.state.user.phone,
        UserId: this.$store.state.user.id,
        time: '',
        content: '',
      },
      formLabelWidth: '120px',
    };
  },
  async created() {
    await Message.getAll().then((r) => {
      this.tableData = r.data.data.data;
    });
  },
  methods: {
    async addMessage() {
      this.form.time = new Date().toLocaleString();
      await Message.add(this.form).then(() => {
        this.dialogFormVisible = false;
        this.$message({
          type: 'success',
          message: '留言成功!',
        });
      });

      await Message.getAll().then((r) => {
        this.tableData = r.data.data.data;
      });
    },
  },
};
</script>
<style scoped lang="less">
.message {
  width: 100%;
  height: 100%;
  overflow: scroll;
  .btn {
    margin: 80px;
    width: 50px;
    float: right;
  }
}
</style>
