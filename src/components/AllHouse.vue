<template>
  <div class="userinfo">
    <div class="search">
      <el-input
        v-model="form.address"
        placeholder="按地区关键字查询"
      ></el-input>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%" height="511">
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
      <el-table-column prop="User.name" label="联系人" width="100">
      </el-table-column>
      <el-table-column prop="User.phone" label="电话" width="150">
      </el-table-column>
    </el-table>
    <div class="pager">
      <el-pagination background layout="prev, pager, next" :total="total"
      @current-change="pageChange" :page-size="form.limit">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import house from '@/api/house';

export default {
  methods: {
    async handleData(r) {
      this.tableData = r.data.data.data;
      await this.tableData.forEach((it, index) => {
        if (it.isDecoration) {
          this.tableData[index].isDecoration = '是';
        } else {
          this.tableData[index].isDecoration = '否';
        }
        if (it.User === null) {
          house.delete(it.id);
        }
      });
      this.tableData = await this.tableData.filter((it) => it.User !== null);
    },
    async search() {
      await house.findAll(this.form).then((r) => {
        this.total = r.data.data.total;
        this.handleData(r);
      });
    },
    async pageChange(e) {
      this.form.page = e;
      await house.findAll(this.form).then((r) => {
        this.total = r.data.data.total;
        this.handleData(r);
      });
    },
  },
  async created() {
    await house.findAll(this.form).then((r) => {
      this.total = r.data.data.total;
      this.handleData(r);
    });
  },

  data() {
    return {
      tableData: [],
      total: 0,
      form: {
        page: 1,
        limit: 6,
        address: '',
      },
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
    }
    :nth-child(2) {
      position: absolute;
      left: 350px;
      display: inline-block;
    }
  }
  .pager{
    position: absolute;
    right: 30px;
    bottom: 30px;
  }
}
</style>
