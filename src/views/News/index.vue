<template>
  <div class="news">
    <div class="bg"></div>
    <!-- <img :src="require('../../assets/img/background2webp.webp')" alt="" /> -->
    <!-- <img :src="require('../../assets/img/background.jpg')" alt="" /> -->
    <h3 class="mainTitle">最新消息</h3>
    <div class="newsData">
      <img :src="img" alt="" />
      <div class="newsTitle">{{ title }}</div>
      <div class="newsText">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      img: "",
      title: "",
      text: "",
    };
  },
  created() {
    const id = this.$route.params.id;
    let newObj = {};
    this.$http.get("/json/news.json").then(({ data }) => {
      newObj = data.find((item) => {
        return item.A_id == id;
      });
      this.title = newObj.A_title;
      this.text = newObj.A_text;
      this.img = newObj.A_img;
    });
  },
};
</script>

<style lang="scss" scoped>
.news {
  margin: 0 auto;
  padding: 50px;
  width: 80%;
  // .bg {
  //   width: 100%;
  //   height: 1000px;
  //   background-image: url("../../assets/img/background2webp.webp");
  //   background-size: 100% 100%;
  // }
  .mainTitle {
    font-weight: 700;
    font-size: 2.5rem;
    border-radius: 5px;
  }
  .newsData {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 50%;
    }

    .newsTitle {
      color: darkred;
      font-size: 1.8rem;
      padding: 20px 0;
      font-weight: 600;
    }

    .newsText {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }
}
</style>
