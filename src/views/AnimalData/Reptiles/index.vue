<template>
  <div class="reptiles">
    <ul class="reptilesData">
      <router-link
        tag="li"
        :to="'/animalData/reptiles/' + item.A_Id"
        v-for="item in reptilesData"
        :key="item.A_Id"
        class="reptilesCard"
      >
        <!-- <img :src="item.A_Pic01_URL" alt="" /> -->
        <h5 class="name">{{ item.A_Name_Ch }}</h5>
      </router-link>
    </ul>
    <AnimalDetail />
  </div>
</template>

<script>
import AnimalDetail from "@/views/AnimalData/AnimalDetail";
export default {
  name: "reptiles",
  data() {
    return {
      reptilesData: [],
    };
  },
  created() {
    this.reptilesData = this.$http.get("/json/animal.json").then(({ data }) => {
      console.log(data);
      this.reptilesData = data.filter((reptiles) => {
        return reptiles.A_Class == "爬蟲綱";
      });
    });
  },
  components: {
    AnimalDetail,
  },
};
</script>

<style lang="scss" scoped>
.reptiles {
  display: flex;
  .reptilesData {
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    max-height: 60vh;
    max-width: 20vw;
    overflow: auto;
    .reptilesCard {
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
