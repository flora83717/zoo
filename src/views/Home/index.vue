<template>
  <div class="home">
    <Carousel />
    <!-- onepart -->
    <div class="zoneIntroduce">
      <h5 class="title">館區介紹</h5>
      <!-- 注意事項 -->
      <div class="notice" v-show="!isHiddenBgShow">
        <ul>
          <li>全園禁菸</li>
          <li>禁止寵物及充氣氣球進入園區</li>
          <li>禁止跨越欄杆進入動物展示場</li>
          <li>禁止寵物及充氣氣球進入園區</li>
          <li>各室內展示館禁止飲食</li>
          <li>不得任意餵食、危害動物權益及妨礙動物保育</li>
        </ul>
        <!-- 普通圖片 -->
        <div class="bg" @click="enlarge"></div>
      </div>
      <!-- 放大圖片 -->
      <div class="hiddenBg" @click="shrink" v-show="isHiddenBgShow"></div>
    </div>
    <!-- 最新消息 twopart -->
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
      isHiddenBgShow: false,
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
  methods: {
    enlarge() {
      this.isHiddenBgShow = true;
    },

    shrink() {
      this.isHiddenBgShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  // max-width: 1380px;
  margin: 0 auto;

  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 800;
    // background-color: #ffb1427a;
    margin-bottom: 20px;
    padding: 15px 10px;
    border-radius: 20px;
  }

  .notice {
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      li {
        line-height: 2;
        font-size: 1.3rem;
        font-weight: 600;
      }
    }
  }

  .zoneIntroduce {
    .bg {
      cursor: pointer;
      height: 500px;
      width: 700px;
      background-image: url("https://www.zoo.gov.tw/images/map.png");
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: center;
    }

    .hiddenBg {
      height: 1500px;
      background-image: url("https://www.zoo.gov.tw/images/map.png");
      background-size: 90%;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 900;
    }
  }

  .news {
    padding: 6rem 3rem;
    // margin: 2rem auto;
    position: relative;
    background-color: #5b994044;
    .cards {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
