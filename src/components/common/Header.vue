<template>
  <div id="header">
    <div id="left_header">
      <div id="logo">
        <img src="../../assets/img/logo.png" alt="" />
      </div>
    </div>
    <div id="right_header">
      <ul>
        <router-link tag="li" to="/zone">館區介紹</router-link>
        <!-- <router-link to="/animalData">動物影音</router-link> -->
        <router-link tag="li" to="/animalData">動物百科</router-link>
        <router-link tag="li" to="/onlineBuy">線上購票</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  background-color: #1b3302;
  width: 100vw;
  height: 5rem;
  span {
    color: #000;
    font-size: 2rem;
  }

  #right_header {
    ul {
      display: flex;
      li {
        cursor: pointer;
        padding: 0 10px;
        list-style: none;
        font-size: 1.2rem;
        color: #fff;
      }
    }
  }
}
</style>
