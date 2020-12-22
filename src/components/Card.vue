<template>
  <div class="card">
    <img
      src="https://www-ws.gov.taipei/001/Upload/432/relpic/10162/8319840/8c2dcf48-a98b-4f4a-99a4-3d2c00fde32d.jpg"
      alt=""
    />
    <h2 class="title">測試中</h2>
    <!-- <div>text</div> -->
    <hr />
    <el-button type="success">放入購物車</el-button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: [],
  data() {
    return {
      name: "Card",
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 30%;
  // border: 0px solid #000;
  box-shadow: 0px 0px 9px #1b3302;
  margin-top: 7rem;
  img {
    width: 100%;
    padding-bottom: 10px;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 800;
  }
}
</style>
