<template>
  <div class="home">
    <Carousel />
    <div class="news">
      <h3 class="title">最新消息</h3>
      <div class=cards>
        <IndexCard />
        <IndexCard />
        <IndexCard />
      </div>
    </div>
    <div class="zoneIntroduce">
      <h5 class="title">管區介紹</h5>
      <!-- <img src="https://www.zoo.gov.tw/images/map.png" alt=""> -->
      <div class="bg"></div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import IndexCard from "@/components/IndexCard.vue";
export default {
  name: "home",
  components: {
    Carousel,
    IndexCard,
  },
};
</script>

<style lang="scss" scoped>
.home {
  .news {
    margin: 0 auto;
    // display:flex ;
    position: relative;
    z-index: 999;
    // margin-top: -50px;
    width: 90%;
    height: 380px;
    background-color: #f4f5f4d2;

    .title {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 800;
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
