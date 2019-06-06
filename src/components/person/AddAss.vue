<template>
  <div class="box fadeInDown">
    <div class="container">
      <div class="row" style="box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);">
        <div class="col-md-3">
          <div class="contact-info">
            <h1 style="font-weight: 340; color: #fff;">添加地址</h1>
            <h5 style="font-weight: 340; color: #fff;">为了保证我们的服务质量，请务必认真地填写您的信息 ！</h5>
          </div>
        </div>
        <div class="col-md-9" :model="formData">
          <div class="contact-form">
            <div class="form-group">
              <label class="col-sm" style="font-size:14px">收货人姓名</label>
              <div class="col-sm-10">
                <input class="form-control" v-model="formData.name" required>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm" style="font-size:14px">收货人手机号</label>
              <div class="col-sm-10">
                <input class="form-control" v-model="formData.phone">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm" style="font-size:14px">收货人所在省</label>
              <div class="col-sm-10">
                <input class="form-control" v-model="formData.province">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm" style="font-size:14px">收货人所在市</label>
              <div class="col-sm-10">
                <input class="form-control" v-model="formData.city">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm" style="font-size:14px">收货人所在区/县</label>
              <div class="col-sm-10">
                <input class="form-control" v-model="formData.district">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm" style="font-size:14px">详细地址</label>
              <div class="col-sm-10">
                <input class="form-control" v-model="formData.address">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm" style="font-size:14px">邮政编号</label>
              <div class="col-sm-10">
                <input class="form-control" v-model="formData.zipCode">
              </div>
            </div>
            <div class="form-group" style="margin-top: 40px;">
              <div class="col-sm-offset-2 col-sm-10">
                <Button type="primary" @click="add()">添加</Button>
                <Button type="primary" @click="cancel()">取消</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formData: {
        address: "",
        city: "",
        district: "",
        name: "",
        phone: "",
        province: "",
        zipCode: ""
      }
    };
  },
  methods: {
    ...mapActions(["LoadConsignee", "AddConsignee"]),
    add() {
      this.AddConsignee(this.formData).then(result => {
        if (this.$route.params.where === "SelectConsignee") {
          this.$router.push("/SelectConsignee");
        } else {
          this.$router.push("/PersonInfo");
        }
      });
    },
    cancel() {
      this.$router.push("/PersonInfo");
    }
  },
  store
};
</script>


<style scoped>
.box {
  margin-top: 30px;
  width: 100%;
}
.col-md-3 {
  background: #000;
  padding: 4%;
}
.contact-info {
  margin-top: 10%;
}
.contact-info img {
  margin-bottom: 15%;
}
.contact-info h2 {
  margin-bottom: 10%;
}
.col-md-9 {
  background: #fff;
  padding: 3%;
}
.contact-form label {
  font-weight: 400;
}
.contact-form button {
  color: #fff;
  width: 25%;
}
.contact-form button:focus {
  box-shadow: none;
}
</style>