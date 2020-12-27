<template>
  <div id="szone">
    <img :src="szone.E_Pic_URL" alt="pic" />
    <h1 class="title">{{ szone.E_Name }}</h1>
    <div class="info">
      {{ szone.E_Info }}
    </div>
    <!-- <div class="memo">{{ szone.E_Memo }}</div> -->
  </div>
</template>

<script>
export default {
  name: "SZone",
  data() {
    return {
      szone: {},
    };
  },
  async created() {
    await this.$http.get("/json/pavilion.json").then(({ data }) => {
      const id = this.$route.params.id;
      let szoneData = "";
      szoneData = data.find((item) => {
        {
          return item.E_no == id;
        }
      });
      // console.log(szoneData);
      // this.$set(this.szone, "szonedata", szoneData);
      this.szone = szoneData;
      console.log(this.szone);
    });
  },
};
</script>

<style lang="scss" scoped>
#szone {
  margin-top: 7rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    // width: 100%;
    background-size: 400px;
    height: 400px;
    border-radius: 50%;
  }
  .title {
    width: 70%;
    text-align: left;
    padding: 0 10px;
    font-size: 2.5rem;
    font-weight: 600;
  }
  .info {
    width: 70%;
    // height: 50px;
    padding: 20px 10px;
    font-size: 1.5rem;
    line-height: 35px;
  }

  .memo {
    width: 70%;
    height: 50px;
    padding: 20px 10px;
    font-size: 1.3rem;
    line-height: 20px;
  }
}
</style>
