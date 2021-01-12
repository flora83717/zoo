<template>
  <div class="animalDetails">
    <div class="mammals">
      <!-- 電腦版menu -->
      <ul class="pcMammalData" v-show="rwdW > 991">
        <router-link
          tag="li"
          :to="'/zoo/animalData/mammals/' + item.A_Id"
          v-for="item in mammalData"
          :key="item.A_Id"
          class="mammalCard"
        >
          <!-- <h5 class="name">{{ item.A_Name_Ch }}</h5> -->
          {{ item.A_Name_Ch }}
        </router-link>
      </ul>
      <!-- 響應式menu -->
      <!-- <transition name="rwdMenu"> -->
        <ul class="mammalData" v-if="IsShowMenu ">
          <i class="el-icon-circle-close icon" @click="showDetail"></i>
          <router-link
            tag="li"
            :to="'/zoo/animalData/mammals/' + item.A_Id"
            v-for="item in mammalData"
            :key="item.A_Id"
            class="mammalCard"
          >
            <!-- <img :src="item.A_Pic01_URL" alt="" /> -->
            <!-- <h5 class="name">{{ item.A_Name_Ch }}</h5> -->
            {{ item.A_Name_Ch }}
          </router-link>
        </ul>
        <AnimalDetail @menuShow="showMenu" v-else />
      <!-- </transition> -->
      <!-- <transition name="rwdDetail"> -->
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
import AnimalDetail from "@/views/AnimalData/AnimalDetail";
import { mapGetters } from "vuex";
export default {
  name: "Mammals",
  data() {
    return {
      mammalData: [],
      IsShowMenu: false,
    };
  },
  computed: {
    ...mapGetters(["WIDTH"]),
    // 計算瀏覽器寬高
    rwdW() {
      console.log(this.WIDTH);
      return this.WIDTH;
    },
  },
  mounted() {
    this.width = this.w;
    console.log(this.width);
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
    showDetail() {
      this.IsShowMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.mammals {
  display: flex;
  width: 100%;
  .pcMammalData {
    overflow: auto;
    height: 70vh;
    .mammalCard {
      padding: 10px 0 5px 20px;
      background-color: #fcf8ec;
      width: 100%;
      font-size: 20px;
      font-weight: 600;
      width: 210px;
      &:hover {
        cursor: pointer;
        color: darkred;
        font-size: 20px;
        font-weight: 900;
      }

      &:nth-child(2n) {
        background-color: #999b84;
      }
    }
  }
  .mammalData {
    position: relative;
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    width: 100vw;;
    overflow: auto;
    .icon {
      cursor: pointer;
      font-size: 60px;
      position: absolute;
      right: 0;
      top: 1px;
      color: rgb(167, 54, 54);
    }

    .mammalCard {
      padding: 10px 0 5px 20px;
      background-color: #fcf8ec;
      width: 100%;
      text-align: center;
      &:hover {
        cursor: pointer;
        color: darkred;
        font-size: 20px;
        font-weight: 900;
      }

      &:nth-child(2n) {
        background-color: #999b84;
      }

      .name {
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  }
}
</style>
