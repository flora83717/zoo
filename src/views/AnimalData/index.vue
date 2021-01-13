<template>
  <!-- 動物資料總匯-類別選擇 -->
  <div class="animalClass">
    <ul class="class">
      <router-link
        :to="
          '/zoo/animalData/' + item.class_en_name + '/' + firstNumArr[i].A_Id
        "
        tag="li"
        v-for="(item, i) in animalClass"
        :key="item.class_id"
      >
        {{ item.class_name }}
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AnimalData",
  data() {
    return {
      animalClass: [],
      firstNumArr: [],
      mammalData: {},
    };
  },
  created() {
    // 獲取類名
    this.$http.get("/json/animalClass.json").then(({ data }) => {
      this.animalClass = data;
    });
    // 獲取各類動物的第一筆資料當作首次展現
    this.$http.get("/json/animal.json").then(({ data }) => {
      this.firstNumArr.push(
        data.find((item) => {
          return item.A_Class == "哺乳綱";
        })
      );

      this.firstNumArr.push(
        data.find((item) => {
          return item.A_Class == "鳥綱";
        })
      );
      this.firstNumArr.push(
        data.find((item) => {
          return item.A_Class == "爬蟲綱";
        })
      );

      this.firstNumArr.push(
        data.find((item) => {
          return item.A_Class == "兩棲綱";
        })
      );
      this.firstNumArr.push(
        data.find((item) => {
          return item.A_Class == "硬骨魚綱";
        })
      );
    });
  },
};
</script>

<style lang="scss" scoped>
.animalClass {
  margin: 0 auto;
  .class {
    font-weight: bold;
    display: flex;
    width: 70%;
    height: 40px;
    padding: 4rem;
    border-bottom: 5px double #000;
    li {
      padding: 0 2rem;
      font-size: 2.1rem;
      &:hover {
        cursor: pointer;
        color: #c51e01dc;
        font-size: 1.7rem;
      }
    }
  }

  .animalDetails {
    margin-top: 70px;
  }

  .router-link-active {
    color: brown;
  }
}
</style>
