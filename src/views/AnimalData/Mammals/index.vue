<template>
  <div class="animalDetails">
    <div class="mammals">
      <ul class="mammalData" v-if="IsShowMenu">
        <i class="el-icon-circle-close icon"></i>
        <router-link
          tag="li"
          :to="'/zoo/animalData/mammals/' + item.A_Id"
          v-for="item in mammalData"
          :key="item.A_Id"
          class="mammalCard"
        >
          <!-- <img :src="item.A_Pic01_URL" alt="" /> -->
          <h5 class="name">{{ item.A_Name_Ch }}</h5>
        </router-link>
      </ul>
      <AnimalDetail @menuShow="showMenu" v-else />
    </div>
  </div>
</template>

<script>
import AnimalDetail from "@/views/AnimalData/AnimalDetail";
export default {
  name: "Mammals",
  data() {
    return {
      mammalData: [],
      IsShowMenu: false,
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
  methods: {
    showMenu() {
      this.IsShowMenu = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.mammals {
  display: flex;
  width: 100%;

  .mammalData {
    position: relative;
    .icon {
      cursor: pointer;
      font-size: 60px;
      position: absolute;
      right: 0;
      top: 1px;
      color: rgb(167, 54, 54);
    }
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow: auto;
    .mammalCard {
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
