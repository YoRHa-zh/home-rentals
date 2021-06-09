<template>
  <div class="addhouse">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="面积" class="layout">
        <el-input v-model="form.area" class="a"></el-input>
      </el-form-item>
      <el-form-item label="楼层" class="layout">
        <el-input v-model="form.floor" class="a"></el-input> </el-form-item
      ><el-form-item label="租金" class="layout">
        <el-input v-model="form.rent" class="a"></el-input> </el-form-item
      ><el-form-item label="区域" class="layout">
        <el-input v-model="form.region" class="a"></el-input> </el-form-item
      ><el-form-item label="房型" class="layout">
        <el-input v-model="form.model" class="a"></el-input> </el-form-item
      ><el-form-item label="朝向" class="layout">
        <el-input v-model="form.direction" class="a"></el-input> </el-form-item
      ><el-form-item label="周围环境">
        <el-input v-model="form.enviroment"></el-input>
      </el-form-item>
      <el-form-item label="是否装修">
        <el-radio-group v-model="form.isDecoration">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import house from '@/api/house';

export default {
  data() {
    return {
      form: {
        address: '',
        area: '',
        floor: '',
        rent: '',
        region: '',
        model: '',
        direction: '',
        enviroment: '',
        isDecoration: null,
        UserId: this.$store.state.user.id,
      },
    };
  },
  methods: {
    add() {
      this.form.isDecoration = this.form.isDecoration === '是' ? 1 : 0;
      house.add(this.form).then((r) => {
        this.$message({
          type: 'success',
          message: '添加成功!',
        });
        console.log(r);
        this.$router.push('/myhouse');
      });
    },
  },
};
</script>

<style scoped lang="less">
.addhouse {
  width: 500px;
  height: 500px;
  border: 1px solid rgb(226, 224, 224);
  margin: 10px auto;
  padding: 50px;
  .layout{
   display:inline-block;
   float:left;
   width: 50%;
   .a{
     z-index: 999;
   }
  }
}
</style>
