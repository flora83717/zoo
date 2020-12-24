<template>
  <div class="osteichthyes">
    <ul class="osteichthyesData">
      <router-link
        tag="li"
        :to="'/animalData/osteichthyes/' + item.A_Id"
        v-for="item in osteichthyesData"
        :key="item.A_Id"
        class="osteichthyesCard"
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
  name: "Osteichthyes",
  data() {
    return {
      osteichthyesData: [],
    };
  },
  created() {
    this.osteichthyesData = this.$http
      .get("/json/animal.json")
      .then(({ data }) => {
        console.log(data);
        this.osteichthyesData = data.filter((osteichthyes) => {
          return osteichthyes.A_Class == "硬骨魚綱";
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
  display: flex;
  .mammalData {
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    max-height: 60vh;
    max-width: 20vw;
    overflow: auto;
    .mammalCard {
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
