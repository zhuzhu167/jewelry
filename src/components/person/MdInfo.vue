<template>
  <div class="box fadeInDown">
    <div class="container">
      <div class="row" style="box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);">
        <div class="col-md-3">
          <div class="contact-info">
            <h1 style="font-weight: 340; color: #fff;">修改资料</h1>
            <h5 style="font-weight: 340; color: #fff;">为了保证我们的服务质量，请务必认真地填写您的信息 ！</h5>
          </div>
        </div>
        <div class="col-md-9" :model="formData">
          <div class="contact-form">
            <Form ref="formInline" :model="formData" :rules="ruleInline">
              <div class="form-group">
                <label class="col-sm" style="font-size:14px">姓 名</label>
                <div class="col-sm-10">
                  <FormItem prop="name">
                    <input class="form-control" v-model="formData.name">
                  </FormItem>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm" style="font-size:14px">邮箱号</label>
                <div class="col-sm-10">
                  <FormItem prop="email">
                    <input class="form-control" v-model="formData.email">
                  </FormItem>
                </div>
              </div>
            </Form>
            <div class="form-group" style="margin-top: 40px;">
              <div class="col-sm-offset-2 col-sm-10">
                <button class="btn" @click="modify('formInline')">保存</button>
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
        name: store.state.personInfo.username
      },
      ruleInline: {
        email: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入邮箱号"));
              } else if (
                !/^([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(
                  value
                )
              ) {
                callback(new Error("请输入正确的邮箱格式"));
              } else {
                callback();
              }
            }
          }
        ],
        name: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入用户名"));
              } else if (value !== "") {
                if (/[^a-zA-Z0-9\u4E00-\u9FA5]/g.test(value)) {
                  callback(new Error("不能含有非法字符"));
                } else {
                  callback();
                }
              }
            },
            trigger: "blur"
          }
        ]
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
              swal({
                title: "提 示",
                icon: "success",
                text: "修改个人资料成功",
                buttons: false,
                timer: 1500
              });
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
  background: #007bff;
  color: #fff;
  font-weight: 400;
  width: 25%;
}
.contact-form button:focus {
  box-shadow: none;
}
</style>