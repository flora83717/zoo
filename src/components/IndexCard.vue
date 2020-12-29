<template>
  <router-link :to="`/zoo/news/${id}`" tag="div" class="IndexCard">
    <img :src="img" alt="img" />
    <div class="cardbody">
      {{ text }}
    </div>
    <div class="cardfoot">
      <span>{{ year }}</span>
      <span>{{ month }}</span>
      <span>{{ day }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "IndexCard",
  props: ["new"],
  data() {
    return {
      id: "",
      img: "",
      title: "",
      text: "",
      date: "",
    };
  },
  mounted() {
    this.id = this.new.A_id;
    this.img = this.new.A_img;
    this.title = this.new.A_title;
    this.text = this.new.A_text;
    this.date = this.new.A_date;
  },
  computed: {
    year() {
      let dateArr = this.date.split("-");
      return dateArr[0];
    },
    month() {
      let dateArr = this.date.split("-");
      return dateArr[1];
    },
    day() {
      let dateArr = this.date.split("-");
      return dateArr[2];
    },
  },
};
</script>

<style lang="scss" scoped>
.IndexCard {
  cursor: pointer;
  display: flex;
  box-shadow: 10px 10px 5px rgba(142, 156, 64, 0.61);
  flex-direction: column;
  align-items: center;
  // border: 2px soild #000;
  max-width: 18%;
  img {
    border-radius: 20px;
    width: 100%;
  }
  .cardbody {
    background-color: rgb(162, 184, 184);
    //  white-space : wrap;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 100%;
    height: 70px;
    text-overflow: ellipsis;
    line-height: 23px;
  }

  .cardfoot {
    border-radius: 20px;
    width: 100%;
    span {
      text-align: center;
      padding: 10px 0;
      width: 33.33%;
      display: inline-block;
      background-color: #000;
      color: beige;
      font-size: 2rem;
    }
  }
  &:hover {
    max-width: 20%;
    box-shadow: 10px 10px 5px rgba(255, 225, 58, 0.637);
  }
}</style
>>
