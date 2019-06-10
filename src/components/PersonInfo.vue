<template>
  <div class="fadeIn">
    <section class="jumbotron text-center" style="border-radius: 0px;">
      <div class="container">
        <h1 class="jumbotron-heading">个 人 中 心</h1>
      </div>
    </section>

    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded box-shadow">
        <div class="media text-muted pt-3">
          <img
            data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1"
            alt
            class="mr-2 rounded"
          >
          <p
            class="media-body pb-3 mb-0 small lh-125 border-bottom"
            v-if="personInfo.username === ''"
          >
            <strong class="d-block">
              <h5>用 户 名：</h5>
            </strong>
            {{ $store.state.userInfo.account }}
          </p>
          <p
            class="media-body pb-3 mb-0 small lh-125 border-bottom"
            v-if="personInfo.username !== ''"
          >
            <strong class="d-block">
              <h5>用 户 名：</h5>
            </strong>
            {{ personInfo.username }}
          </p>
        </div>
        <div class="media text-muted pt-3">
          <img
            data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1"
            alt
            class="mr-2 rounded"
          >
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom">
            <strong class="d-block">
              <h5>手 机 号：</h5>
            </strong>
            {{ personInfo.phone}}
          </p>
        </div>
        <div class="media text-muted pt-3">
          <img
            data-src="holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1"
            alt
            class="mr-2 rounded"
          >
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom" v-if="personInfo.email == ''">
            <strong class="d-block">
              <h5>邮 箱 号：</h5>
            </strong>
            {{ '请添加邮箱' }}
          </p>
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom" v-if="personInfo.email != ''">
            <strong class="d-block">
              <h5>邮 箱 号：</h5>
            </strong>
            {{ personInfo.email }}
          </p>
        </div>
        <small class="d-block text-right mt-3 col" style="font-size: 17px;">
          <Button type="primary" @click="toMdPwd()">修改密码</Button>
          <Button type="primary" @click="toMdInfo()">修改资料</Button>
        </small>
      </div>
      <section class="jumbotron text-center bg-white">
        <div class="container">
          <h1 class="jumbotron-heading">收 货 信 息</h1>
        </div>
      </section>
      <Table border :columns="columns2" :data="$store.state.consigneeList"></Table>
    </main>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.LoadUserInfo();
    this.LoadConsignee();
  },
  data() {
    return {
      columns2: [
        {
          title: "姓 名",
          key: "name",
          align: "center",
          width: 120,

          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "地 址",
          width: 360,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "div",
                params.row.province +
                  params.row.city +
                  params.row.district +
                  params.row.address
              )
            ]);
          }
        },
        {
          title: "联系方式",
          key: "phone",
          align: "center",
          width: 170
        },
        {
          title: "邮 政 编 号",
          key: "zipCode",
          align: "center",
          width: 158
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.modify(params.row);
                    }
                  }
                },
                "修改"
              )
            ]);
          }
        },
        {
          key: "action",
          width: 150,
          align: "center",
          renderHeader: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.toAdd();
                    }
                  }
                },
                "添加"
              )
            ]);
          },
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.confirmDelet(params.row.receiverUuid);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ]
    };
  },
  methods: {
    ...mapActions([
      "LoadUserInfo",
      "LoadConsignee",
      "DeleteConsignee",
      "setConsigneeUuid"
    ]),
    confirmDelet(uuid) {
      this.DeleteConsignee(uuid);
    },
    toAdd() {
      this.$router.push({
        name: "AddAss",
        params: { where: "PersonInfo" }
      });
    },
    modify(data) {
      this.setConsigneeUuid(data).then(result => {
        if (result === true) {
          this.$router.push("/MdAss");
        } else {
          console.log(result);
        }
      });
    },
    toMdPwd() {
      this.$router.push("/MdPwd");
    },
    toMdInfo() {
      this.$router.push("/MdInfo");
    }
  },
  computed: {
    ...mapState(["personInfo"])
  },
  store
};
</script>

<style scoped>
h1 {
  font-family: "Times New Roman", Georgia, Serif;
  margin-bottom: 1%;
  font-size: 40px;
  font-weight: 340;
}
h5 {
  font-weight: normal;
  margin-bottom: 15px;
}
p {
  color: #464c5b;
  font-weight: normal;
  font-size: 14px;
}
.box {
  padding: 16px;
  color: #6c757d;
}
</style>
