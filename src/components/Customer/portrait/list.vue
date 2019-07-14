<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <span></span>
        <p>客户画像列表</p>
      </div>
      <div class="ma_content">
        <div class="ma_screen">
          <div class="div_row">
            <div class="ma_ui_div">
              <p>所在区域：</p>
              <div class="input_ss">
                <el-select
                  style="width: 49%;"
                  @change="change_2"
                  size="medium"
                  v-model="contract_Type"
                  placeholder="全部省份"
                >
                  <el-option
                    v-for="item in select_contractType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-select
                  size="medium"
                  style="width: 49%;"
                  v-model="contract_city"
                  clearable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in select_contractCity"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
            <div class="ma_ui_div">
              <p>所属行业：</p>
              <div class="input_ss">
                <el-select
                  style="width: 100%;"
                  size="medium"
                  v-model="time_value"
                  placeholder="全部行业"
                >
                  <el-option
                    v-for="item in timeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="div_row">
            <div class="ma_ui_div">
              <p>客户名称：</p>
              <div class="input_ss">
                  <el-input placeholder="请输入关键词" size="medium" v-model="value9"></el-input>
              </div>
            </div>
            <div class="ma_ui_div">
              <p>所属客户经理：</p>
              <div class="input_ss">
                <el-select
                  style="width: 100%;"
                  v-model="value9_s"
                  filterable
                  remote
                  clearable
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="remoteMethod_s"
                  :loading="loading_s"
                >
                  <el-option
                    v-for="item in options4_s"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="div_row">
            <div class="ma_ui_div ma_ui_btn" style="padding-bottom: 10px">
              <el-button size="small" type="primary" @click="find_list">筛选</el-button>
              <el-button size="small" @click="empty_find">清空</el-button>
            </div>
          </div>
        </div>
        <div class="ma_btn">
          <el-button size="small" type="primary" @click="add_contract">创建画像</el-button>
        </div>
        <div v-if="this.no_val == 1" class="content_list">
          <div
            v-for="(item,index) in this.list_con.list"
            @click="list_daterial(item.id)"
            class="content_list_div"
            :key="index"
          >
            <div class="content_list_con">
              <div class="list_img">
                <!-- <img v-if="item.signStatus == '未签约'" src="../../../assets/aImg/kh_01.png" alt /> -->
                <img  src="../../../assets/aImg/kh_02.png" alt />
                <!-- <img v-if="item.signStatus == '待续约'" src="../../../assets/aImg/kh_03.png" alt /> -->
              </div>
              <div class="list_right">
                <p>
                  <label>{{item.name}}</label>
                  <!-- <span>{{item.signStatus}}</span> -->
                </p>
                <p>所属行业：{{Service_con.industry[item.industry]}}</p>
                <p>所在区域：{{item.province}}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="this.no_val == 1 && this.count > this.limit"
          style="text-align: center;margin-top: 20px;padding-bottom: 20px"
        >
          <el-pagination
            background
            :page-size="this.limit"
            :current-page="this.page"
            @current-change="current_change"
            layout="prev, pager, next"
            :total="this.count"
          ></el-pagination>
        </div>
        <div v-if="this.no_val == 0" class="cont_div">
          <img src="../../../assets/aImg/notAvailable.png" alt />
          <p>暂无客户</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入axios
import ajax_list from "../../../api/customer ";

export default {
  data() {
    return {
      url_action: "",
      url_data: {},
      d_success: false,
      load_add_0: false,
      d_error: false,
      show_file_list: false,
      dialogTableVisible_s: false,
      d_list_index: 0, //导入成功条数
      d_fail_index: 0, //导入失败条数
      d_failList: {}, //导入失败列表
      no_val: 1,
      limit: 12,
      page: 1,
      count: 0,
      one_img: 1,
      form_code_q: "",
      form_select_q: "",
      dialogTableVisible: false,
      /*合同列表参数*/
      formData: "{}",
      list_con: {}, //列表内容
      Service: {}, //合同字典参数
      Service_con: { industry: {} }, //字典内容
      select_contractStatus: [
        {
          value: "",
          label: "全部状态"
        }
      ], //客户状态
      select_contractType: [
        {
          value: "",
          label: "全部省份"
        }
      ], //所在区域
      select_contractCity: [
        {
          value: "",
          label: "全部区域"
        }
      ], //所在区域

      timeOptions: [
        {
          value: "",
          label: "全部行业"
        }
      ], //所属行业
      name_list: "", //购电方参数

      contract_Status: "", //客户状态选中的值
      contract_Type: "510000000000", //所在区域选中的值
      contract_Types: "四川省", //所在区域选中的代码
      contract_city: "", //所在区域选中的值

      time_value: "", //所属行业选中值

      options4: [], //客户名称选择框数组
      value9: '', //客户名称选中的值
      list: [], //客户名称过滤
      loading: false, //是否正在从远程获取数据
      gd_list: [], //客户名称后台返回数据
      states: [], //筛选出客户名称数组

      value9_s: '', //客户名称选中的值
      options4_s: [], //购电方选择框数组
      list_s: [], //购电方过滤
      loading_s: false, //是否正在从远程获取数据
      gd_list_s: [], //购电方后台返回数据
      states_s: [] //筛选出购电方名称数组
    };
  },
  // 映射store数据
  computed: {},
  methods: {
    handleSuccess(response, file, fileList) {
      this.load_add_0 = true;
      if (response.status == 200) {
        if (response.body.failSize != 0) {
          //有错误消息
          this.dialogTableVisible_s = false;
          this.d_success = false;
          this.d_error = true;
          this.d_failList = response.body.failList;
          this.d_list_index = response.body.successSize;
          this.d_fail_index = response.body.failSize;
          this.load_add_0 = false;
          this.page = 1;
          (this.formData =
            "{'page':'" +
            this.page +
            "','limit':'" +
            this.limit +
            "','provinceCode':'" +
            this.contract_Type +
            "','cityCode':'" +
            this.contract_city +
            "','name':'" +
            this.value9 +
            "','businessId':'" +
            this.value9_s +
            "','industry':'" +
            this.time_value +
            "'}"),
            //  console.log(this.formData)
            this.list_find(this.formData, 2);
        } else {
          this.dialogTableVisible_s = false;
          this.d_error = false;
          this.d_success = true;
          this.d_list_index = response.body.successSize;
          this.load_add_0 = false;
          this.page = 1;
          (this.formData =
            "{'page':'" +
            this.page +
            "','limit':'" +
            this.limit +
            "','provinceCode':'" +
            this.contract_Type +
            "','cityCode':'" +
            this.contract_city +
            "','name':'" +
            this.value9 +
            "','businessId':'" +
            this.value9_s +
            "','industry':'" +
            this.time_value +
            "'}"),
            //  console.log(this.formData)
            this.list_find(this.formData, 2);
        }
      } else {
        this.load_add_0 = false;
      }
    },
    d_close(a) {
      if (a == "s") {
        this.d_success = false;
      } else if (a == "e") {
        this.d_error = false;
      }
    },
    change_2(val) {
      //点击省份获取市数据

      let obj = {};
      obj = this.select_contractType.find(item => {
        return item.value === val;
      });
      this.contract_Types = obj.label;

      this.form_code_q = {
        code: this.contract_Type,
        areaLevel: "province"
      };
      this.form_code_q = JSON.stringify(this.form_code_q);
      ajax_list.areaListService(
        this.form_code_q,
        res => {
          //列表字典
          this.$emit("login-success", res);
        },
        res => {
          this.form_select_q = res.body;
          this.select_contractCity = [];
          this.contract_city = "";
          var _temp_one_4 = this.select_contractCity; //所在行政区域
          $.map(this.form_select_q, function(value) {
            _temp_one_4.push({
              value: value.code,
              label: value.name
            });
          });
        }
      );
    },
    current_change(val) {
      this.page = val;
      this.formData =
        "{'page':'" +
        this.page +
        "','limit':'" +
        this.limit +
        "','provinceCode':'" +
        this.contract_Type +
        "','cityCode':'" +
        this.contract_city +
        "','name':'" +
        this.value9 +
        "','businessId':'" +
        this.value9_s +
        "','industry':'" +
        this.time_value +
        "'}";
      this.list_find(this.formData, 2);
    },
    add_contract() {
      //创建合同
      this.$router.push("/Customer/portraitEdit/new");
    },

    one_click() {
      this.one_img = 1;
    },
    two_click() {
      this.one_img = 2;
    },
    list_daterial(id) {
      //查看详情
      this.$router.push({
        name: "portraitDetails",
        params: { one: id }
      });
    },
    find_list() {
      //进行筛选
      this.page = 1;
      this.formData =
        "{'page':'" +
        this.page +
        "','limit':'" +
        this.limit +
        "','provinceCode':'" +
        this.contract_Type +
        "','cityCode':'" +
        this.contract_city +
        "','name':'" +
        this.value9 +
        "','businessId':'" +
        this.value9_s +
        "','industry':'" +
        this.time_value +
        "'}";
      //  console.log(this.formData)
      this.list_find(this.formData, 2);
    },
    list_find(data, type) {
      //data：参数   type：第一次列表查询
      ajax_list.customerPortraitListService(
        data,
        res => {
          //合同列表
          this.$emit("login-success", res);
        },
        res => {
          this.list_con = res.body;
          this.count = this.list_con.count;
          if (this.list_con.count == 0) {
            this.no_val = 0;
          } else {
            this.no_val = 1;
          }
        }
      );
    },
    empty_find() {
      //清空筛选条件
      (this.contract_Status = ""),
        (this.value9 = ""),
        (this.value9_s = ""),
        (this.time_value = ""),
        (this.contract_Type = "510000000000");
      this.contract_city = "";
      this.page = 1;
      this.formData =
        "{'page':'" + this.page + "','limit':'" + this.limit + "'}";
      this.list_find(this.formData, 2);

      //默认获取市级下拉列表
      this.form_code_q = {
        code: this.contract_Type,
        areaLevel: "province"
      };
      this.form_code_q = JSON.stringify(this.form_code_q);
      ajax_list.areaListService(
        this.form_code_q,
        res => {
          //列表字典
          this.$emit("login-success", res);
        },
        res => {
          var form_select_q = res.body;
          this.select_contractCity = [];
          this.contract_city = "";
          var _temp_one_4 = this.select_contractCity; //所在行政区域
          $.map(form_select_q, function(value) {
            _temp_one_4.push({
              value: value.code,
              label: value.name
            });
          });
        }
      );
    },
    remoteMethod(query) {
      //客户名称远程搜索选择
      if (query !== "") {
        /*清空临时数组*/
        this.states = [];
        this.list = [];
        this.options4 = [];

        this.loading = true;
        (this.name_list = "{'name': '" + query + "'}"),
          setTimeout(() => {
            this.loading = false;
            ajax_list.customerListService(
              this.name_list,
              res => {
                //购电方
                this.$emit("login-success", res);
              },
              res => {
                this.gd_list = res.body.list;
                for (var i = 0; i < this.gd_list.length; i++) {
                  this.states.push(this.gd_list[i].name);
                }
                this.list = this.states.map(item => {
                  return { value: item, label: item };
                });
                this.options4 = this.list.filter(item => {
                  return (
                    item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
                  );
                });
              }
            );
          }, 200);
      } else {
        this.options4 = [];
      }
    },
    remoteMethod_s(query) {
      //客户名称远程搜索选择(带客户ID)
      if (query !== "") {
        /*清空临时数组*/
        this.states_s = [];
        this.list_s = [];
        this.options4_s = [];

        this.loading_s = true;
        (this.name_list_s = "{'username': '" + query + "'}"),
          setTimeout(() => {
            this.loading_s = false;
            ajax_list.userListService(
              this.name_list_s,
              res => {
                //name
                this.$emit("login-success", res);
              },
              res => {
                this.gd_list_s = res.body.list;
                for (var i = 0; i < this.gd_list_s.length; i++) {
                  this.states_s.push({
                    name: this.gd_list_s[i].username,
                    id: this.gd_list_s[i].id
                  });
                }
                this.list_s = this.states_s.map(item => {
                  return { value: item.id, label: item.name };
                });

                this.options4_s = this.list_s.filter(item => {
                  return (
                    item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
                  );
                });
              }
            );
          }, 200);
      } else {
        this.options4_s = [];
      }
    },
    import_list_m() {
      var _temp_Export = "{'templateName':'customer-import.xls'}";
      ajax_list.templateDownloadService(
        _temp_Export,
        res => {
          //导出
          this.$emit("login-success", res);
        },
        res => {}
      );
    }
  },
  //生命周期钩子函数，进入页面显示之前获取数据到store
  created() {
    var selfId = localStorage.getItem("adminSelfId") || "";
    var token = localStorage.getItem("adminToken") || "";
    this.url_action = this.HOST + "/apiFile/customerImportService";
    this.url_data = {
      version: "1.0",
      token: token,
      selfId: selfId,
      data: "{}"
    };
    this.formData =
      "{'page':'" +
      this.page +
      "','limit':'" +
      this.limit +
      "','provinceCode':'" +
      this.contract_Type +
      "','cityCode':'" +
      this.contract_city +
      "'}";
    this.list_find(this.formData, 1);
    ajax_list.customerListCodeService(
      this.Service,
      res => {
        //列表字典
        this.$emit("login-success", res);
      },
      res => {
        this.Service_con = res.body;
        var _temp_Status = this.select_contractStatus; //客户状态
        var _temp_type = this.select_contractType; //所在区域
        $.map(this.Service_con.signStatus, function(value, key) {
          _temp_Status.push({
            value: key,
            label: value
          });
        });

        var _temp_industry = this.timeOptions; ////所属行业
        $.map(this.Service_con.industry, function(value, key) {
          _temp_industry.push({
            value: key,
            label: value
          });
        });

        //        for (var i = 0; i < this.Service_con.industry.length; i++) {
        //          var obj = {};
        //          obj.value = this.Service_con.industry[i];
        //          obj.label = this.Service_con.industry[i];
        //          this.timeOptions.push(obj);  //所属行业
        //        }

        for (var i = 0; i < this.Service_con.provinces.length; i++) {
          var obj = {};
          obj.value = this.Service_con.provinces[i].province_code;
          obj.label = this.Service_con.provinces[i].province_name;
          _temp_type.push(obj);
        }
      }
    );

    //获取省级下拉列表
    this.form_code_s = "{}";
    ajax_list.areaListService(
      this.form_code_s,
      res => {
        //列表区域字典
        this.$emit("login-success", res);
      },
      res => {
        this.form_select_s = res.body;
        //          form_one_3:[], //所在区域
        var _temp_one_3 = this.select_contractType; //所在区域
        $.map(this.form_select_s, function(value) {
          _temp_one_3.push({
            value: value.code,
            label: value.name
          });
        });
        //默认获取市级下拉列表
        this.form_code_q = {
          code: this.contract_Type,
          areaLevel: "province"
        };
        this.form_code_q = JSON.stringify(this.form_code_q);
        ajax_list.areaListService(
          this.form_code_q,
          res => {
            //列表字典
            this.$emit("login-success", res);
          },
          res => {
            var form_select_q = res.body;
            this.select_contractCity = [];
            this.contract_city = "";
            var _temp_one_4 = this.select_contractCity; //所在行政区域
            $.map(form_select_q, function(value) {
              _temp_one_4.push({
                value: value.code,
                label: value.name
              });
            });
          }
        );
      }
    );
  }
};
</script>

<style scoped>
p {
  margin: 0px;
  padding: 0px;
}
.marterial {
  width: 100%;
  min-height: calc(100vh - 51px - 28px);
  background-color: white;
  border: 1px solid rgba(229, 229, 229, 1);
  overflow: -webkit-paged-y;
}

.ma_title {
  width: 100%;
  height: 40px;
  /*background-color: #F5F6F7;*/
  border-bottom: 1px solid rgba(229, 229, 229, 1);
}

.ma_content {
  width: 100%;
  min-height: calc(100vh - 61px - 51px - 16px);
}

.ma_title span {
  display: inline-block;
  width: 4px;
  height: 16px;
  margin-top: 12px;
  margin-left: 10px;
  border-radius: 2px;
  background: rgba(0, 119, 221, 1);
  float: left;
}
.ma_title p {
  font-size: 14px;
  height: 40px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  display: inline-block;
  line-height: 40px;
  float: left;
  margin-left: 10px;
}
.ma_screen {
  width: 100%;
  height: 160px;
  padding-top: 20px;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
}
.ma_btn {
  width: calc(100% - 20px);
  padding: 9px 10px;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
}

.div_row {
  width: 100%;
  overflow: auto;
}
.ma_ui_div {
  width: 400px;
  height: 30px;
  float: left;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 5px;
}

.ma_ui_div p {
  width: 90px;
  height: 30px;
  line-height: 30px;
  float: left;
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: right;
  margin-right: 8px;
}

.input_ss {
  float: left;
  width: 260px;
  height: 30px !important;
  float: left;
}
.ma_ui_input .input_ss {
  width: 221.4px;
}
.el-input--medium .el-input__inner {
  height: 30px !important;
}

.content_list {
  width: calc(100% - 60px);
  margin: 0 auto;
  min-height: calc(90vh - 352px);
  background-color: white;
  overflow: auto;
}
.content_list_div {
  width: calc(100% / 3);
  min-width: 360px;
  height: 120px;
  float: left;
  cursor: pointer;
  border-bottom: 1px solid rgba(239, 239, 239, 1);
}
.content_list_div:hover {
  background: rgba(249, 249, 249, 1);
}
.content_list_con {
  width: calc(100% - 20px);
  height: calc(100% - 52px);
  padding: 26px 10px;
  margin: 0px auto;
}
.list_img {
  width: 50px;
  float: left;
  height: 100%;
  vertical-align: middle;
}
.list_img img {
  width: 50px;
  height: 50px;
  margin-top: 9px;
}
.list_right {
  vertical-align: middle;
  float: left;
  margin-left: 20px;
  width: calc(100% - 70px);
}
.list_right p {
  margin: 0;
  padding: 0;
  text-align: left;
}
.list_right p:nth-child(1) {
  font-size: 16px;
  color: rgba(63, 63, 63, 1);
  line-height: 22px;
  margin-bottom: 5px;
}
.list_right p:nth-child(1) span {
  font-size: 10px;
  color: rgba(126, 179, 217, 1);
  /*padding: 4px 4px 2px 4px;*/
  /*line-height:22px;*/
  padding: 3px 1px 1px 0px;
  text-align: left;
  border-radius: 2px;
  border: 1px solid rgba(126, 179, 217, 1);
  position: relative;
  top: -6px;
}
.list_right p:nth-child(1) label {
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(100% - 40px);
}
.list_right p:nth-child(2),
.list_right p:nth-child(3) {
  font-size: 12px;
  color: rgba(144, 144, 144, 1);
  line-height: 17px;
  margin-bottom: 3px;
}

.cont_div {
  width: 240px;
  padding: 50px;
  margin: 0 auto;
}
.cont_div img {
  width: 68px;
  height: 68px;
  margin-left: 86px;
  text-align: center;
}
.cont_div p {
  margin: 0px;
  padding: 0px;
  margin-top: 15px;
  font-size: 20px;
  text-align: center;
  line-height: 28px;
  color: rgba(63, 63, 63, 1);
}

/*** 弹窗 ***/

.add_div {
  background-color: white;
}
.add_div_one {
  width: 100%;
  height: 250px;
  background: rgba(73, 138, 243, 1);
}
.add_div_one .one_title {
  margin-left: 28px;
  padding-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: rgba(254, 254, 254, 1);
}
.add_div_one .one_title i {
  float: right;
  margin-right: 28px;
  font-size: 18px;
  margin-top: 2px;
}
.one_con {
  width: 70%;
  margin: 0px auto;
}

.one_con_img {
  width: 50%;
  float: left;
  margin-top: 10px;
}
.one_con_img p {
  margin-top: 30px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: rgba(254, 254, 254, 1);
}
.one_con_img div {
  width: 130px;
  height: 130px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 50%;
}
.one_con .one_img {
  background: url("../../../assets/aImg/one_con1s.png") center no-repeat;
}
.one_con .one_imgs {
  background: url("../../../assets/aImg/one_con1.png") center no-repeat;
}
.two_img {
  background: url("../../../assets/aImg/one_con2.png") center no-repeat;
}
.two_imgs {
  background: url("../../../assets/aImg/one_con2s.png") center no-repeat;
}
.add_div_two {
  margin: 25px auto;
}
.cont_btn {
  width: 120px;
  margin: 10px auto;
}
.cont_btn button {
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 1);
  background: rgba(93, 179, 247, 1);
}
.wi_btn {
  width: 100px;
  margin: 0px auto;
}
.wi_btn button {
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgba(150, 150, 150, 1);
  background: #fff;
}
/***弹窗结束**/
.upload-demo {
  display: inline-block;
}
/*** 导入弹窗 ***/

.add_list .add_div {
  background-color: white;
}
.add_list .add_div_one {
  width: 100%;
  height: 250px;
  background: rgba(73, 138, 243, 1);
}
.add_list .add_div_one .one_title {
  margin-left: 28px;
  padding-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: rgba(254, 254, 254, 1);
}
.add_list .add_div_one .one_title i {
  float: right;
  margin-right: 28px;
  font-size: 18px;
  margin-top: 2px;
}
.add_list .one_con {
  width: 70%;
  margin: 0px auto;
}

.add_list .one_con_img {
  width: 50%;
  float: left;
  margin-top: 10px;
}
.add_list .one_con_ss {
  width: 30%;
  margin: 0 auto;
  position: relative;
  top: -65px;
  left: 5%;
  color: white;
}
.add_list .one_con_three {
  width: 50%;
  margin: 0 auto;
}
.add_list .one_con_img p {
  margin-top: 30px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: rgba(254, 254, 254, 1);
}
.add_list .one_con_three p {
  margin-top: 0px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: rgba(254, 254, 254, 1);
}
.add_list .one_con_three span {
  margin: 0px auto;
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
.add_list .one_con_img div {
  width: 130px;
  height: 130px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 50%;
}
.add_list .one_con_three div {
  width: 130px;
  height: 130px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 50%;
}
.add_list .one_con .one_img {
  background: url("../../../assets/aImg/icon_wenjian.png") center no-repeat;
}

.add_list .two_img {
  background: url("../../../assets/aImg/icon_diannao.png") center no-repeat;
}
.add_list .one_con .three_img {
  background: url("../../../assets/aImg/import_suss.png") center no-repeat;
}
.add_list .one_con .four_img {
  background: url("../../../assets/aImg/import_error.png") center no-repeat;
}
.add_list .add_div_two {
  margin: 25px auto;
}
.add_list .add_su_btn {
  width: 280px;
  margin: 0 auto;
}
.add_list .add_su_btn button {
  width: 100px;
}
.add_list .cont_btn {
  width: 120px;
  margin: 10px auto;
}
.add_list .cont_btn button {
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 1);
  background: rgba(93, 179, 247, 1);
}
.add_list .wi_btn {
  width: 136px;
  margin: 0px auto;
}
.add_list .wi_btn button {
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgba(150, 150, 150, 1);
  background: #fff;
}

.add_list .add_error_list {
  width: 80%;
  margin: 0 auto;
  padding: 10px 20px;
  border-top: 2px solid rgba(235, 235, 235, 1);
}
.add_list .add_error_list p {
  font-size: 16px;
  font-weight: bold;
  color: rgba(134, 134, 134, 1);
  line-height: 20px;
  margin-bottom: 10px;
}
.add_list .add_error_list div {
  margin-bottom: 25px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.add_list .add_error_list div i {
  margin-right: 5px;
}
.add_list .add_error_list div span {
  display: inline-block;
  font-size: 12px;
  line-height: 25px;
  font-weight: 400;
  color: rgba(242, 46, 46, 1);
  margin-left: 12px;
}
/***弹窗结束**/
</style>
<style>
.el-dialog__header {
  background: rgba(73, 138, 243, 1) !important;
}
.el-dialog__title {
  color: white;
  font-size: 16px;
}
.el-dialog__headerbtn .el-dialog__close {
  color: white;
}
.el-dialog__body {
  padding: 0;
}
</style>
