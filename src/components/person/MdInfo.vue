<template>
  <div class="box">
    <div class="container">
      <div class="row" style="box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);">
        <div class="col-md-3">
          <div class="contact-info">
            <h1 style="font-weight: lighter; color: #fff;">修改资料</h1>
            <h5 style="font-weight: lighter; color: #fff;">为了保证我们的服务质量，请务必认真地填写您的信息 ！</h5>
          </div>
        </div>
        <div class="col-md-9" :model="formData">
          <div class="contact-form">
            <div class="form-group">
              <label class="col-sm" style="font-size:12px">姓 名</label>
              <div class="col-sm-10">
                <input class="form-control" v-model="formData.name">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm" style="font-size:12px">手机号</label>
              <div class="col-sm-10">
                <input class="form-control" v-model="formData.phone">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm" style="font-size:12px">邮箱号</label>
              <div class="col-sm-10">
                <input class="form-control" v-model="formData.email">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button class="btn" @click="modify()">保存</button>
                <button class="btn" @click="cancel()">取消</button>
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
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      formData: {
        email: store.state.personInfo.email,
        name: store.state.personInfo.username,
        phone: store.state.personInfo.phone
      }
    };
  },
  methods: {
    ...mapActions(["ModifyPerson", "LoadUserInfo"]),
    modify(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.ModifyPerson(this.formData).then(result => {
            if (result) {
              this.LoadUserInfo();
              this.$router.push("/PersonInfo");
            }
          });
        }
      });
    },
    cancel() {
      this.$router.push("/PersonInfo");
    }
  },
  computed: {
    ...mapState(["personInfo"])
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
  background: #343a40;
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
  font-weight: 600;
}
.contact-form button {
  background: #007bff;
  color: #fff;
  font-weight: 600;
  width: 25%;
}
.contact-form button:focus {
  box-shadow: none;
}
</style>