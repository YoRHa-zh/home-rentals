<template>
  <div class="charts">
    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
  </div>
</template>
<script>
import user from '@/api/user';

export default {
  data() {
    this.chartSettings = {
      area: true,
    };
    return {
      chartData: {
        columns: ['姓名', '发布房屋数量'],
        rows: [{
          name: 'zh',
          发布房屋数量: 100,
        }],
      },
    };
  },
  methods: {
    handleData(r) {
      const { data } = r.data.data;
      data.forEach((it) => {
        console.log(it.name);
        const obj = {
          name: it.name,
          发布房屋数量: 100,
        };
        this.chartData.rows.push(obj);
      });
      console.log(this.chartData.rows);
    },
  },
  async created() {
    await user.selectAll().then((r) => {
      this.handleData(r);
    });
  },
};
</script>
<style scoped lang="less" >
.charts {
  width: 100%;
  height: 100%;
  margin: 150px 200px 0 0;
}
</style>
