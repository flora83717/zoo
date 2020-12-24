<template>
  <div class="AnimalDetail">
    <div class="leftImg">
      <img :src="animalInfo.A_Pic01_URL" :alt="animalInfo.A_Name_Ch" />
    </div>
    <div class="rightData">
      <ul>
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
        <span>生活環境：</span>
        <li>{{ animalInfo.A_Habitat }}</li>
        <span>外表特徵：</span>
        <li>{{ animalInfo.A_Feature }}</li>
        <span>活動區域：</span>
        <li>{{ animalInfo.A_Distribution }}</li>
        <span>館區：</span>
        <li>{{ animalInfo.A_Location }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalDetail",
  data() {
    return {
      animalInfo: {},
    };
  },
  watch: {
    $route(to, from) {
      // console.log(to);
      // console.log(from);
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
};
</script>

<style lang="scss" scoped>
.AnimalDetail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .leftImg {
    img {
      width: 50%;
    }
  }
  .rightData {
    width: 50%;
    ul {
      span {
        font-weight: 900;
        font-size: 1.2rem;
      }
      li {
      }
    }
  }
}
</style>
