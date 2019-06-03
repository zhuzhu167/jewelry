<template>
  <div class="container fadeInDown" style="-webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);">
    <div class="row">
      <div class="col-md-8 banner-sec" style="background: #3f4c6b no-repeat bottom;"></div>
      <div class="col-md-4 register-sec">
        <h2 class="text-center">您好，新用户</h2>
        <Form
          v-if="this.is_register_success==false"
          class="register-form"
          :model="formDate"
          ref="formInline"
          :rules="ruleInline"
        >
          <div class="form-group">
            <label for="exampleInputName1" class="text-uppercase">账 号</label>
            <FormItem prop="account">
              <input type="text" class="form-control" v-model="formDate.account">
            </FormItem>
          </div>
          <div class="form-group">
            <label for="exampleInputAddress1" class="text-uppercase">密 码</label>
            <FormItem prop="password">
              <input type="password" class="form-control" v-model="formDate.password">
            </FormItem>
          </div>
          <div class="form-group">
            <label for="exampleInputAddress2" class="text-uppercase" prop="re_password">重新输入密码</label>
            <FormItem prop="re_password">
              <input type="password" class="form-control" v-model="formDate.re_password">
            </FormItem>
          </div>
          <div class="form-group">
            <label for="exampleInputAddress2" class="text-uppercase" prop="phone">输入手机号</label>
            <FormItem prop="phone">
              <input type="text" class="form-control" v-model="formDate.phone">
            </FormItem>
          </div>
          <div class="form-group">
            <label for="exampleInputAddress2" class="text-uppercase" prop="code">输入验证码</label>
            <FormItem prop="code" class="form-inline input-btn">
              <input style="width: 47%;" type="text" class="form-control" v-model="formDate.code">
              <button
                class="btn btn-primary code-btn"
                :class="{disabled: !this.canClick}"
                @click="code(formDate.phone)"
              >{{ this.content }}</button>
            </FormItem>
          </div>
          <div style="margin-top: 50px;">
            <button
              type="submit"
              class="btn btn-primary btn-block btn-lg"
              @click="doRegister('formInline')"
            >注 册</button>
          </div>
        </Form>
        <form class="fadeInto" v-if="this.is_register_success==true">
          <h3 class="text-center text-success" style="margin-top: 130px;">注册成功</h3>
          <div class="text-center" style="margin-top: 140px;">
            <button class="btn btn-primary btn-block btn-lg" @click="toLogin()">立刻登录</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapActions } from "vuex";
export default {
  name: "InputMess",
  data() {
    return {
      content: "发送验证码", // 按钮里显示的内容
      totalTime: 60, //记录具体倒计时时间
      canClick: true,
      formDate: {
        account: "",
        password: "",
        re_password: "",
        phone: "",
        code: ""
      },
      ruleInline: {
        account: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入账号"));
              } else if (value.length < 6 || value.length > 12) {
                callback(new Error("长度应该为6-12位"));
              } else if (/[\W]/g.test(value)) {
                callback(new Error("输入的符号不能含有标点符号"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        password: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入密码"));
              } else if (value.length < 6 || value.length > 12) {
                callback(new Error("长度应该为6-12位"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        re_password: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请再次输入密码"));
              } else if (value !== this.formDate.password) {
                callback(new Error("两次输入密码不一致"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        phone: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入手机号"));
              } else if (value !== "") {
                if (/[\W]/g.test(value)) {
                  callback(new Error("不能含有非法字符"));
                } else if (!/^1[34578]\d{9}$/.test(value)) {
                  callback(new Error("请输入正确的手机格式"));
                } else {
                  callback();
                }
              }
            },
            trigger: "blur"
          }
        ],
        code: [
          {
            validator: (rule, value, callback) => {
              if (value === 0) {
                callback(new Error("请输入验证码"));
              } else if (!/^\d{4}$/.test(value)) {
                callback(new Error("请输入四位整数的验证码"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ]
      },
      is_register_success: false // 是否注册成功
    };
  },
  methods: {
    ...mapActions(["Register", "LoadCode"]),
    doRegister(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          // this.Register(this.formDate).then(result => {
          //   if (result) {
          //     this.is_register_success = true;
          //   }
          // });
        }
      });
    },
    code(phone) {
      if (phone !== "") {
        if (!this.canClick) return; //改动的是这两行代码
        this.LoadCode();
        this.canClick = false;
        this.content = this.totalTime + "s重新发送";
        let clock = window.setInterval(() => {
          this.totalTime--;
          this.content = this.totalTime + "s重新发送";
          if (this.totalTime < 0) {
            window.clearInterval(clock);
            this.content = "重新发送验证码";
            this.totalTime = 10;
            this.canClick = true; //这里重新开启
            this.LoadCode();
          }
        }, 1000);
      } else {
        swal({
          title: "提 示",
          icon: "info",
          text: "请填写手机号，再获取验证码",
          buttons: false,
          timer: 1500
        });
      }
    },
    toLogin() {
      this.$router.push("/Login");
    }
  },
  store
};
</script>

<style scoped>
img {
  width: 100%;
}
.disabled {
  color: #57a3f3;
  cursor: not-allowed;
}
.input-btn >>> .ivu-form-item-content {
  width: 100%;
}
.code-btn {
  width: 50%;
  right: 0px;
  top: 0px;
  position: absolute;
}
.register-block {
  background: #de6262; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #3f4c6b,
    #3f4c6b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #3f4c6b,
    #3f4c6b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  float: left;
  padding: 50px 0;
}
.banner-sec {
  background-size: cover;
  min-height: 500px;
  padding: 0;
}
.container {
  background: #fff;
  background-color: white;
  margin-top: 70px;
}
.carousel-inner {
  border-radius: 0 10px 10px 0;
}
.carousel-caption {
  text-align: left;
  left: 5%;
}
.register-sec {
  padding: 50px 30px;
  position: relative;
}
.register-sec .copy-text {
  position: absolute;
  width: 80%;
  bottom: 20px;
  font-size: 13px;
  text-align: center;
}
.register-sec .copy-text i {
  color: #feb58a;
}
.register-sec .copy-text a {
  color: #e36262;
}
.register-sec h2 {
  margin-bottom: 19px;
  font-weight: 300;
  font-size: 30px;
  color: #007bff;
}
label {
  font-size: 14px;
}
</style>