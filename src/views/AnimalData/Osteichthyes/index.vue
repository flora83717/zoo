<template>
  <div class="animalDetails">
    <div class="osteichthyes">
      <!-- 電腦版menu -->
      <ul class="pcOsteichthyesData" v-show="rwdW > 991">
        <router-link
          tag="li"
          :to="'/zoo/animalData/osteichthyes/' + item.A_Id"
          v-for="item in osteichthyesData"
          :key="item.A_Id"
          class="osteichthyesCard"
        >
          <!-- <h5 class="name">{{ item.A_Name_Ch }}</h5> -->
          {{ item.A_Name_Ch }}
        </router-link>
      </ul>

      <ul class="osteichthyesData" v-if="IsShowMenu">
        <i class="el-icon-circle-close icon" @click="showDetail"></i>
        <router-link
          tag="li"
          :to="'/zoo/animalData/osteichthyes/' + item.A_Id"
          v-for="item in osteichthyesData"
          :key="item.A_Id"
          class="osteichthyesCard"
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
  name: "Osteichthyes",
  data() {
    return {
      osteichthyesData: [],
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
.osteichthyes {
  display: flex;
  width: 100%;
  .pcOsteichthyesData {
    overflow: auto;
    height: 100vh;
    width: 350px;
    .osteichthyesCard {
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
  .osteichthyesData {
    position: relative;
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    width: 100vw;
    overflow: auto;
    .icon {
      cursor: pointer;
      font-size: 60px;
      position: absolute;
      right: 0;
      top: 1px;
      color: rgb(167, 54, 54);
    }
    .osteichthyesCard {
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

  .router-link-active {
    color: #000;
    background-color: #ac4b58c0 !important;
  }
}
</style>
