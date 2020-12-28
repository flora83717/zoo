<template>
  <div class="animalDetails">
    <div class="birds">
      <ul class="birdData">
        <router-link
          tag="li"
          :to="'/zoo/animalData/birds/' + item.A_Id"
          v-for="item in birdData"
          :key="item.A_Id"
          class="birdCard"
        >
          <!-- <img :src="item.A_Pic01_URL" alt="" /> -->
          <h5 class="name">{{ item.A_Name_Ch }}</h5>
        </router-link>
      </ul>
      <AnimalDetail />
    </div>
  </div>
</template>

<script>
import AnimalDetail from "@/views/AnimalData/AnimalDetail";
export default {
  name: "birds",
  data() {
    return {
      birdData: [],
    };
  },
  created() {
    this.birdData = this.$http.get("/json/animal.json").then(({ data }) => {
      console.log(data);
      this.birdData = data.filter((bird) => {
        return bird.A_Class == "鳥綱";
      });
    });
  },
  components: {
    AnimalDetail,
  },
};
</script>

<style lang="scss" scoped>
.birds {
  display: flex;
  .birdData {
    width: 22%;
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    max-height: 70vh;
    max-width: 20vw;
    overflow: auto;
    .birdCard {
      padding: 10px 0 5px 20px;
      background-color: #fcf8ec;
      width: 100%;
      &:hover {
        cursor: pointer;
        color: darkred;
        font-size: 20px;
        font-weight: 900;
      }

      &:nth-child(2n) {
        background-color: #999b84;
      }
      img {
        border-radius: 20%;
        box-shadow: inset 10px 5px #000;
        width: 30%;
      }
      .name {
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  }
}
</style>
