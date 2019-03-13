<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <span></span>
        <p>售电合同列表</p>
      </div>
      <div class="ma_content">
        <div class="ma_screen">
         <div class="div_row">
           <div class="ma_ui_div">
             <p>合同状态：</p>
             <div class="input_ss">
               <el-select style="width: 100%;"  size="medium" v-model="contract_Status" placeholder="全部状态">
                 <el-option
                   v-for="item in select_contractStatus"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
                 </el-option>
               </el-select>
             </div>
           </div>
           <div class="ma_ui_div">
             <p>合同类型：</p>
             <div class="input_ss">
               <el-select style="width: 100%;"  size="medium" v-model="contract_Type" placeholder="所有类型">
                 <el-option
                   v-for="item in select_contractType"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
                 </el-option>
               </el-select>
             </div>
           </div>
         </div>
         <div class="div_row">
           <div class="ma_ui_div">
             <p>交易周期：</p>
             <div class="input_ss">
               <el-select style="width: 100%;"  size="medium" v-model="time_value" placeholder="请选择">
                 <el-option
                   v-for="item in timeOptions"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
                 </el-option>
               </el-select>
             </div>
           </div>
           <div class="ma_ui_div">
             <p>购电方：</p>
             <div class="input_ss">
               <el-select style="width: 100%;"  v-model="value9" filterable remote clearable reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
                 <el-option
                   v-for="item in options4"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
                 </el-option>
               </el-select>


             </div>
           </div>
         </div>

          <div class="ma_ui_div ma_ui_btn">
            <el-button size="small" type="primary" @click="find_list">筛选</el-button>
            <el-button size="small" @click="empty_find">清空</el-button>
          </div>
        </div>
        <div class="ma_btn">
          <el-button size="small" type="primary" @click="dialogTableVisible = true">创建合同</el-button>
          <el-button size="small" @click="dialogTable = true" type="primary">导入合同</el-button>
        </div>
        <div v-if="this.no_val == 1" class="content_list">
          <div   v-for='(item,index) in this.list_con.list'  @click="list_daterial(item.id,item.dataSourceType,index)" class="content_list_div">
            <div class="content_list_con">
              <div class="list_img">
                <img v-if="item.contractStatus == '草稿'" src="../../../assets/aImg/cp_1.png" alt="">
                <img v-if="item.contractStatus == '待审批'" src="../../../assets/aImg/cp_2.png" alt="">
                <img v-if="item.contractStatus == '审批未通过'" src="../../../assets/aImg/cp_3.png" alt="">
                <img v-if="item.contractStatus == '未执行'" src="../../../assets/aImg/cp_4.png" alt="">
                <img v-if="item.contractStatus == '执行中'" src="../../../assets/aImg/cp_5.png" alt="">
                <img v-if="item.contractStatus == '已结束'" src="../../../assets/aImg/cp_6.png" alt="">
              </div>
              <div class="list_right">
                <p ><label>{{item.contract}}</label> <span>{{item.contractType}}</span></p>
                <p>合同起止时间：{{item.contractStartTime}}- {{item.contractEndTime}}</p>
                <p>购电方：{{item.customerName}}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="this.no_val == 1 && this.count > this.limit" style="text-align: center;margin-top: 20px;padding-bottom: 20px">
          <el-pagination
            background
            :page-size="this.limit"
            :current-page="this.page"
            @current-change="current_change"
            layout="prev, pager, next"
            :total="this.count">
          </el-pagination>
        </div>
        <div v-if="this.no_val == 0" class="cont_div">
          <img src="../../../assets/aImg/notAvailable.png" alt="">
          <p>暂无合同</p>
        </div>

      </div>
    </div>

  <el-dialog title="新增合同"  :visible.sync="dialogTableVisible">
    <div class='add_div'>
      <div class='add_div_one'>
        <div class='one_con'>
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
      <div class='add_div_two' slot="footer" >
        <div class='cont_btn' ><el-button @click="add_contract" type='primary'>创建合同</el-button></div>
        <div class='wi_btn'><el-button plain @click="dialogTableVisible = false">取消</el-button></div>
      </div>
    </div>
  </el-dialog>
    <div class="add_list">
      <el-dialog title="导入合同"  :visible.sync="dialogTable">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
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
          <div class='add_div_two' slot="footer" >
            <div class='cont_btn' >
              <el-upload
                class="upload-demo"
                :action="this.url_action"
                :on-success="handleSuccess"
                :on-progress="handProgress"
                name="file"
                :show-file-list="this.show_file_list"
                :data="this.url_data"
              >
                <el-button size="small" :loading="this.load_add" type="primary" >导入合同</el-button></el-upload>
            </div>
            <!--<div class='wi_btn'> <el-button size="small" @click="import_list_m"><i class="el-icon-download"></i>下载导入模板</el-button></div>-->
          </div>
        </div>
      </el-dialog>
      <el-dialog title="导入合同"    :visible.sync="d_success">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <div class="one_con_three">
                <div  class="three_img"></div>
                <p>导入成功</p>
                <span>共导入{{this.d_list_index}}个合同</span>
              </div>
            </div>
          </div>
          <div class='add_div_two' slot="footer" >
            <div class='cont_btn' >
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
                <el-button size="small" type="primary" :loading="this.load_add_2" >继续导入</el-button></el-upload>
            </div>
            <div class='wi_btn'> <el-button size="small" @click="d_close('s')">关闭</el-button></div>
          </div>
        </div>
      </el-dialog>
      <el-dialog title="导入合同"    :visible.sync="d_error">
        <div class='add_div'>
          <div class='add_div_one'>
            <div class='one_con'>
              <div class="one_con_three">
                <div  class="four_img"></div>
                <p>导入失败</p>
                <!--<span>共导入{{this.d_list_index + d_fail_index}}个合同，其中{{this.d_fail_index}}个导入失败</span>-->
              </div>
            </div>
          </div>
          <div class='add_div_two' slot="footer" >
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
                <el-button size="small" type="primary" :loading="this.load_add_2">重新导入</el-button></el-upload>
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
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  // 引入axios
  import list_contract from '../../../api/contract'

  export default {
    data() {
      return {
        token_s:{},
        selfId_s:"",
        load_add:false,
        load_add_2:false,
        load_add_3:false,
        testpdfurl:'',
        no_val:1,
        one_img:1,
        one_imgs:1,
        dialogTable:false,
        url_action:"",
        url_data:{},
        d_success:false,
        d_error:false,
        show_file_list:false,
        d_list_index:0,   //导入成功条数
        d_fail_index:0,   //导入失败条数
        d_failList:{},   //导入失败列表
        count:0,
        limit:12,  //每页显示条目个数
        page:1,  //当前页
        dialogTableVisible:false,
          /*合同列表参数*/
        formData: "{}",
        list_con:{},  //列表内容
        Service:{},  //合同字典参数
        Service_con:{}, //字典内容
        select_contractStatus:[
          {
              value:'',
            label:"全部状态"
          }
        ],  //合同状态
        select_contractType:[{
          value:'',
          label:"全部类型"
        }],  //合同类型
        timeOptions:[{
          value:'',
          label:"全部周期"
        }],  //交易周期
        name_list:"",  //购电方参数

        contract_Status:"",//合同状态选中的值
        contract_Type:"",//合同类型选中的值
        time_value:"",  //交易周期选中值

        options4: [],  //购电方选择框数组
        value9: [],   //购电方选中的值
        list: [],  //购电方过滤
        loading: false, //是否正在从远程获取数据
        gd_list:[], //购电方后台返回数据
        states: [],  //筛选出购电方名称数组
      }

    },
// 映射store数据
    computed: {

    },
    methods: {
      handProgress(){
        this.load_add = true
      },
      handProgress_2(){
        this.load_add_2 = true
      },
      handProgress_3(){
        this.load_add_3 = true
      },
      handleSuccess(response, file, fileList){
        this.load_add = false
        this.load_add_2 = false
        this.load_add_3 = false
        if(response.status == 200){
          this.dialogTable = false
          this.d_error = false
          this.d_success = true
          this.d_list_index = 1
        }else{
          this.dialogTable = false
          this.d_success = false
          this.d_error = true
          this.d_failList = response.body.failList
          this.d_list_index = response.body.successSize
          this.d_fail_index = response.body.failSize
        }
        this.page = 1
        this.formData = "{'page':'"+ this.page +"','limit':'"+ this.limit +"','contractStatus': '"+ this.contract_Status +"','contractType':'"+ this.contract_Type +"','name':'"+ this.value9 +"','transactionCycle':'"+ this.time_value +"'}",
          this.list_find(this.formData,2)

      },
      d_close(a){
        if(a == "s"){
          this.d_success = false
        }else if(a == "e"){
          this.d_error = false
        }

      },
      current_change(val){
        this.page = val
        this.formData = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
        this.list_find(this.formData,2)
      },
      add_contract(){ //创建合同
        this.bus.add_contractType = this.one_img
        this.dialogTableVisible = false;
        this.$router.push('/Contract/add');
      },
      one_click(){
        this.one_img = 1

      },
      two_click(){
        this.one_img = 2

      },
      one_clicks(){
        this.one_imgs = 1
        this.url_data = {
          "version":"1.0",
          "selfId":this.selfId_s,
          "token":this.token_s,
          "data":"{'contractType':'STANDARD'}"
        }
      },
      two_clicks(){
        this.one_imgs = 2
        this.url_data = {
          "version":"1.0",
          "selfId":this.selfId_s,
          "token":this.token_s,
          "data":"{'contractType':'CUSTOMIZE'}"
        }
      },
      list_daterial(id,type,index){ //查看详情
        if(type == "INPUT"){
          this.$router.push({name:'sellDetail',params:{one:id}});
        }else{
         this.$router.push({name:'showPdf',params:{one:this.list_con.list[index].filePath}});
        }

//
      },
      find_list(){   //进行筛选
        this.page = 1
        this.formData = "{'page':'"+ this.page +"','limit':'"+ this.limit +"','contractStatus': '"+ this.contract_Status +"','contractType':'"+ this.contract_Type +"','name':'"+ this.value9 +"','transactionCycle':'"+ this.time_value +"'}",
          this.list_find(this.formData,2)
      },
      list_find(data,type){  //data：参数   type：第一次列表查询
        list_contract.contractListService(data, res => {  //合同列表
          this.$emit('login-success', res);
        }, (res) => {
          this.list_con = res.body;
          this.count = this.list_con.count
          if(this.list_con.count == 0){  //没有数据跳转页面
            if(type == 1){
              this.$router.push('/Contract/notAvailable');
            }else {
              this.no_val = 0
            }
          }else{
            this.no_val = 1
          }
        });
      },
      empty_find(){  //清空筛选条件
        this.contract_Status = "",
        this.value9 = "",
        this.time_value = "",
        this.contract_Type = ""
        this.page = 1
        this.formData = "{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
        this.list_find(this.formData,2)
      },
      remoteMethod(query) { //购电方远程搜索选择
        if (query !== '') {
            /*清空临时数组*/
          this.states = [];
          this.list = [];
          this.options4 = [];

          this.loading = true;
          this.name_list = "{'name': '"+ query +"'}",
          setTimeout(() => {
            this.loading = false;
            list_contract.customerListService(this.name_list, res => {  //购电方
              this.$emit('login-success', res);
            }, (res) => {
              this.gd_list = res.body.list;
              for (var i = 0; i < this.gd_list.length; i++) {
                this.states.push(this.gd_list[i].name);
              }
              this.list = this.states.map(item => {
                return { value: item, label: item };
              });
              this.options4 = this.list.filter(item => {
                return item.label.toLowerCase()
                    .indexOf(query.toLowerCase()) > -1;
              });
            });

          }, 200);
        } else {
          this.options4 = [];
        }
      }
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created () {
      this.token_s = localStorage.getItem('adminToken') || '';
      this.selfId_s = localStorage.getItem('adminSelfId') || '';
      this.url_action = this.HOST + "/apiFile/contractImportService"
      this.url_data = {
        "version":"1.0",
        "selfId":this.selfId_s,
        "token":this.token_s,
        "data":"{'contractType':'STANDARD'}"
      }
      this.formData ="{'page':'"+ this.page +"','limit':'"+ this.limit +"'}"
      this.list_find(this.formData,1);
      list_contract.contractCodeService(this.Service, res => {  //合同字典
        this.$emit('login-success', res);
      }, (res) => {
        this.Service_con = res.body;
        var _temp_Status = this.select_contractStatus;
        var _temp_Type = this.select_contractType;
        $.map(this.Service_con.contractStatus,function(value,key){
          _temp_Status.push({
             value:key,
             label:value
           });
        });
        $.map(this.Service_con.contractType,function(value,key){
          _temp_Type.push({
            value:key,
            label:value
          });
        });

        for (var i = 0; i < this.Service_con.yearLimit.length; i++) {
          var obj = {};
          obj.value = this.Service_con.yearLimit[i];
          obj.label = this.Service_con.yearLimit[i];
          this.timeOptions.push(obj);
        }
      });

    }
  }
</script>

<style scoped>

  p{
    margin: 0px;
    padding: 0px;
  }
  .marterial {
    width: 100%;
    min-height:calc(100vh - 51px - 28px);
    background-color: white;
    border:1px solid rgba(229,229,229,1);
    overflow: -webkit-paged-y;
  }

  .iframe_div{
    width: 100%;
    height: 100vh;
  }
  .ma_title {
    width: 100%;
    height: 40px;
    /*background-color: #F5F6F7;*/
    border-bottom:1px solid rgba(229,229,229,1);
  }

  .ma_content {
    width: 100%;
    min-height: calc(100vh - 61px - 51px - 16px);

  }

  .ma_title span{
    display: inline-block;
    width: 4px;
    height: 16px;
    margin-top: 12px;
    margin-left: 10px;
    border-radius: 2px;
    background:rgba(0,119,221,1);
    float: left;
  }
  .ma_title p{
    font-size:14px;
    height: 40px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    display: inline-block;
    line-height: 40px;
    float: left;
    margin-left: 10px;
  }
  .ma_screen{
    width: 100%;
    height:160px;
    padding-top: 20px;
    border-bottom:1px solid rgba(229,229,229,1);
  }
  .ma_btn{
    width: calc(100% - 20px);
    padding: 9px 10px;
    border-bottom:1px solid rgba(229,229,229,1);
  }

  .div_row{
    width: 100%;
    overflow: auto;
  }
.ma_ui_div{
  width: 370px;
  height: 30px;
  float: left;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 5px;
}

.ma_ui_div p{
  width:60px;
  height:30px;
  line-height: 30px;
  float: left;
  font-size:12px;
  font-weight:400;
  color:rgba(51,51,51,1);
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

  .content_list{
    width: calc(100% - 60px);
    margin: 0 auto;
    min-height: calc(100vh - 352px);
    background-color: white;
    overflow: auto;
  }
  .content_list_div{
    width: calc(100% / 3);
    min-width: 360px;
    height: 120px;
    float: left;
    cursor: pointer;
    border-bottom:1px solid rgba(239,239,239,1);
  }
  .content_list_div:hover{
    background:rgba(249,249,249,1);
  }
  .content_list_con{
    width:calc(100% - 52px);
    height: calc(100% - 52px);
    padding: 26px 26px;
    margin: 0px auto;
  }
  .list_img{
    width: 36px;
    float: left;
    height: 100%;
    vertical-align: middle;
  }
  .list_img img{
    width: 36px;
    height: 36px;
  }
  .list_right{
    vertical-align: middle;
    float: left;
    margin-left: 20px;
    width:calc(100% - 60px);
  }
  .list_right p{
    margin: 0;
    padding: 0;
    text-align: left;
  }
  .list_right p:nth-child(1){
    font-size:16px;
    color:rgba(63,63,63,1);
    line-height:22px;
    margin-bottom: 5px;

  }
  .list_right p:nth-child(1) span{
    font-size:10px;
    color:rgba(126,179,217,1);
    /*padding: 4px 4px 2px 4px;*/
    /*line-height:22px;*/
    padding: 3px 1px 1px 0px;
    text-align: left;
    border-radius: 2px;
    border:1px solid rgba(126,179,217,1);
    position: relative;
    top: -6px;
  }
  .list_right p:nth-child(1) label{
    display: inline-block;
    text-overflow : ellipsis;
    white-space : nowrap;
    overflow : hidden;
    width: calc(100% - 50px);
  }
  .list_right p:nth-child(2), .list_right p:nth-child(3){
    font-size:12px;
    color:rgba(144,144,144,1);
    line-height:17px;
    margin-bottom: 3px;
  }

  .cont_div{
    width: 240px;
    padding: 50px;
    margin: 0 auto;

  }
  .cont_div img{
    width: 68px;
    height: 68px;
    margin-left: 86px;
    text-align: center;

  }
  .cont_div p{
    margin: 0px;
    padding: 0px;
    margin-top: 15px;
    font-size:20px;
    text-align: center;
    line-height: 28px;
    color:rgba(63,63,63,1);
  }

  /*** 弹窗 ***/

  .add_div{
    background-color: white;
  }
  .add_div_one{
    width: 100%;
    height: 250px;
    background:rgba(73,138,243,1);
  }
  .add_div_one .one_title{
    margin-left: 28px;
    padding-top: 20px;
    font-size:16px;
    font-weight:bold;
    color:rgba(254,254,254,1);
  }
  .add_div_one .one_title i{
    float: right;
    margin-right: 28px;
    font-size: 18px;
    margin-top: 2px;
  }
  .one_con{
    width: 70%;
    margin: 0px auto;
  }

  .one_con_img{
    width: 50%;
    float: left;
    margin-top:10px;
  }
  .one_con_img p{
    margin-top: 30px;
    font-size:18px;
    font-weight:400;
    text-align: center;
    color:rgba(254,254,254,1);
  }
  .one_con_img div{
    width: 130px;
    height: 130px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 50%;
  }
  .one_con .one_img{
    background: url("../../../assets/aImg/one_con1s.png") center no-repeat;
  }
  .one_con .one_imgs{
    background: url("../../../assets/aImg/one_con1.png") center no-repeat;
  }
  .two_img{
    background: url("../../../assets/aImg/one_con2.png") center no-repeat;
  }
  .two_imgs{
    background: url("../../../assets/aImg/one_con2s.png") center no-repeat;
  }
  .add_div_two{
    margin: 25px auto;
  }
  .cont_btn{
    width: 100px;
    margin: 10px auto;
  }
  .cont_btn button{
    width: 100%;
    font-size:14px;
    margin-bottom: 10px;
    color:rgba(255,255,255,1);
    background:rgba(93,179,247,1);
  }
  .wi_btn{
    width: 100px;
    margin: 0px auto;
  }
  .wi_btn button{
    width: 100%;
    font-size:14px;
    margin-bottom: 10px;
    color:rgba(150,150,150,1);
    background:#fff;
  }
  /***弹窗结束**/

  .upload-demo{
    display: inline-block;
  }
  /*** 导入弹窗 ***/

  .add_list .add_div{
    background-color: white;
  }
  .add_list .add_div_one{
    width: 100%;
    height: 250px;
    background:rgba(73,138,243,1);
  }
  .add_list .add_div_one .one_title{
    margin-left: 28px;
    padding-top: 20px;
    font-size:16px;
    font-weight:bold;
    color:rgba(254,254,254,1);
  }
  .add_list .add_div_one .one_title i{
    float: right;
    margin-right: 28px;
    font-size: 18px;
    margin-top: 2px;
  }
  .add_list .one_con{
    width: 70%;
    margin: 0px auto;
  }

  .add_list .one_con_img{
    width: 50%;
    float: left;
    margin-top:10px;
  }
  .add_list  .one_con_ss{
    width: 30%;
    margin: 0 auto;
    position: relative;
    top: -65px;
    left: 5%;
    color: white;
  }
  .add_list .one_con_three{
    width: 50%;
    margin:0 auto;
  }
  .add_list .one_con_img p{
    margin-top: 30px;
    font-size:18px;
    font-weight:400;
    text-align: center;
    color:rgba(254,254,254,1);
  }
  .add_list .one_con_three p{
    margin-top:0px;
    font-size:18px;
    font-weight:400;
    text-align: center;
    color:rgba(254,254,254,1);
  }
  .add_list .one_con_three span{
    margin: 0px auto;
    display: block;
    font-size:14px;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
  }
  .add_list .one_con_img div{
    width: 130px;
    height: 130px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 50%;
  }
  .add_list .one_con_three div{
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
  .add_list .one_con .three_img{
    background: url("../../../assets/aImg/import_suss.png") center no-repeat;
  }
  .add_list .one_con .four_img{
    background: url("../../../assets/aImg/import_error.png") center no-repeat;
  }
  .add_list .add_div_two{
    margin: 25px auto;
    padding-bottom: 20px;
  }
  .add_list .add_su_btn{
    width: 280px;
    margin: 0 auto;
  }
  .add_list .add_su_btn button{
    width: 100px;
  }
  .add_list .cont_btn{
    width: 120px;
    margin: 0px auto;
  }
  .add_list .cont_btn button{
    width: 100%;
    font-size:14px;
    margin-bottom: 10px;
    color:rgba(255,255,255,1);
    background:rgba(93,179,247,1);
  }
  .add_list  .wi_btn{
    width: 136px;
    margin: 0px auto;
  }
  .add_list .wi_btn button{
    width: 100%;
    font-size:14px;
    margin-bottom: 10px;
    color:rgba(150,150,150,1);
    background:#fff;
  }

  .add_list .add_error_list{
    width: 80%;
    margin: 0 auto;
    padding: 10px 20px;
    border-top: 2px solid rgba(235,235,235,1);
  }
  .add_list .add_error_list p{
    font-size:16px;
    font-weight:bold;
    color:rgba(134,134,134,1);
    line-height:20px;
    margin-bottom: 10px;
  }
  .add_list .add_error_list div{
    margin-bottom: 25px;
    line-height: 25px;
    font-size:14px;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .add_list .add_error_list div i{
    margin-right: 5px;
  }
  .add_list .add_error_list div span{
    display: inline-block;
    font-size:12px;
    line-height: 25px;
    font-weight:400;
    color:rgba(242,46,46,1);
    margin-left: 12px;
  }
  /***弹窗结束**/
</style>
<style>

  .el-dialog__header {
    background: rgba(73,138,243,1)!important;
  }
  .el-dialog__title{
    color:white;
    font-size: 16px;
  }
  .el-dialog__headerbtn .el-dialog__close{
    color:white;
  }
  .el-dialog__body{
    padding:0!important;
  }
</style>
