<template>
  <div>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="box">
          <Form>
            <FormItem>
              <img src="http://pry3timq7.bkt.clouddn.com/10.jpeg">
            </FormItem>
            <FormItem>
              <p>扫码支付,支付完成后点击已支付</p>
            </FormItem>
            <FormItem>
              <h1>￥{{ $store.state.sumPrice }}</h1>
            </FormItem>
            <FormItem>
              <input
                style="font-weight: 400;"
                type="button"
                class="fadeIn fourth bg-success"
                value="已支付"
                @click="paySuccess()"
              >
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapActions } from "vuex";
export default {
  name: "Pay",
  methods: {
    ...mapActions(["payO"]),
    paySuccess() {
      if (store.state.sumPrice !== 0 && store.state.orderCommodityUuid !== "") {
        swal({
          title: "提 示",
          icon: "error",
          button: "确定",
          dangerMode: true,
          text: "我知道你肯定没给钱！所以我也不会发货，嘻嘻！"
        });
        this.payO(store.state.orderCommodityUuid);
        this.$router.push("/Order");
      }
    }
  },
  store
};
</script>

<style scoped>
/* STRUCTURE */
img {
  width: 100%;
}

.wrapper {
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #2d8cf0;
}

/* FORM TYPOGRAPHY*/

input[type="button"] {
  background-color: #2d8cf0;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 17px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover {
  background-color: #2d8cf0;
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"],
input[type="password"] {
  background-color: #f6f6f6;
  border: none;
  color: #000;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #007bff;
}

input[type="text"] :placeholder,
input[type="password"]:placeholder {
  color: #cccccc;
}

/* ANIMATIONS */
/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}
/* OTHERS */

*:focus {
  outline: none;
}
</style>
