<template>
  <div class="animalDetails">
    <div class="reptiles">
      <!-- 電腦版menu -->
      <ul class="pcReptilesData" v-show="rwdW > 991">
        <router-link
          tag="li"
          :to="'/zoo/animalData/reptiles/' + item.A_Id"
          v-for="item in reptilesData"
          :key="item.A_Id"
          class="reptilesCard"
        >
          <!-- <h5 class="name">{{ item.A_Name_Ch }}</h5> -->
          {{ item.A_Name_Ch }}
        </router-link>
      </ul>
      <!-- 移動端menu -->
      <ul class="reptilesData" v-if="IsShowMenu || rwd < 991">
        <i class="el-icon-circle-close icon" @click="showDetail"></i>
        <router-link
          tag="li"
          :to="'/zoo/animalData/reptiles/' + item.A_Id"
          v-for="item in reptilesData"
          :key="item.A_Id"
          class="reptilesCard"
        >
          <!-- <h5 class="name">{{ item.A_Name_Ch }}</h5> -->
          {{ item.A_Name_Ch }}
        </router-link>
      </ul>
      <AnimalDetail @menuShow="showMenu" v-else />
    </div>
  </div>
</template>

<script>
import AnimalDetail from "@/views/AnimalData/AnimalDetail";
import { mapGetters } from "vuex";
export default {
  name: "reptiles",
  data() {
    return {
      reptilesData: [],
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
.reptiles {
  display: flex;
  width: 100%;
  .pcReptilesData {
    overflow: auto;
    height: 100vh;
    width: 350px;
    .reptilesCard {
      padding: 20px 0 10px 30px;
      background-color: #fcf8ec;
      width: 100%;
      font-size: 25px;
      font-weight: 600;
      &:hover {
        cursor: pointer;
        color: darkred;
        font-weight: 900;
      }

      &:nth-child(2n) {
        background-color: #999b84;
      }
    }
  }
  .reptilesData {
    width: 100vw;
    position: relative;
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow: auto;
    .icon {
      cursor: pointer;
      font-size: 60px;
      position: absolute;
      right: 0;
      top: 1px;
      color: rgb(167, 54, 54);
    }
    .reptilesCard {
      text-align: center;
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

      .name {
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  }
  .router-link-active {
    color: #000;
    background-color: #ac4b58c0 !important;
  }
}
</style>
