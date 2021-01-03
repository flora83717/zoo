<template>
  <div class="zones">
    <h1>館區介紹</h1>
    <div class="zonebox">
      <div class="zone">
        <div class="left-side">
          <h2 class="zoneName">戶外館</h2>
          <div class="bg"></div>
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
          <div class="bg"></div>
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
          <div class="bg"></div>
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
  margin: 0 auto;
  max-width: 1380px;
  display: flex;
  flex-direction: column;
  h1 {
    font-family: Microsoft JhengHeis;
    width: 100%;
    padding: 1.5rem 0;
    font-size: 2rem;
    color: rgb(94, 90, 47);
    font-weight: 700;
    border-bottom: 10px double #af6b58;
    margin: 3rem;
  }

  .zonebox {
    display: flex;
    flex-direction: column;
    align-items: center;

    .zone {
      padding: 1.5rem;
      margin: 0 10px;
      width: 90%;
      display: flex;
      margin: 20px 0;
    
    &:nth-child(2) {
      flex-direction: row-reverse;
      .left-side {
        position: relative;
        left: -50px;
        align-items: flex-end;

        .bg {
          height: 50px;
          background-color: rgba(59, 32, 155, 0.514);
        }
      }


      .right-side {
        position: relative;
        left: 20px;
      }
    }
    

      .left-side {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;
        left: 119px;

        .bg {
          position: relative;
          left: -30px;
          bottom: -30px;
          width: 100%;
          // height: 25%;
          height: 50px;
          background-color: #d4cb40b2;
        }
        .zoneName {
          font-size: 1.5rem;
          font-weight: 800;
        }
        img {
          box-shadow: 2px -2px  5px #502b1c ;
          width: 100%;
        }
      }

      .right-side {
        width: 50%;
        margin: 0 0 0 20px;
        background-color: rgba(11, 61, 11, 0.274);
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
          margin: 10px 0;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 700;
          padding: 5px 5px;
          color:#110b0b;
          height: 20%;
          &:hover {
            color: #852642;
          }
        }
      }
    }
  }
}
</style>
