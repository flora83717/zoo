<template>
  <div class="AnimalDetail">
    <div class="leftImg">
      <img
        :src="
          animalInfo.A_Pic01_URL ||
            'https://www.pezzaloan.com/static/media/no-data.ae27ef0d.svg'
        "
        :alt="animalInfo.A_Name_Ch"
      />
    </div>
    <div class="rightData">
      <ul>
        <div class="shortInfo">
          <span>中文學名：</span>
          <li>{{ animalInfo.A_Name_Ch }}</li>
          <span>英文學名：</span>
          <li>{{ animalInfo.A_Name_En }}</li>
          <span>類別(目)：</span>
          <li>{{ animalInfo.A_Order }}</li>
          <span>類別(類)：</span>
          <li>{{ animalInfo.A_Class }}</li>
          <span>類別(門)：</span>
          <li>{{ animalInfo.A_Phylum }}</li>
          <span>館區：</span>
          <li>{{ animalInfo.A_Location }}</li>
        </div>
        <div class="longInfo">
          <span>生活環境：</span>
          <li class="env">{{ animalInfo.A_Habitat }}</li>
          <span>外表特徵：</span>
          <li class="feature">{{ animalInfo.A_Feature }}</li>
          <span>活動區域：</span>
          <li class="distri">{{ animalInfo.A_Distribution }}</li>
        </div>
      </ul>
    </div>
    <div class="menuBTN" @click="showMenu" >
      <img :src="require('../../../assets/img/menu.png')" alt="menu" v-show=" !(rwdW > 991) " />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AnimalDetail",
  data() {
    return {
      animalInfo: {},
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
  watch: {
    $route(to, from) {
      // 找尋匹配路徑上id的資料
      const id = to.params.id;
      let res = [];
      this.$http.get("/json/animal.json").then(({ data }) => {
        res = data.filter((animal) => {
          return animal.A_Id == id;
        });
        if (!this.animalInfo) {
          alert("找不到資料");
          return;
        }
        this.animalInfo = res[0];
        console.log(this.animalInfo);
      });
    },
  },
  created() {
    const id = this.$route.params.id;
    let res = [];
    // console.log(id);
    this.$http.get("/json/animal.json").then(({ data }) => {
      res = data.filter((animal) => {
        // console.log(animal);
        return animal.A_Id == id;
      });
      if (!this.animalInfo) {
        alert("找不到資料");
        return;
      }

      this.animalInfo = res[0];
      console.log(this.animalInfo);
    });
  },
  methods: {
    showMenu() {
      this.$emit("menuShow");
    },
  },
};
</script>

<style lang="scss" scoped>
.AnimalDetail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  .leftImg {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    img {
      width: 50%;
      border-radius: 20px;
    }
  }
  .rightData {
    width: 85%;
    ul {
      display: flex;
      flex-direction: column;
      // flex-wrap: wrap;
      .shortInfo {
        height: 200px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        span {
          width: 200px;
          color: #682c0e;
          display: inline-block;
          font-weight: 900;
          font-size: 1.2rem;
          margin: 20px 0;
        }
        li {
          width: 220px;
          padding: 0 0 0 10px;
          line-height: 25px;
        }
      }

      .longInfo {
        span {
          width: 180px;
          color: #682c0e;
          display: inline-block;
          font-weight: 900;
          font-size: 1.2rem;
          margin: 20px 0;
        }
        li {
          width: 80%;
          padding: 0 0 0 10px;
          line-height: 30px;
        }
      }
    }
  }
  .menuBTN {
    cursor: pointer;
    right: 10px;
    bottom: -200px;
    position: absolute;
    img {
      width: 130px;
    }
  }
}
</style>
