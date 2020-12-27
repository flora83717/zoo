<template>
  <div class="animalDetails">
    <div class="amphibians">
      <ul class="amphibiansData">
        <router-link
          tag="li"
          :to="'/animalData/amphibians/' + item.A_Id"
          v-for="item in amphibiansData"
          :key="item.A_Id"
          class="amphibiansCard"
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
  name: "amphibians",
  data() {
    return {
      amphibiansData: [],
    };
  },
  created() {
    this.amphibiansData = this.$http
      .get("/json/animal.json")
      .then(({ data }) => {
        console.log(data);
        this.amphibiansData = data.filter((amphibians) => {
          return amphibians.A_Class == "兩棲綱";
        });
      });
  },
  components: {
    AnimalDetail,
  },
};
</script>

<style lang="scss" scoped>
.amphibians {
  display: flex;
  .amphibiansData {
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    max-height: 60vh;
    max-width: 20vw;
    overflow: auto;
    .amphibiansCard {
      width: 70%;
      &:hover {
        cursor: pointer;
        color: darkred;
        font-size: 20px;
        font-weight: 900;
      }
      img {
        border-radius: 20%;
        box-shadow: inset 10px 5px #000;
        width: 30%;
      }
      .name {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
