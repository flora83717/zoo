<template>
  <div class="cartList">
    <div class="cartLists" v-show="!isCartNull">
      <div class="list_title">
        <ul>
          <li>圖片</li>
          <li>商品</li>
          <li>單位</li>
          <li>價格</li>
          <li>數量</li>
          <li>小計</li>
          <li>操作</li>
        </ul>
      </div>
      <div class="list">
        <CartItem v-for="item in cartList" :key="item.G_Id" :cartData="item" />
      </div>
      <div class="payment">
        <div class="shipData">
          <h3 class="feeTitle">運送資訊</h3>
          <!-- <label for="name">姓名：</label> -->
          <el-input
            placeholder="姓名"
            v-model="inputName"
            :disabled="false"
            id="name"
          >
          </el-input>
          <!-- <label for="address">運送地址：</label> -->
          <el-input
            placeholder="運送地址"
            v-model="inputAddress"
            :disabled="false"
          >
          </el-input>
          <!-- <label for="credit">信用卡號碼：</label> -->
          <el-input
            placeholder="信用卡號碼"
            v-model="inputCredit"
            :disabled="false"
          >
          </el-input>
        </div>
        <div class="fee">
          <h3 class="feeTitle">總價</h3>
          <span class="totalMoney">{{ totalFee }}</span>
          <el-button type="warning" @click="pay"><span>結帳</span></el-button>
        </div>
      </div>
    </div>
    <div class="notBuy" v-show="isCartNull">
      <div class="noDataTitle">
        尚未選購商品，引導去
        <router-link tag="span" to="/zoo/onlineBuy" class="gotoShopping"
          >購物商城</router-link
        >選購
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import CartItem from "@/components/CartItem";
import { getLocal, removeLocal } from "@/plugins/local";
// import { DB_cartList } from "@/db/cartList";
export default {
  name: "Cart",
  inject: ["reload"],
  data() {
    return {
      // DoBuy: false,
      inputName: "",
      inputAddress: "",
      inputCredit: "",
    };
  },
  computed: {
    ...mapState(["cartList", "isCartNull"]),
    ...mapGetters(["totalFee"]),
  },
  components: {
    CartItem,
  },
  methods: {
    pay() {
      removeLocal("cartList");
      this.reload();
      console.log("結帳完成");
    },
  },
};
</script>

<style lang="scss" scoped>
.cartList {
  margin: 0 auto;
  width: 80%;
  margin-top: 7rem;

  .cartLists {
    .list_title {
      ul {
        // margin: 0 15px;
        // border: 3px solid #000;
        background-color: rgba(4, 105, 75, 0.226);
        padding: 30px 10px;
        display: flex;
        li {
          text-align: center;
          font-size: 1.2rem;
          font-weight: 800;
          width: 20%;
        }
      }
    }
    .payment {
      // border: 2px double red;
      .box {
        height: 100%;
        li {
          width: 15%;
          float: right;
          text-align: center;
        }
      }
    }

    .payment {
      display: flex;
      margin-top: 30px;
      // border: 5px solid rgb(61, 25, 146);
      .fee {
        margin-left: 20px;
        padding: 30px 20px;
        border-radius: 21px;
        width: 80%;
        border: 1px solid #ccc;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        font-size: 1.3rem;
        .feeTitle {
          width: 100%;
          border-bottom: 3px solid #000;
          font-weight: 800;
          font-size: 1.5rem;
        }
        .totalMoney {
          color: brown;
          font-size: 3rem;
        }

        .el-button {
          width: 100%;
          margin-top: 10px;
          span {
            font-size: 20px;
          }
        }
      }
      .shipData {
        width: 80%;
        border: 1px solid #ccc;
        padding: 30px 20px;
        border-radius: 21px;
        background-color: #f2caca80;
        .feeTitle {
          font-weight: 800;
          font-size: 1.5rem;
        }
        .el-input {
          margin-top: 10px;
        }
      }
    }
  }

  .notBuy {
    font-size: 3rem;
    .gotoShopping {
      font-weight: 800;
      cursor: pointer;
      color: brown;
    }
  }
}
</style>
