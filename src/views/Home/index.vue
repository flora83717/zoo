<template>
  <div class="home">
    <Carousel />
     <div class="zoneIntroduce">
      <h5 class="title">管區介紹</h5>
      <!-- <img src="https://www.zoo.gov.tw/images/map.png" alt=""> -->
      <div class="bg"></div>
    </div>
    <!-- 最新消息 -->
    <div class="news">
      <h3 class="title">最新消息</h3>
      <div class="cards">
        <IndexCard v-for="item in newsArr" :key="item.A_Id" :new="item" />
      </div>
    </div>
   
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import IndexCard from "@/components/IndexCard.vue";
export default {
  name: "home",
  data() {
    return {
      newsArr: [],
    };
  },
  components: {
    Carousel,
    IndexCard,
  },
  created() {
    this.$http.get("/json/news.json").then(({ data }) => {
      this.newsArr = data;
    });
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1380px;
  margin: 0 auto;
  .news {
    margin: 2rem auto;
    position: relative;
    // width: 90%;
    // height: 380px;

    .title {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 800;
      background-color: #aa89768e;
      margin-bottom: 20px;
      padding: 15px 10px;
    }
    .cards {
      display: flex;
      justify-content: space-around;
    }
  }

  .zoneIntroduce {
    .title {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 800;
    }

    .bg {
      height: 500px;
      background-image: url("https://www.zoo.gov.tw/images/map.png");
      background-size: 40%;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
</style>
