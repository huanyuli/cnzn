<template>
  <div>
    <div class="marterial">
      <div class="ma_content">
        <div class="cont_div">
          <img src="../../../assets/aImg/notAvailable.png" alt>
          <p>暂无合同</p>
          <div class="cont_btn">
            <el-button @click="dialogTableVisible = true" type="primary">创建合同</el-button>
          </div>
          <div class="wi_btn">
            <el-button @click="dialogTable = true" plain>导入合同</el-button>
          </div>
        </div>
      </div>
    </div>
    <!--<router-view></router-view>-->
    <div class="add_div_one">
      <el-dialog title="新增合同" :visible.sync="dialogTableVisible">
        <div class="add_div">
          <div class="add_div_one">
            <div class="one_con">
              <div class="one_con_img">
                <div v-if="this.one_img == 1" class="one_img"></div>
                <div v-if="this.one_img == 2" @click="one_click" class="one_imgs"></div>
                <p>标准合同</p>
              </div>
              <div class="one_con_img">
                <div v-if="this.one_img == 1" @click="two_click" class="two_img"></div>
                <div v-if="this.one_img == 2" class="two_imgs"></div>
                <p>自定义合同</p>
              </div>
            </div>
          </div>
          <el-checkbox-group v-model="selectedTradingTypes" size="mini" class="tradingTypes">
            <el-checkbox v-for="item in tradingTypes" :key="item.id" :label="item.name" border></el-checkbox>
          </el-checkbox-group>
          <div class="add_div_two" slot="footer">
            <div class="cont_btn">
              <el-button @click="add_contract" type="primary">创建合同</el-button>
            </div>
            <div class="wi_btn">
              <el-button plain @click="dialogTableVisible = false">取消</el-button>
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
    <div class="add_list">
      <el-dialog title="导入合同" :visible.sync="dialogTable">
        <div class="add_div">
          <div class="add_div_one">
            <div class="one_con">
              <div class="one_con_img">
                <div v-if="this.one_imgs == 1" class="one_img"></div>
                <div v-if="this.one_imgs == 2" @click="one_clicks" class="one_imgs"></div>
                <p>标准合同</p>
              </div>
              <div class="one_con_img">
                <div v-if="this.one_imgs == 1" @click="two_clicks" class="two_img"></div>
                <div v-if="this.one_imgs == 2" class="two_imgs"></div>
                <p>自定义合同</p>
              </div>
            </div>
          </div>
          <div class="add_div_two" slot="footer">
            <div class="cont_btn">
              <el-upload
                class="upload-demo"
                :action="this.url_action"
                :on-success="handleSuccess"
                :on-progress="handProgress"
                accept=".pdf"
                name="file"
                :show-file-list="this.show_file_list"
                :data="this.url_data"
              >
                <el-button size="small" :loading="this.load_add" type="primary">导入合同</el-button>
              </el-upload>
              <div slot="tip" class="el-upload__tip">仅支持 pdf 格式</div>
            </div>
            <!--<div class='wi_btn'> <el-button size="small" @click="import_list_m"><i class="el-icon-download"></i>下载导入模板</el-button></div>-->
          </div>
        </div>
      </el-dialog>
      <el-dialog title="导入合同" :visible.sync="d_success">
        <div class="add_div">
          <div class="add_div_one">
            <div class="one_con">
              <div class="one_con_three">
                <div class="three_img"></div>
                <p>导入成功</p>
                <span>共导入{{this.d_list_index}}个合同</span>
              </div>
            </div>
          </div>
          <div class="add_div_two" slot="footer">
            <div class="cont_btn">
              <el-upload
                class="upload-demo"
                :action="this.url_action"
                :on-success="handleSuccess"
                :on-progress="handProgress_2"
                name="file"
                :show-file-list="this.show_file_list"
                :data="this.url_data"
                multiple
              >
                <el-button size="small" type="primary" :loading="this.load_add_2">继续导入</el-button>
              </el-upload>
            </div>
            <div class="wi_btn">
              <el-button size="small" @click="d_close('s')">关闭</el-button>
            </div>
          </div>
        </div>
      </el-dialog>
      <el-dialog title="导入合同" :visible.sync="d_error">
        <div class="add_div">
          <div class="add_div_one">
            <div class="one_con">
              <div class="one_con_three">
                <div class="four_img"></div>
                <p>导入失败</p>
                <!--<span>共导入{{this.d_list_index + d_fail_index}}个合同，其中{{this.d_fail_index}}个导入失败</span>-->
              </div>
            </div>
          </div>
          <div class="add_div_two" slot="footer">
            <div class="add_su_btn">
              <el-upload
                class="upload-demo"
                :action="this.url_action"
                :on-success="handleSuccess"
                :on-progress="handProgress_2"
                name="file"
                :show-file-list="this.show_file_list"
                :data="this.url_data"
                multiple
              >
                <el-button size="small" type="primary" :loading="this.load_add_2">重新导入</el-button>
              </el-upload>
              <el-button size="small" @click="d_close('e')">关闭</el-button>
            </div>
          </div>
          <!--<div class="add_error_list">-->
          <!--<p>导入失败信息：</p>-->
          <!--<div v-for='(item,index) in this.d_failList'> <i class="el-icon-warning" style="color: red"></i>  {{item.customerName}}  <span>{{item.errorMsg}} </span> </div>-->
          <!--</div>-->
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// 引入axios
import sys_ajax from "../../../api/sys";
export default {
  data() {
    return {
      tradingTypes: [],
      selectedTradingTypes: [],

      token_s: {},
      selfId_s: "",
      load_add: false,
      load_add_2: false,
      load_add_3: false,
      testpdfurl: "",
      one_img: 1,
      one_imgs: 1,
      dialogTableVisible: false,

      dialogTable: false,
      url_action: "",
      url_data: {},
      d_success: false,
      d_error: false,
      show_file_list: false,
      d_list_index: 0, //导入成功条数
      d_fail_index: 0, //导入失败条数
      d_failList: {} //导入失败列表
    };
  },
  // 映射store数据
  computed: {},
  methods: {
    handProgress() {
      this.load_add = true;
    },
    handProgress_2() {
      this.load_add_2 = true;
    },
    handProgress_3() {
      this.load_add_3 = true;
    },
    handleSuccess(response, file, fileList) {
      this.load_add = false;
      this.load_add_2 = false;
      this.load_add_3 = false;
      if (response.status == 200) {
        this.dialogTable = false;
        this.d_error = false;
        this.d_success = true;
        this.d_list_index = 1;
      } else {
        this.dialogTable = false;
        this.d_success = false;
        this.d_error = true;
        this.d_failList = response.body.failList;
        this.d_list_index = response.body.successSize;
        this.d_fail_index = response.body.failSize;
      }
      this.page = 1;
      (this.formData =
        "{'page':'" +
        this.page +
        "','limit':'" +
        this.limit +
        "','contractStatus': '" +
        this.contract_Status +
        "','contractType':'" +
        this.contract_Type +
        "','name':'" +
        this.value9 +
        "','transactionCycle':'" +
        this.time_value +
        "'}"),
        this.list_find(this.formData, 2);
    },
    d_close(a) {
      if (a == "s") {
        this.d_success = false;
      } else if (a == "e") {
        this.d_error = false;
      }
    },
    ret_add() {
      //返回
      this.$router.push("/Contract/sellElectric");
    },
    one_click() {
      this.one_img = 1;
    },
    two_click() {
      this.one_img = 2;
    },
    one_clicks() {
      this.one_imgs = 1;
      this.url_data = {
        version: "1.0",
        selfId: this.selfId_s,
        token: this.token_s,
        data: "{'contractType':'STANDARD'}"
      };
    },
    two_clicks() {
      this.one_imgs = 2;
      this.url_data = {
        version: "1.0",
        selfId: this.selfId_s,
        token: this.token_s,
        data: "{'contractType':'CUSTOMIZE'}"
      };
    },
    add_contract() {
      //创建合同
      this.bus.add_contractType = this.one_img;
      this.bus.tradingTypes = this.selectedTradingTypes.map(name => {
        return this.tradingTypes.find(item => item.name === name);
      });
      this.dialogTableVisible = false;
      this.$router.push("/Contract/add");
    },

    aff_lead() {
      //导入合同
      //        this.$router.push('/Customer/details');
    },
    aff_add() {
      //创建合同
      this.$router.push("/Contract/add");
    }
  },
  //生命周期钩子函数，进入页面显示之前获取数据到store
  created() {
    this.token_s = localStorage.getItem("adminToken") || "";
    this.selfId_s = localStorage.getItem("adminSelfId") || "";
    this.url_action = this.HOST + "/apiFile/contractImportService";
    this.url_data = {
      version: "1.0",
      selfId: this.selfId_s,
      token: this.token_s,
      data: "{'contractType':'STANDARD'}"
    };
    sys_ajax.contractTableListService({ limit: 99999 }, res => {
      this.tradingTypes = res.body.list || [];
    });
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
.ma_title_left {
  padding-right: 10px;
  float: left;
  cursor: pointer;
}
.ma_content {
  width: 100%;

  /*min-height: calc(100vh - 61px - 51px - 16px);*/
  min-height: calc(100vh - 61px - 51px - 30px);
}

.ma_title i {
  float: left;
  width: 9px;
  height: 15px;
  color: #0077de;
  font-weight: 800;
  margin-top: 12px;
  margin-left: 10px;
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
.cont_btn {
  width: 100%;
  margin-top: 20px;
}
.cont_btn button {
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 1);
  background: rgba(93, 179, 247, 1);
}
.wi_btn {
  width: 100%;
  margin-top: 10px;
}
.wi_btn button {
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgba(150, 150, 150, 1);
  background: #fff;
}
.text_btn {
  text-align: center;
  font-size: 14px;
  color: rgba(126, 127, 129, 1);
}
.text_btn .el-button--text {
  font-size: 14px;
  color: rgba(126, 127, 129, 1);
}
/*** 弹窗 ***/

.add_div_one .add_div {
  background-color: white;
}
.add_div_one .add_div_one {
  width: 100%;
  height: 250px;
  background: rgba(73, 138, 243, 1);
}
.add_div_one .add_div_one .one_title {
  margin-left: 28px;
  padding-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: rgba(254, 254, 254, 1);
}
.add_div_one .add_div_one .one_title i {
  float: right;
  margin-right: 28px;
  font-size: 18px;
  margin-top: 2px;
}
.add_div_one .one_con {
  width: 70%;
  margin: 0px auto;
}

.add_div_one .one_con_img {
  width: 50%;
  float: left;
  margin-top: 10px;
}
.add_div_one .one_con_img p {
  margin-top: 30px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: rgba(254, 254, 254, 1);
}
.add_div_one .one_con_img div {
  width: 130px;
  height: 130px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 50%;
}
.add_div_one .one_con .one_img {
  background: url("../../../assets/aImg/one_con1s.png") center no-repeat;
}
.add_div_one .one_con .one_imgs {
  background: url("../../../assets/aImg/one_con1.png") center no-repeat;
}
.add_div_one .two_img {
  background: url("../../../assets/aImg/one_con2.png") center no-repeat;
}
.add_div_one .two_imgs {
  background: url("../../../assets/aImg/one_con2s.png") center no-repeat;
}
.add_div_one .add_div_two {
  margin: 25px auto;
}
.add_div_one .cont_btn {
  width: 100px;
  margin: 10px auto;
}
.add_div_one .cont_btn button {
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 1);
  background: rgba(93, 179, 247, 1);
}
.add_div_one .wi_btn {
  width: 100px;
  margin: 0px auto;
}
.add_div_one .wi_btn button {
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgba(150, 150, 150, 1);
  background: #fff;
}
/***弹窗结束**/
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
/*.add_list .one_con .one_img{*/
/*background: url("../../../assets/aImg/icon_wenjian.png") center no-repeat;*/
/*}*/
/*.add_list .two_img{*/
/*background: url("../../../assets/aImg/icon_diannao.png") center no-repeat;*/
/*}*/
.add_list .one_con .three_img {
  background: url("../../../assets/aImg/import_suss.png") center no-repeat;
}
.add_list .one_con .four_img {
  background: url("../../../assets/aImg/import_error.png") center no-repeat;
}
.add_list .add_div_two {
  margin: 25px auto;
  padding-bottom: 20px;
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
  margin: 0px auto;
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
