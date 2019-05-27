<template>
  <div>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
          <h2 style="font-weight: 340;">JewelrySource</h2>
          <h4 style="font-weight: 340;">探索更多</h4>
        </div>
        <div class="box">
          <Form ref="formInline" :model="formDate" :rules="ruleInline">
            <FormItem prop="account">
              <input
                v-model="formDate.account"
                type="text"
                class="fadeIn second"
                name="login"
                placeholder="请输入账号"
              >
            </FormItem>
            <FormItem prop="password">
              <input
                v-model="formDate.password"
                type="password"
                class="fadeIn third"
                name="login"
                placeholder="请输入密码"
              >
            </FormItem>
            <input
              style="font-weight: 400;"
              type="button"
              class="fadeIn fourth bg-primary"
              value="登 录"
              @click="doLogin('formInline')"
            >
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapMutations, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      formDate: {
        account: "",
        password: ""
      },
      ruleInline: {
        account: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入账号"));
              } else if (value.length < 6 || value.length > 12) {
                callback(new Error("长度应该为6-12位"));
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
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    ...mapMutations(["SET_USER_LOGIN_INFO"]),
    ...mapActions(["Login"]),
    doLogin(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.Login(this.formDate).then(result => {
            if (result) {
              this.$router.push({
                path: "/"
              });
            }
          });
        }
      });
    }
  },
  store
};
</script>

<style scoped>
.box >>> .ivu-form-item-error-tip {
  left: 10%;
}
h2 {
  text-align: center;
  font-size: 35px;
  font-weight: 600;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  margin-top: 60px;
  margin-bottom: 45px;
  color: #3f475a;
}
h4 {
  margin-bottom: 40px;
  color: #007bff;
}

/* STRUCTURE */

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
  border-bottom: 2px solid #007bff;
}

/* FORM TYPOGRAPHY*/

input[type="button"] {
  background-color: #007bff;
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
  background-color: #007bff;
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
