<template>
  <div class="zones">
    <h1>館區介紹</h1>
    <div class="zonebox">
      <div class="zone">
        <div class="left-side">
          <h2 class="zoneName">戶外館</h2>
          <img :src="require(`../../assets/img/outdoor.png`)" alt="戶外館" />
        </div>
        <ul class="right-side">
          <router-link
            :to="'/zoo/szone/' + item.E_no"
            tag="li"
            v-for="(item, i) in outdoorZone"
            :key="i"
            >{{ item.E_Name }}</router-link
          >
        </ul>
      </div>
      <div class="zone">
        <div class="left-side">
          <h2 class="zoneName">室內館</h2>
          <img :src="require(`../../assets/img/indoor.png`)" alt="室內館" />
        </div>

        <ul class="right-side">
          <router-link
            :to="'/zoo/szone/' + item.E_no"
            tag="li"
            v-for="(item, i) in indoorZone"
            :key="i"
            >{{ item.E_Name }}</router-link
          >
        </ul>
      </div>
      <div class="zone">
        <div class="left-side">
          <h2 class="zoneName">特展區</h2>
          <img
            :src="require(`../../assets/img/specialzone2.png`)"
            alt="特展區"
          />
        </div>

        <ul class="right-side">
          <router-link
            :to="'/zoo/szone/' + item.E_no"
            tag="li"
            v-for="(item, i) in specialZone"
            :key="i"
            >{{ item.E_Name }}</router-link
          >
        </ul>
        
      </div>
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
  display: flex;
  flex-direction: column;
  h1 {
    width: 100%;
    font-size: 2rem;
    color: rgb(94, 90, 47);
    font-weight: 700;
    border-bottom: 3px double #af6b58;
    margin: 3rem;
  }

  .zonebox {
    display: flex;
    flex-direction: column;
    align-items: center;

    .zone {
      padding: 2rem;
      border-radius: 20px;
      margin: 0 10px;
      width: 80%;
      display: flex;
      margin: 20px 0;

      &:nth-child(1) {
        background-color: #cbbcb1;
        background-image: url("../../assets/img/outdoor.png");
        background: #cbbcb1a3;;
      }

      &:nth-child(2) {
        background-color: #af6b58;
      }

      &:nth-child(3) {
        background-color: #999b84;
      }

      .left-side {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .zoneName {
          font-size: 1.3rem;
          font-weight: 800;
          
        }
        img {
          width: 60%;
          border-radius: 40%;
        }
      }

      .right-side {
        width: 30%;
        margin-top: 10px;
        padding-left: 15px;
        li {
          margin: 10px 0;
          background: #645e5daf;
          border: 2px solid #cbbcb1;
          border-radius: 30px;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 700;
          padding: 5px 5px;
          color:#f1f1f1;
          &:hover {
            background: #532e1c;
          }
        }
      }
    }
  }
}
</style>
