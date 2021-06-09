<template>
  <div class="userinfo">
    <el-table :data="tableData" border style="width: 100%" height="600">
      <el-table-column prop="id" label="ID" width="50"> </el-table-column>
      <el-table-column prop="address" label="地址" width="150">
      </el-table-column>
      <el-table-column prop="area" label="面积（平米）" width="110">
      </el-table-column>
      <el-table-column prop="floor" label="楼层" width="50"> </el-table-column>
      <el-table-column prop="rent" label="租金（元）" width="100">
      </el-table-column>
      <el-table-column prop="region" label="区域" width="100">
      </el-table-column>
      <el-table-column prop="model" label="房型" width="50"> </el-table-column>
      <el-table-column prop="direction" label="朝向" width="50">
      </el-table-column>
      <el-table-column prop="enviroment" label="周围环境" width="100">
      </el-table-column>
      <el-table-column prop="isDecoration" label="是否装修" width="50">
      </el-table-column>
      <el-table-column prop="User.name" label="联系人" width="80">
      </el-table-column>
      <el-table-column prop="User.phone" label="电话" width="130">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="large"
            >编辑</el-button
          >
          <el-button type="danger" size="large" @click="handle(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="edit">
      <el-dialog title="修改房屋信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="房屋地址" :label-width="formLabelWidth">
            <el-input v-model="row.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="面积" :label-width="formLabelWidth">
            <el-input v-model="row.area" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="楼层" :label-width="formLabelWidth">
            <el-input v-model="row.floor" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="租金" :label-width="formLabelWidth">
            <el-input v-model="row.rent" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="区域" :label-width="formLabelWidth">
            <el-input v-model="row.region" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="房型" :label-width="formLabelWidth">
            <el-input v-model="row.model" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="朝向" :label-width="formLabelWidth">
            <el-input v-model="row.direction" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="周围环境" :label-width="formLabelWidth">
            <el-input v-model="row.enviroment" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="是否装修" :label-width="formLabelWidth">
            <el-input v-model="row.isDecoration" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleEdit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import house from '@/api/house';

export default {
  methods: {
    async handleData(r) {
      this.tableData = r.data.data.data;
      this.tableData = await this.tableData.filter((it, index) => {
        if (it.isDecoration) {
          this.tableData[index].isDecoration = '是';
        } else {
          this.tableData[index].isDecoration = '否';
        }
        return this.$store.state.user.name === it.User.name;
      });
    },
    handleClick(e) {
      this.dialogFormVisible = true;
      this.row = e;
    },
    handle(e) {
      this.row = e;
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          house.delete(this.row.id).then((r) => {
            console.log(r);
            house.findAll(this.form).then((resp) => {
              this.handleData(resp);
            });
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
    async handleEdit() {
      this.row.isDecoration = this.row.isDecoration === '是' ? 1 : 0;
      await house.update(this.row.id, this.row).then(() => {
        house.findAll(this.form).then((resp) => {
          this.handleData(resp);
        });
        this.dialogFormVisible = false;
      });
    },
  },
  async created() {
    await house.findAll(this.form).then((r) => {
      this.handleData(r);
    });
  },

  data() {
    return {
      tableData: [],
      row: {},
      form: {
        page: 1,
        limit: 200,
        address: '',
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
    };
  },
};
</script>
<style scoped lang="less">
.userinfo {
  width: 100%;
  .search {
    position: relative;
    overflow: hidden;
    margin: 10px auto;
    :nth-child(1) {
      float: left;
      width: 50%;
      display: inline-block;
    }
    :nth-child(2) {
      position: absolute;
      left: 350px;
      display: inline-block;
    }
  }
  .edit {
    position: absolute;
    left: 50%;
    top: 50%;
  }
}
</style>
