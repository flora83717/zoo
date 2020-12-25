<template>
  <div class="footer">
    <div>Copyright 臺北市立動物園 最佳瀏覽解析度1920*1080</div>
    <div>地址：11656臺北市新光路二段30號 (來園交通及位置圖)</div>
    <div>遊客服務專線：02-29382300分機630 傳真：02-29382316</div>
    <div>服務時間：週一至週日 上午9:00至下午5:00 (農曆除夕休園一天)</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 50px;
  position: absolute;
  bottom: 0;
  background-color: #a3c470;
  width: 100vw;
  height: 5rem;
  font-weight: 700;
  padding: 3rem 0;
  div {
    padding: 5px 0;
    color: #40403e;
    font-size: 1rem;
    text-align: center;
  }
}
</style>
