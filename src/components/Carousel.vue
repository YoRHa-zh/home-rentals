<template>
  <div class="carousel">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in src" :key="item">
        <el-image :src="item" alt="" :preview-src-list="srcList" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: [
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.juimg.com%2F170115%2F330822-1F11522012718.jpg&refer=http%3A%2F%2Fimg1.juimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625835075&t=23f3ebd79c4e7903fca3e65757f506da',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg01.jituwang.com%2F170820%2F256845-1FR0093G875.jpg&refer=http%3A%2F%2Fimg01.jituwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625835075&t=711cc13678293c60c0cc05413b6d3876',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg01.jituwang.com%2F170827%2F256838-1FRG20S054.jpg&refer=http%3A%2F%2Fimg01.jituwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626001415&t=fbf47d2227f6d88ba70d3ff4d7842baa',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcn.best-wallpaper.net%2Fwallpaper%2F1920x1440%2F1211%2FGreece-scenery-alpine-houses-coastal-sea_1920x1440.jpg&refer=http%3A%2F%2Fcn.best-wallpaper.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626001151&t=63a5a1b3df74e3a6fe8c62146011d67f',
      ],
      srcList: [
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.juimg.com%2F170115%2F330822-1F11522012718.jpg&refer=http%3A%2F%2Fimg1.juimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625835075&t=23f3ebd79c4e7903fca3e65757f506da',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg01.jituwang.com%2F170820%2F256845-1FR0093G875.jpg&refer=http%3A%2F%2Fimg01.jituwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625835075&t=711cc13678293c60c0cc05413b6d3876',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg01.jituwang.com%2F170827%2F256838-1FRG20S054.jpg&refer=http%3A%2F%2Fimg01.jituwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626001415&t=fbf47d2227f6d88ba70d3ff4d7842baa',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcn.best-wallpaper.net%2Fwallpaper%2F1920x1440%2F1211%2FGreece-scenery-alpine-houses-coastal-sea_1920x1440.jpg&refer=http%3A%2F%2Fcn.best-wallpaper.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626001151&t=63a5a1b3df74e3a6fe8c62146011d67f',
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.carousel {
  width: 100%;
  height: 100%;
  margin-top: 100px;
  margin-left: -100px;
  .el-carousel {
    width: 100%;
    height: 100%;
    .el-carousel_container {
      width: 100%;
      text-align: center;
      .el-carousel__item:nth-child(2n) {
        width: 100%;
        height: 100%;
      }

      .el-carousel__item:nth-child(2n + 1) {
        width: 100%;
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
