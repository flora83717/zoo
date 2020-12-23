<template>
  <div class="mammals">
    <ul class="mammalData">
      <router-link
        tag="li"
        :to="'animalData/mammals/animalDetail/' + item.A_Id"
        v-for="item in mammalData"
        :key="item.A_Id"
        class="mammalCard"
      >
        <img :src="item.A_Pic01_URL" alt="" />
        <h5>{{ item.A_Name_Ch }}</h5>
      </router-link>
    </ul>
    <AnimalDetail />
  </div>
</template>

<script>
import AnimalDetail from "@/views/AnimalData/AnimalDetail";
export default {
  name: "Mammals",
  data() {
    return {
      mammalData: [],
    };
  },
  created() {
    this.mammalData = this.$http.get("/json/animal.json").then(({ data }) => {
      console.log(data);
      this.mammalData = data.filter((mammal) => {
        return mammal.A_Class == "哺乳綱";
      });
    });
  },
  components: {
    AnimalDetail,
  },
};
</script>

<style lang="scss" scoped>
.mammals {
  .mammalData {
    display: flex;
    .mammalCard {
      width: 23%;
      &:hover {
        cursor: pointer;
        color: darkred;
        font-size: 20px;
        font-weight: 900;
      }
      img {
        border-radius: 50%;
        box-shadow: inset 10px 5px #000;
        width: 100%;
      }
    }
  }
}
</style>
