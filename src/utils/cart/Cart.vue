<template>
  <div id="buyTicket">
    <h2>購票資訊</h2>
    <ul>
      <li>票券種類</li>
      <li>價格</li>
      <li>購買數量</li>
      <li>小計</li>
    </ul>
    <ul v-for="(item, i) in ticketType" :key="i">
      <li>{{ item.ticket_name }}</li>
      <li>{{ item.price }}</li>
      <li><input type="text" v-model="num" /></li>
      <li>{{ item.price * num }}</li>
    </ul>
  </div>
</template>

<script>
import { ticket } from "./ticket.js";
export default {
  name: "cart",
  data() {
    return {
      ticketType: [],
      num: 0,
    };
  },
  created() {
    console.log(ticket);
    this.ticketType = ticket.type;
    console.log(this.ticketType);
  },
};
</script>

<style lang="scss" scoped>
#buyTicket {
  width: 100vw;
}
</style>
