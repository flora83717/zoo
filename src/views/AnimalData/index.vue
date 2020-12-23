<template>
  <!-- 動物資料總匯 -->
  <div class="animalClass">
    <ul class="class">
      <router-link
        :to="'animalData/' + item.class_en_name + '/A0001'"
        tag="li"
        v-for="item in animalClass"
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
    };
  },
  created() {
    this.$http.get("/json/animalClass.json").then(({ data }) => {
      this.animalClass = data;
    });
  },
};
</script>

<style lang="scss" scoped>
.animalClass {
  .class {
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    margin-top: 7rem;
    width: 50%;
    height: 40px;
    border-bottom: 5px double #000;
    li {
      padding: 0 10px;

      &:hover {
        cursor: pointer;
        color: #c51e01dc;
        font-size: 1.7rem;
      }
    }
  }
}
</style>
