<template>
  <div class="zones">
    <!-- <h1>館區介紹</h1> -->
    <div class="zone">
      <h2 class="zoneName">戶外館</h2>
      <ul>
        <router-link
          :to="'/szone/' + item.E_no"
          tag="li"
          v-for="(item, i) in outdoorZone"
          :key="i"
          >{{ item.E_Name }}</router-link
        >
      </ul>
    </div>
    <div class="zone">
      <h2 class="zoneName">室內館</h2>
      <ul>
        <router-link
          :to="'/szone/' + item.E_no"
          tag="li"
          v-for="(item, i) in indoorZone"
          :key="i"
          >{{ item.E_Name }}</router-link
        >
      </ul>
    </div>
    <div class="zone">
      <h2 class="zoneName">特展區</h2>
      <ul>
        <router-link
          :to="'/szone/' + item.E_no"
          tag="li"
          v-for="(item, i) in specialZone"
          :key="i"
          >{{ item.E_Name }}</router-link
        >
      </ul>
    </div>
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
export default {
  name: "Zone",
  data() {
    return {
      outdoorZone: [],
      indoorZone: [],
      specialZone: [],
      otherZone: [],
    };
  },
  created() {
    this.$http.get("/json/pavilion.json").then(({ data }) => {
      data.forEach((item) => {
        switch (item.E_Category) {
          case "戶外區":
            this.outdoorZone.push(item);
            break;
          case "室內區":
            this.indoorZone.push(item);
            break;
          case "特展區":
            this.specialZone.push(item);
            break;
          default:
            this.otherZone.push(item);
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.zones {
  margin-top: 7rem;
  display: flex;
  justify-content: center;
  .zone {
    border: 5px solid #ccc;
    border-radius: 20px;
    margin: 0 10px;
    width: 30%;
    // background-color: rgb(194, 255, 144);
    .zoneName {
      font-size: 2.3rem;
      font-weight: 800;
    }
    ul {
      margin-top: 10px;
      padding-left: 15px;
      li {
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 500;
        padding: 5px 0;

        &:hover {
          color: red;
        }
      }
    }
  }
}
</style>
