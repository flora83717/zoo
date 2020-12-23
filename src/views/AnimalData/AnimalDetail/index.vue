<template>
  <div class="AnimalDetail">
    <div class="leftImg"></div>
    <div class="rightData">
      <ul>
        <li>{{ animal.A_Name_Ch }}</li>
        <li>{{ animal.A_Habitat }}</li>
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
  created() {
    const id = this.$route.params.id;
    this.$http.get("/json/animal.json").then(({ data }) => {
      this.animalInfo = data.filter((animal) => {
        return animal.A_Id == id;
      });
    });
    console.log(this.animalInfo);
  },
};
</script>

<style></style>
