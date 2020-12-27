<template>
  <div class="IndexCard">
    <img src="https://www-ws.gov.taipei/001/Upload/432/relpic/10162/8327469/117ec51a-6c5c-4d2c-9af3-0fed114a5000@710x470.jpg" alt="">
    <div class="cardbody">
      最近臺北市立動物園開始讓大貓熊「圓寶」接觸不同類別的副食品，
      「圓寶」會學著媽媽進食的動作，努力地啃著緊抱在懷裡的副食品，
      但年紀還小的她，沒辦法真的把窩窩頭等副食品吃下肚，
      反而把食物碎屑弄得滿身都是。
      根據保育員觀察，「圓寶」即將征服新朋友「甜甜圈君」，
      她現在已經進步到不需要保育員的幫忙，就能靠自己的力量爬上去了呢！
    </div>
    <div class="cardfoot">
      <span>20</span>
      <span>12</span>
      <span>05</span>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.IndexCard {
  cursor: pointer;
  display: flex;
  box-shadow: 10px 10px 5px rgba(142, 156, 64, 0.61);
  flex-direction: column;
  align-items: center;
  // border: 2px soild #000;
  max-width:18%;
  img{
    border-radius: 20px;
    width: 100%;
  } ;
  .cardbody {
    background-color: rgb(162, 184, 184);
    //  white-space : wrap;
    display: -webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 100%;
    height: 70px;
    text-overflow : ellipsis;
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
      background-color:#000 ;
      color: beige;
      font-size: 2rem;
    }

  }
    &:hover {
      max-width:20%;
      box-shadow: 10px 10px 5px rgba(255, 225, 58, 0.637);
    }

}
</style>>
