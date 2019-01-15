<template>
  <div>
    <div class="marterial">
      <div class="ma_title">
        <div class="ma_title_left" @click="ret_add">
          <i class="el-icon-arrow-left"></i>
          <p>合同详情</p>
        </div>
      </div>

      <div class="ma_content">
        <div class="ma_row">
          <div class="ma_left">
            <div class="ma_left_img">
              <img v-if="this.deta_list.contract.contractStatus == '草稿'" src="../../../assets/aImg/cp_1.png" alt="">
              <img v-if="this.deta_list.contract.contractStatus  == '待审批'" src="../../../assets/aImg/cp_2.png" alt="">
              <img v-if="this.deta_list.contract.contractStatus  == '审批未通过'" src="../../../assets/aImg/cp_3.png" alt="">
              <img v-if="this.deta_list.contract.contractStatus  == '未执行'" src="../../../assets/aImg/cp_4.png" alt="">
              <img v-if="this.deta_list.contract.contractStatus  == '执行中'" src="../../../assets/aImg/cp_5.png" alt="">
              <img v-if="this.deta_list.contract.contractStatus  == '已结束'" src="../../../assets/aImg/cp_6.png" alt="">
            </div>
            <div class="ma_left_con">
              <div class="list_right">
                <div class="right_div">{{this.deta_list.contract.contractName}} <span>{{this.deta_list.contract.contractType}}</span></div>
              </div>
              <div class="con_div">
                <div class="con_row">
                  <p>
                    合同周期 ： {{ get_time_date(this.deta_list.contract.contractStartTime)}} - {{ get_time_date(this.deta_list.contract.contractEndTime)}}</p>
                  <p>创建人：{{this.deta_list.contract.createUserName}}</p>
                </div>
                <div class="con_row">
                  <p>购电方 ： {{this.deta_list.contract.customerName}}</p>
                  <p>创建时间：{{this.deta_list.contract.createTime}} </p>
                </div>
              </div>
            </div>
          </div>
          <div class="ma_right">
            <el-button size="small" v-if="this.deta_list.contract.contractStatus  == '待审批' && show_map(8) == 8"  type="primary" @click="dialogFormVisible = true">审批</el-button>
            <el-button plain v-print="'#printTest'">打印</el-button>
            <el-button plain @click="download_deta">下载</el-button>
            <el-button plain v-if="this.deta_list.contract.contractStatus  == '草稿' ||  this.deta_list.contract.contractStatus  == '审批未通过' || (this.deta_list.contract.contractStatus  != '已结束' && show_map(23) == 23)"  @click="edit_deta" >编辑</el-button>
          </div>
        </div>
        <div class="cont_frame_div">
          <div class="cont_frame">
            <div class="Section0">
              <p class="MsoNormal"
                 style="margin-bottom:10.8500pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;"><b><span
                style="font-family: 仿宋_GB2312; font-size: 16pt;">CH-2018-03</span></b><b><span
                style="font-family: 宋体; font-size: 16pt;"> </span></b></p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:宋体;mso-fareast-font-family:仿宋_GB2312;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:宋体;mso-fareast-font-family:仿宋_GB2312;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:10.8500pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
              <span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:宋体;mso-bidi-font-family:宋体;font-size:22.0000pt;mso-font-kerning:0.0000pt;"><font
                face="小标宋">四川省售电公司与电力用户购售电合同</font></span><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:宋体;mso-bidi-font-family:宋体;font-size:22.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:10.8500pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
              <span
                style="mso-spacerun:'yes';font-family:楷体_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:宋体;font-size:22.0000pt;mso-font-kerning:0.0000pt;"><font
                face="楷体_GB2312">（示范文本）</font></span><span
                style="mso-spacerun:'yes';font-family:楷体_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:宋体;font-size:22.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:72.0000pt;mso-char-indent-count:4.0000;mso-pagination:widow-orphan;line-height:18.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;"><font
                face="黑体">国家能源局四川监管办公室</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-pagination:widow-orphan;text-align:center;line-height:18.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                face="黑体">制定</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:72.0000pt;mso-char-indent-count:4.0000;mso-pagination:widow-orphan;line-height:18.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;"><font
                face="黑体">四川省工商行政管理局</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="margin-top:21.7500pt;margin-bottom:10.8500pt;mso-para-margin-top:1.0000gd;mso-para-margin-bottom:0.5000gd;mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <b><span style="font-family: 方正小标宋简体; font-size: 18pt;">  </span></b></p>
            </div>
            <span style="mso-spacerun:'yes';font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><br clear="all"
                                                                                                               style="page-break-before:always;mso-break-type:section-break"></span>
            <div class="Section1">
              <p class="MsoNormal" align="center"
                 style="text-indent:32.0000pt;mso-char-indent-count:2.0000;word-break:break-all;text-align:center;line-height:31.0000pt;mso-line-height-rule:exactly;">
              <span style="mso-spacerun:'yes';font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><font
                face="黑体">目</font> &nbsp;<font face="黑体">录</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-bidi-font-family:'Times New Roman';font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">说明</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第一章</font> &nbsp;<font face="仿宋_GB2312">定义和解释</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第二章</font> &nbsp;<font face="仿宋_GB2312">双方陈述</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第三章</font> &nbsp;<font face="仿宋_GB2312">双方的权利和义务</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第四章</font> &nbsp;<font face="仿宋_GB2312">交易电量、电价</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第五章</font> &nbsp;<font face="仿宋_GB2312">电能计量</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第六章</font> &nbsp;<font face="仿宋_GB2312">结算和支付</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第七章</font> &nbsp;<font face="仿宋_GB2312">合同变更</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第八章</font> &nbsp;<font face="仿宋_GB2312">合同违约和补偿</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第九章</font> &nbsp;<font face="仿宋_GB2312">合同解除</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第十章</font> &nbsp;<font face="仿宋_GB2312">不可抗力</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第十一章</font> &nbsp;<font face="仿宋_GB2312">争议的解决</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第十二章</font> &nbsp;<font face="仿宋_GB2312">适用法律</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第十三章</font> &nbsp;<font face="仿宋_GB2312">合同生效和期限</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第十四章</font> &nbsp;<font face="仿宋_GB2312">其他</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <b><span style="font-family: 方正仿宋_GBK; font-size: 16pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <b><span style="font-family: 方正仿宋_GBK; font-size: 16pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <b><span style="font-family: 方正仿宋_GBK; font-size: 16pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <b><span style="font-family: 方正仿宋_GBK; font-size: 16pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <b><span style="font-family: 方正仿宋_GBK; font-size: 16pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:MicrosoftYaHei;font-size:22.0000pt;mso-font-kerning:0.0000pt;"><font
                face="小标宋">说</font> &nbsp;<font face="小标宋">明</font></span><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:MicrosoftYaHei;font-size:22.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">一、为规范售电公司与电力用户购售电行为，根据国家有关法律、法规和四川省相关政策规则要求，国家能源局四川监管办公室、四川省工商行政管理局共同制定本合同示范文本，供符合四川省售电侧改革试点准入要求的售电公司与符合四川电力市场准入条件的电力用户之间订立购售电交易合同使用。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">二、合同双方当事人在合同订立、履行中，应当遵循平等、自愿、公平和诚实信用的原则，相互尊重，充分协商，严格履行。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">三、使用本合同示范文本的，不得修改相关内容。参照本合同示范文本订立合同的，不得使用本合同示范文本的名义或者编号。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">使用本合同示范文本又订立补充协议，补充协议与本合同示范文本的内容相抵触的，不得使用本合同示范文本的名义或者编号。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">四、本合同示范文本由通用条款和专用条款组成。通用条款是指不能或者不必协商的条款，专用条款是指当事人在订立合同时应当或者可以协商的选择性、填充性条款。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">选择性条款中在选项前标示有</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">“</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">□</span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">”</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">符号，选择时在该符号内划</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">“</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">√</span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">”</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">表示肯定或者划</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">“</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">×</span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">”</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">表示否定。选择性条款包含单项选择和多项选择。填充性条款中标示有下划线，双方将协商达成的一致意见填入，无意见的划</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">“</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">×</span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">”</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">、或者</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">“</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">－</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">”</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">表示删除该填充性条款。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">五、电力用户不得在合同有效期内同时与两家及以上售电公司签订本合同；电力用户与售电公司签订本合同后，在合同有效期内不得再与发电企业签订购售电合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">六、本合同仅处理与购售电有关的商务问题，所有关于电网、发电厂、电力用户运行的安全和技术问题纳入并网调度协议和市场化零售供用电合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">七、如国家法律、法规发生变化或者政府有关部门、监管机构出台有关规定、规则，合同双方应按照法律、法规、规定和规则予以调整和修改。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
            </div>
            <span
              style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:0.0000pt;"><br
              clear="all" style="page-break-before:always;mso-break-type:section-break"></span>
            <div class="Section2" >
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
              <span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:0.0000pt;"><font
                face="小标宋">四川省售电公司与电力用户购售电合同</font></span><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="right"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:right;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 16pt;"><font
                  face="仿宋_GB2312">合同编号：</font> &nbsp;{{this.deta_list.contract.number}} &nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">甲方（电力用户）：</font> &nbsp;&nbsp;&nbsp;<font
                  face="仿宋_GB2312">{{this.deta_list.contract.customerName}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">住所：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">{{this.deta_list.contract.residence}}</font></span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">法人代表</font>/<font face="仿宋_GB2312">授权代理人： &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.representative}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">税务登记号（统一社会信用代码）：</font> &nbsp;&nbsp;{{this.deta_list.contract.taxNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">开户名称：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">{{this.deta_list.contract.accountName}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">开户银行：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">{{this.deta_list.contract.accountBank}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">账号</font>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.contract.accountNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">联</font> <font face="仿宋_GB2312">系</font> <font face="仿宋_GB2312">人：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                  face="仿宋_GB2312">{{this.deta_list.customer.contact}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">电子邮箱：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.email}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">手</font> &nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">机：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.phone}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">办公电话：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.contactNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">通讯地址：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                  face="仿宋_GB2312">{{this.deta_list.contract.contactAddress}}</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">甲方为一家具有法人资格的企业，在</font> &nbsp;<font
                  face="仿宋_GB2312">{{this.deta_list.customer.city}}</font> &nbsp;<font face="仿宋_GB2312">工商行政管理局登记注册。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;margin-top: 30px">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">乙方（售电公司）：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                  face="仿宋_GB2312">{{this.yi_list.name}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">住所：</font> &nbsp;&nbsp;&nbsp;&nbsp;<font
                  face="仿宋_GB2312">{{this.yi_list.residence}}</font></span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">法人代表</font>/<font face="仿宋_GB2312">授权代理人： &nbsp;&nbsp;&nbsp;&nbsp;{{this.yi_list.representative}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">税务登记号（统一社会信用代码）：</font> {{this.yi_list.taxNumber}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">开户名称：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">{{this.yi_list.accountName}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">开户银行：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">{{this.yi_list.accountBank}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">账号</font>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.yi_list.accountNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">联</font> <font face="仿宋_GB2312">系</font> <font face="仿宋_GB2312">人：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                  face="仿宋_GB2312">{{this.yi_list.contact}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">电子邮箱：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.yi_list.email}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">手</font> &nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">机：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.yi_list.phone}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">办公电话：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.yi_list.contactNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">通讯地址：</font> <font face="仿宋_GB2312">{{this.yi_list.contactAddress}}</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">乙方为一家具有法人资格的售电公司，已取得四川省电力市场交易资格，在</font> <font
                  face="仿宋_GB2312">{{this.yi_list.city}}</font> <font face="仿宋_GB2312">工商行政管理局登记注册。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">鉴于：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">1.<font
                  face="仿宋_GB2312">甲方在 </font><font face="Times New Roman">{{this.deta_list.customer.powerCompany}} </font><font face="仿宋_GB2312">拥有并经营管理一家用电电压等级为 </font><font
                  face="Times New Roman">{{this.deta_list.customer.voltageLevel}} </font><font face="仿宋_GB2312">千伏</font><font
                  face="Times New Roman"></font><font face="仿宋_GB2312">，总用电容量为 &nbsp;&nbsp;</font><font
                  face="Times New Roman">{{this.deta_list.contract.totalUsePowerAmount}}</font><font face="仿宋_GB2312">千瓦（</font><font
                  face="Times New Roman">kW</font><font face="仿宋_GB2312">）或变压器容量为 &nbsp;&nbsp;</font><font
                  face="Times New Roman">{{this.deta_list.contract.transformerCapacity}} </font><font face="仿宋_GB2312">千伏安（</font><font
                  face="Times New Roman">kVA</font><font
                  face="仿宋_GB2312">）的用电企业，符合四川省电力市场准入条件且在四川电力交易中心有限公司（以下简称</font><font
                  face="Times New Roman">“</font><font face="仿宋_GB2312">四川电力交易中心</font><font
                  face="Times New Roman">”</font><font face="仿宋_GB2312">）完成市场主体注册。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">2.<font face="仿宋_GB2312">乙方在四川省拥有合法售电经营资格，符合国家发展改革委、国家能源局《售电公司准入与退出管理办法》准入条件，符合四川省政府主管部门对售电公司准入的相关要求，在四川电力交易中心完成公示、承诺、注册、备案程序，并通过政府相关部门、监管机构评估的售电公司，具备开展电力交易的购售电资格，在四川电力交易中心注册登记的资产总额为 </font><font
                  face="Times New Roman">{{this.yi_list.totalAssets}} </font><font face="仿宋_GB2312">万元，可从事年售电量为 {{this.yi_list.salePowerAmount}} 亿千瓦时。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3</span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;">.</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">甲、乙双方通过四川电力交易中心及电网企业的输配电网络完成购售电交易，双方根据国家有关法律、法规，按照四川省相关政策规则要求，本着平等、自愿、公平和诚信的原则，经协商一致，签订本合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-bidi-font-family:仿宋;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第一章</font> &nbsp;<font face="黑体">定义和解释</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-bidi-font-family:仿宋;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1 <font
                face="仿宋_GB2312">定义</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.1</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">合同电量：指经甲乙双方协商，由本合同约定的双边交易电量</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.2</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">合同成交电量：指</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">通过电力交易机构合规校核、</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">电力调度机构安全校核，用于结算的合同电量</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.3<font
                face="仿宋_GB2312">交割电量：是指电力交易机构依据电力市场交易规则，为本合同出具的结算凭据中的结算电量。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.4 <font
                face="仿宋_GB2312">偏差电量：是指实际交割电量与合同成交电量之差。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.5 <font
                face="仿宋_GB2312">偏差率：偏差率</font><font face="Times New Roman">=</font><font face="仿宋_GB2312">（交割电量</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;">-</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">合同成交电量）</font>/<font face="仿宋_GB2312">合同成交电量</font><font
                face="Times New Roman">×100%</font><font face="仿宋_GB2312">。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.6 <font
                face="仿宋_GB2312">计量点：指在电网企业与甲乙双方签署的《市场化零售供用电合同》中约定的计量交易电量的电能计量装置关口表安装位置。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.7 <font
                face="仿宋_GB2312">偏差考核费用：依据四川电力市场有关交易规则及年度指导意</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">见</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">进行偏差电量考核计算得到的偏差考核金额。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.8 <font
                face="仿宋_GB2312">电网企业：是指拥有输电网、配电网运营权（包括地方电力公司、趸售区域供电公司），承担其供电营业区保底供电服务的企业。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.9 <font
                face="仿宋_GB2312">紧急情况：指电力系统发生事故或发电、输配电、用电设备发生重大事故，电网频率或者电压超规定范围，输变电设备负载超过规定值，主干线路功率超过规定的稳定限额以及其他威胁电网安全运行，有可能破坏电网稳定，导致电网瓦解以至大面积停电等运行情况，并且该情况在结束后得到能源监管机构确认。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.10 <font
                face="仿宋_GB2312">工作日：指除星期六、星期日及法定节假日以外的公历日。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.11 <font
                face="仿宋_GB2312">不可抗力：指不能预见、不能避免并不能克服的客观情况。包括：火山爆发、龙卷风、海啸、暴风雨、泥石流、山体滑坡、水灾、火灾、超设计标准的地震、台风、雷电、雾闪等，以及核辐射、战争、瘟疫、骚乱等。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.2 <font
                face="仿宋_GB2312">解释</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.2.1 <font
                face="仿宋_GB2312">本合同中的标题仅为阅读方便，不应被视为本合同的组成部分，亦不应以任何方式影响对本合同的解释。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.2.2 <font
                face="仿宋_GB2312">本合同附件与正文具有同等的法律效力。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.2.3 <font
                face="仿宋_GB2312">本合同对任何一方的合法承继者或受让人具有约束力，但四川电力市场有关交易规则及年度指导意见另有规定以及当事人另有约定的除外。遇有本款约定的情形时，相关义务人应当依法履行必要的通知义务及完备的法律手续。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.2.4 <font
                face="仿宋_GB2312">除上下文另有要求外，本合同所指的日、月、年均为公历日、月、年。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.2.5 <font
                face="仿宋_GB2312">本合同中的</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;">“</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">包括</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;">”</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">一词指：包括但不限于。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第二章</font> &nbsp;<font face="黑体">双方陈述</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">甲、乙双方任何一方在此向对方陈述如下：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.1 <font
                face="仿宋_GB2312">本方为一家依法设立并合法存续的企业，有权签署并有能力履行本合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.2 <font
                face="仿宋_GB2312">本方签署和履行本合同所需的一切手续（包括办理必要的政府批准、取得营业执照和电力业务许可证等）均已办妥并合法有效。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.3 <font
                face="仿宋_GB2312">在签署本合同时，任何法院、仲裁机构、行政机关或监管机构均未做出任何足以对本方履行本合同产生重大不利影响的判决、裁定、裁决或具体的行政行为。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.4 <font
                face="仿宋_GB2312">本方为签署本合同所需的内部授权程序均已完成，签署本合同的是本方法定代表人或授权代理人，并且本合同生效后即对双方具有法律约束力。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.5 <font
                face="仿宋_GB2312">本方签署的合同内容符合国家有关市场化交易的法律、法规以及政府有关部门、机构出台有关规定、规则等。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.6 <font
                face="仿宋_GB2312">如国家法律、法规发生变化或者政府有关部门、机构出台有关规定、规则，合同双方同意按照法律、法规和规则予以调整和修改。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.7 <font
                face="仿宋_GB2312">本合同签订后，甲方在合同期内不得与除乙方以外的其他售电公司以及发电企业签订购售电合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第三章</font> &nbsp;<font face="黑体">双方权利和义务</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.1 <font
                face="仿宋_GB2312">甲方的权利包括：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.1.1 <font
                face="仿宋_GB2312">与乙方协商制定用电计划和设备检修计划。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.1.2 <font
                face="仿宋_GB2312">获得乙方履行本合同义务相关的信息、资料及查阅电网企业的关口信息数据。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.1.3 <font
                face="仿宋_GB2312">本合同及附件约定的甲方的其他权利。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2 <font
                face="仿宋_GB2312">甲方的义务包括：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.1 <font
                face="仿宋_GB2312">按照国家有关法规、规定和技术规范，运行、维护用电设施，合理控制用电。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.2 <font
                face="仿宋_GB2312">向乙方或四川电力交易中心提供电力交易容量、电量、负荷曲线及其他生产运行信息。根据实际用电需求，准确预测年度用电量以及交易月份用电量。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.3 <font
                face="仿宋_GB2312">发生紧急情况时，按照相关规定执行。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.4 <font
                face="仿宋_GB2312">按时缴纳电力交易电量相关费用，包括：市场交易电费、输配电费、政府性基金及附加、功率因数调整电费等。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;layout-grid-mode:char;word-break:break-all;line-height:31.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.5 <font
                face="仿宋_GB2312">向乙方提供与履行本合同相关的其他信息。如实提供用户用电信息，配合乙方、电网企业及电力交易中心进行电量交易、电费结算、数据统计等工作。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.6 <font
                face="仿宋_GB2312">电力交易电量不得转供或变相转供。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">3.2.7 <font face="仿宋_GB2312">甲方无法履约的，应提前 </font><font
                  face="Times New Roman">{{this.yi_list.column1}} </font><font
                  face="仿宋_GB2312">天书面告知乙方、电网企业、四川电力交易中心以及其他相关方，并承担相应的违约责任，处理好相关事宜。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.8 <font
                face="仿宋_GB2312">本合同及附件约定的甲方其他义务。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.3 <font
                face="仿宋_GB2312">乙方权利包括：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.3.1 <font
                face="仿宋_GB2312">获得甲方履行本合同义务相关的信息、资料、数据。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.3.2 <font
                face="仿宋_GB2312">按约定获取电力交易相关收益。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.3.3 <font
                face="仿宋_GB2312">本合同及附件约定的乙方的其他权利。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4 <font
                face="仿宋_GB2312">乙方的义务包括：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4.1 <font
                face="仿宋_GB2312">按照国家有关法律、规定和技术规范，为甲方提供电力交易服务，参与电力市场交易并按规定结算。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4.2 <font
                face="仿宋_GB2312">发生紧急情况时，按照相关规定执行。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4.3 <font
                face="仿宋_GB2312">向甲方和电网企业提供与履行本合同相关的其他信息。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4.4 <font
                face="仿宋_GB2312">向甲方提供真实准确的有关电力交易的相关信息及资料，不得提供虚假的或误导性的信息。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4.5 <font
                face="仿宋_GB2312">根据国家有关法规支付电力交易相关费用。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4.6</span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">本合同及附件约定的乙方的其他义务。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第四章</font> &nbsp;<font face="黑体">交易电量和电价</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="margin-left:7.0500pt;mso-para-margin-left:0.4400gd;text-indent:21.0000pt;mso-char-indent-count:1.5000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">4.1 <font face="仿宋_GB2312">交易周期：本合同交易周期自 </font><font
                  face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">年 </font><font
                  face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">月 </font><font face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractStartTime) }} </font><font
                  face="仿宋_GB2312">日至 </font><font face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractEndTime) }} </font><font
                  face="仿宋_GB2312">年 </font><font face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">月 </font><font
                  face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">日。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">4.2 <font
                face="仿宋_GB2312">交易电价</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">在交易周期内，甲乙双方对不同交易品种分别约定不同的交易价格，协议电量约定价格见附件</font>1<font face="仿宋_GB2312">。甲方协议电量需求以外的月度增量电量，根据甲乙双方自愿，可约定月度增量电量交易电价，约定价格见附件</font><font
                face="Times New Roman">2</font><font face="仿宋_GB2312">。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">双方另有约定如下：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal div_span" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.contract.powerAmountPricePromise}}&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">。</font></span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">4.3 <font
                face="仿宋_GB2312">交易电量</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">4.3.1 <font
                face="仿宋_GB2312">甲方同意向乙方购买交易周期内的全部用电量，甲乙双方约定的协议电量以附件</font><font face="Times New Roman">3</font><font
                face="仿宋_GB2312">为准。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">4.3.2 <font
                face="仿宋_GB2312">经甲乙双方协商一致，甲乙双方每月可调</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">整</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">年度交易合约电量后续月份分月电量计划，由任意一方在四川电力交易中心组织次月月度交易前</font>3<font face="仿宋_GB2312">个工作日，在交易平台提交电量计划调整申请，并须由双方在平台上进行确认。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;background:rgb(255,255,0);mso-highlight:rgb(255,255,0);"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">4.4 <font
                face="仿宋_GB2312">偏差考核：在结算周期内，对甲方偏差率超过有关交易规则规定的免考核范围的，双方约定按以下方式对偏差考核费用进行分摊：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">。</font></span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第五章</font> &nbsp;<font face="黑体">电能计量</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">5.1 <font
                face="仿宋_GB2312">电力交易涉及的电量计量点在甲乙双方与电网企业签订的《市场化零售供用电合同》中约定。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">5.2 <font
                face="仿宋_GB2312">电力交易涉及的电能计量装置要求、电能计量装置校验要求和计量装置处理办法，按照甲乙双方与电网企业签订的《市场化零售供用电合同》约定执行。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="text-indent: 28pt; line-height: 29pt;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">5.3 <font face="仿宋_GB2312">电力交易结算电量以甲方计量点关口表计量的电量为结算依据，甲方与电网企业约定的抄表例日为每月</font><font
                face="Times New Roman">{{this.deta_list.contract.meterReadingDay}}</font><font face="仿宋_GB2312"> &nbsp;日。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第六章</font> &nbsp;<font face="黑体">结算和支付</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-pagination:widow-orphan;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">6.1</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">购售电合同</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">的</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">结算按照四川相关电力市场交易规则及年度指导意见要求执行。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;mso-pagination:widow-orphan;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">6.2 <font
                face="仿宋_GB2312">甲方按《市场化零售供用电合同》约定向电网企业缴纳用电电费。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">6.3 <font
                face="仿宋_GB2312">乙方电费由电网企业根据四川电力交易中心出具的交易结算依据进行结算和支付。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">6.4 <font
                face="仿宋_GB2312">存在异议的电量和电费不应影响无异议部分的电费结算和支付。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第七章</font> &nbsp;<font face="黑体">合同变更</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">7.1 <font
                face="仿宋_GB2312">本合同的任何修改、补充或变更必须以书面的形式进行，双方法定代表人或授权代理人签字</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">并加盖双方公章或合同专用章</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">后方为有效，</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">但须在双方签字盖章后</font>3<font face="仿宋_GB2312">个工作日内提交四川电力交易中心</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">和能源监管机构</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">备案。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">7.2 <font
                face="仿宋_GB2312">因国家法律、法规发生变化或者政府有关部门、监管机构出台有关规定、规则，导致双方不能正常履行合同约定时，双方应相应变更本合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第八章</font> &nbsp;<font face="黑体">合同违约和补偿</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:30.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">8.1<font
                face="仿宋_GB2312">双方合同一经签订，双方不能以市场电价波动、销户、增容、减容、暂停、改类为由拒绝履行。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">8.2<font
                face="仿宋_GB2312">一方违反本合同约定条款视为违约，另一方有权要求违约方赔偿违约造成的经济损失。双方违约条款约定如下：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <div class="MsoNormal div_span" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp; {{this.deta_list.contract.defaultClausePromise}} &nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></div>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">8.3<font
                face="仿宋_GB2312">违约的处理原则</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">8.3.1</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">违约方应承担支付违约金、继续履行合同和采取补救措施等责任。在支付违约金、继续履约或者采取补救措施后，仍给对方造成其他损失的，应当赔偿损失。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">8.3.2 <font
                face="仿宋_GB2312">在本合同履行期限届满之前，因一方原因导致合同不能继续履行，另一方可在履行期限届满前解除合同并要求其承担相应的违约责任。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">8.3.3<font
                face="仿宋_GB2312">一方违约后，另一方应当采取适当的措施防止损失的扩大。如果该方没有采取适当的措施致使损失扩大的，则其不得就扩大的损失要求违约方承担赔偿责任。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第九章</font> &nbsp;<font face="黑体">合同解除</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">9.1 <font
                face="仿宋_GB2312">如任何一方发生下列事件，则另一方有权在发出解除通知后解除本合同：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">9.1.1 <font
                face="仿宋_GB2312">一方被申请破产、清算或被吊销营业执照；</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">9.1.2 <font
                face="仿宋_GB2312">一方被政府有关部门认定取消市场主体资格；</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">9.1.3 <font
                face="仿宋_GB2312">一方与另一实体联合、合并或将其所有或大部分资产转移给另一实体，而该存续的企业不能合理地承担其在本合同项下的所有义务；</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">9.1.4<font
                face="仿宋_GB2312">一方被行政机关、行政机关授权的单位、司法机关列入不良信用单位或信用等级较低不适于继续交易；</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">9.1.5<font
                face="仿宋_GB2312">因本合同与国家相关条款、法律法规、电力交易规则相冲突的情况，但不致影响本合同继续履行及经过协商补充或变更合同可有效消除冲突的除外。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">9.2 </span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">甲、乙双方均不得擅自解除合同。如果因甲方原因导致合同解除，则甲方应赔偿乙方因此而遭受的损失；如果因乙方原因导致合同解除，则乙方应赔偿甲方因此而遭受的损失。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">9.3</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">&nbsp;<font
                face="仿宋_GB2312">合同解除后应于</font>3<font face="仿宋_GB2312">个工作日内报四川电力交易中心</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">和能源监管机构</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">备案。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第十章</font> &nbsp;<font face="黑体">不可抗力</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">10.1 <font
                face="仿宋_GB2312">若不可抗力的发生完全或部分地妨碍合同任一方履行本合同项下的任何义务，则该方可暂停履行其义务，但前提是：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">10.1.1 </span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">暂停履行的范围和时间不超过消除不可抗力影响的合理需要；</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">10.1.2 </span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">受不可抗力影响的一方应继续履行本合同项下未受不可抗力影响的其他义务，包括所有到期付款的义务；</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">10.1.3 </span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">一旦不可抗力结束，该方应尽快恢复履行本合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">10.2 <font
                face="仿宋_GB2312">若任何一方因不可抗力而不能履行本合同，</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">则该方应尽快书面通知另一方，并在</font>3<font face="仿宋_GB2312">日内以书面方式正式通知另一方。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">该通知书应说明不可抗力的发生日期和预计持续的时间、事件性质、对该方履行本合同的影响及该方为减少不可抗力影响所采取的措施。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">受不可抗力影响的一方应在不可抗力发生之日（如遇通讯中断，则自通讯恢复之日）起</font> &nbsp;{{this.yi_list.column2}} &nbsp;<font
                  face="仿宋_GB2312">日内向对方提供一份由不可抗力发生地公证机构出具的证明文件。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <div class="MsoNormal div_span"
                   style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">10.3 <font face="仿宋_GB2312">受不可抗力影响的一方应采取合理的措施，以减少因不可抗力给合同其他方带来的损失。合同双方应及时协商制定并实施补救计划及合理的替代措施以减少或消除不可抗力的影响。如果受不可抗力影响的一方未能尽其努力采取合理措施减少不可抗力的影响，则该方应承担由此扩大的损失，双方可另行进行约定。若有约定，具体约定为 &nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.contract.forceMajeurePromise}}&nbsp;&nbsp;&nbsp;&nbsp;。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </div>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">10.4 <font
                face="仿宋_GB2312">如果发生不可抗力，双方首先应尽量调整交易和生产计划，尽可能使结算电量接近合同电量。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">10.5 <font
                face="仿宋_GB2312">不可抗力造成的合同解除</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">如果任何不可抗力阻碍一方履行其义务持续超过</font> &nbsp;{{this.yi_list.column3}} &nbsp;&nbsp;<font
                  face="仿宋_GB2312">日，双方应协商决定是否继续履行本合同的条件或解除本合同。如果自不可抗力发生后 </font><font
                  face="Times New Roman">{{this.yi_list.column4}} &nbsp;</font><font face="仿宋_GB2312">日内，双方不能就继续履行合同的条件或解除本合同达成一致意见，任何一方有权书面通知另一方解除本合同，并报能源监管机构和政府相关部门备案。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第十一章</font> &nbsp;<font face="黑体">争议的解决</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">11.1 <font face="仿宋_GB2312">凡因执行本合同所发生的与本合同有关的一切争议，双方应协商解决，也可提请省级政府相关部门、能源监管机构调解。协商或调解不成的，按以下第 &nbsp;</font><font
                  face="Times New Roman">{{this.yi_list.column5}}</font><font face="仿宋_GB2312"> &nbsp;种方式处理：</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">（</font>1<font face="仿宋_GB2312">）双方同意提请</font></span><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">仲裁委员会，请求按照其仲裁规则进行仲裁。仲裁裁决是终局的，对双方均具有法律约束力。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">（</font>2<font face="仿宋_GB2312">）任何一方依法提请</font></span><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">人民法院通过诉讼程序解决。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第十二章</font> &nbsp;<font face="黑体">适用法律</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">12.1 <font
                face="仿宋_GB2312">本合同的订立、效力、解释、履行和争议的解决均适用中华人民共和国法律。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第十三章</font> &nbsp;<font face="黑体">合同生效和期限</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">13.1 <font
                face="仿宋_GB2312">本合同的生效条件是：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">经双方法定代表人或授权代理人签字并加盖公章或合同专用章。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">13.2 <font face="仿宋_GB2312">本合同有效期：自 </font><font
                  face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">年 </font><font
                  face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">月 </font><font face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractStartTime) }} </font><font
                  face="仿宋_GB2312">日至 </font><font face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractEndTime) }} </font><font
                  face="仿宋_GB2312">年 </font><font face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">月 </font><font
                  face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractEndTime) }}  </font><font face="仿宋_GB2312">日。</font></span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第十四章</font> &nbsp;<font face="黑体">其他</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">14.1 <font
                face="仿宋_GB2312">保密</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">甲、乙双方均应保证其从另一方取得的所有无法自公开渠道获得的资料和文件（包括财务、技术等内容）予以保密。未经该资料和文件的原提供方同意，不得向任何第三方透露该资料和文件的全部或任何部分，但按照法律、法规规定可做出披露的情况除外。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">14.2 <font
                face="仿宋_GB2312">合同全部</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">本合同及其附件构成双方就本合同标的达成的全部内容，取代所有双方在此之前就本合同标的所签订的协议和合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">14.3 <font
                face="仿宋_GB2312">通知和送达</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">任何与本合同有关的通知、文件和合规的账单等均须以书面方式进行。通过挂号信、快递或当面送交的，经收件方签字确认即被认为送达；若以传真、电子邮件、</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">QQ<font
                face="仿宋_GB2312">、微信等</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">方式发出并被接收，即视为送达。所有通知、文件和合规的账单等均在送达或接收后方能生效。一切通知、账单、资料或文件等应按照约定的联络信息发给对方，直至一方书面通知另一方变更联络信息为止。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">14.4 <font
                face="仿宋_GB2312">不放弃权利</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">任何一方未通过书面形式声明放弃其在本合同项下的任何权利，则不应被视为其弃权。任何一方未行使其在本合同项下的任何权利，均不应被视为对任何上述权利的放弃或对今后任何上述权利的放弃。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">14.5 <font
                face="仿宋_GB2312">本合同与电网企业与售电公司、电力用户之间签订的《市场化零售供用电合同》互为补充；当《市场化零售供用电合同》约定的内容与本合同不一致时，应按协商一致的原则，经合同签订方协商确定后执行，协商不成的按程序报省级政府相关部门、监管机构协调。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">14.6 <font
                face="仿宋_GB2312">本合同中有关解除、争议解决和保密的条款在本合同解除后仍然有效。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">14.7 <font
                face="仿宋_GB2312">未尽事宜，由双方协商签订补充协议，并报送能源监管机构和四川电力交易中心备案。补充协议与本合同具有同等法律效力。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">14.8 <font face="仿宋_GB2312">本合同正本一式 {{this.yi_list.column6}} 份，甲乙双方各执 {{this.yi_list.column7}} 份，交四川电力交易中心 {{this.yi_list.column8}} 份，交能源监管机构 {{this.yi_list.column9}} 份。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
            </div>
            <span
              style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"><br
              clear="all" style="page-break-before:always;mso-break-type:section-break"></span>
            <div class="Section3">
              <p class="MsoNormal" align="center"
                 style="text-align:center;line-height:35.0000pt;mso-line-height-rule:exactly;"><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"><font
                face="小标宋">签</font> &nbsp;<font face="小标宋">字</font> &nbsp;<font face="小标宋">页</font></span><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" ><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><u style="text-decoration: none;"><span style="font-family: 仿宋_GB2312; font-size: 14pt;line-height: 40pt;"><font face="仿宋_GB2312">甲方：{{this.deta_list.contract.customerName}}</font> </span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">法定代表人</font>(或授权代理人)：</span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">单位签章：</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">签字日期：</font></span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">年</font></span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">月</font></span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">日</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;margin-bottom: 30pt"> <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt; margin-top: 100px" ><u style="text-decoration: none;"><span style="font-family: 仿宋_GB2312; font-size: 14pt;"><font face="仿宋_GB2312">乙方：{{this.yi_list.name}}</font> </span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">法定代表人</font>(或授权代理人)：</span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">单位签章：</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">签字日期：</font></span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">年</font></span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">月</font></span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">日</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:仿宋;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:仿宋;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
            </div>
            <span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><br
              clear="all" style="page-break-before:always;mso-break-type:section-break"></span>
            <div class="Section4" >
              <p class="MsoNormal" style="word-break: break-all; line-height: 28pt;"><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><font
                face="黑体">附件</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">1</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;font-size:24.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;"><b><span
                style="font-family: 方正小标宋简体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;"><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"><font
                face="小标宋">甲乙双方协议电量交易价格表</font></span><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><b><span
                style="font-family: &quot;Times New Roman&quot;; color: rgb(255, 0, 0); font-size: 18pt;">  </span></b>
              </p>
              <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">甲方：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                face="仿宋_GB2312">{{this.deta_list.contract.customerName}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                face="仿宋_GB2312">（电力用户名称）</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.usePowerNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                face="仿宋_GB2312">（用电户号）</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">乙方：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                face="仿宋_GB2312">{{this.yi_list.name}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">（售电公司名称）</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 29pt;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">交易周期：</font> &nbsp;{{ get_time_year(this.deta_list.contract.contractStartTime) }} <font
                face="仿宋_GB2312">年 </font><font face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">月 </font><font
                face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">日至 </font><font
                face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">年 </font><font face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractEndTime) }} </font><font
                face="仿宋_GB2312">月 </font><font face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractEndTime) }}  </font><font
                face="仿宋_GB2312">日。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="right"
                 style="text-align:right;line-height:29.0000pt;mso-line-height-rule:exactly;"><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:11.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="right" style="layout-grid-mode:char;word-break:break-all;text-align:right;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;<font
                face="仿宋_GB2312">单位：元</font>/<font face="仿宋_GB2312">兆瓦时</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <div align="center">
                <table class="MsoNormalTable" border="1" cellspacing="0" style="width: 414.8pt; border: none;">
                  <tbody>
                  <tr style="height:64.7500pt;">
                    <td width="106" valign="center"
                        style="width:63.6000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid windowtext;mso-border-left-alt:0.5000pt solid windowtext;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal" align="right"
                         style="layout-grid-mode:char;word-break:break-all;text-align:right;line-height:13.0000pt;mso-line-height-rule:exactly;">
                      <span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">交易</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                      <p class="MsoNormal" align="center"
                         style="layout-grid-mode:char;word-break:break-all;text-align:center;line-height:13.0000pt;mso-line-height-rule:exactly;">
                      <span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;&nbsp;品种</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                      <p class="MsoNormal"><span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">月份</span><b><span
                        style="font-family: &quot;Times New Roman&quot;; font-size: 12pt;"> </span></b></p>
                    </td>
                    <td width="177" valign="center"
                        style="width:106.2500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal" align="center"
                         style="layout-grid-mode:char;word-break:break-all;text-align:center;"><span
                        style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">常规直接交易（水电电量交易价）</span><span
                        style="font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="197" valign="center"
                        style="width:118.6500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal" align="center"
                         style="layout-grid-mode:char;word-break:break-all;text-align:center;"><span
                        style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">长期战略协议直接交易（水电电量交易价格）</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="105" valign="center"
                        style="width:63.1500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal" align="center"
                         style="layout-grid-mode:char;word-break:break-all;text-align:center;"><span
                        style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">自备替代直接交易</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="105" valign="center"
                        style="width:63.1500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal" align="center"
                         style="layout-grid-mode:char;word-break:break-all;text-align:center;"><span
                        style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">电能替代直接交易</span><span
                        style="font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                  </tr>
                  <tr v-for='(item,index) in this.deta_list.list3'>
                    <td width="106" valign="top"
                        style="width:63.6000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid windowtext;mso-border-left-alt:0.5000pt solid windowtext;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal"><span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.month}}<font
                        face="仿宋_GB2312">月</font></span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="177" valign="top"
                        style="width:106.2500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal"><span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.conventionalPrice}}</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="197" valign="top"
                        style="width:118.6500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal"><span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.longPrice}}</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="105" valign="top"
                        style="width:63.1500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal"><span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.selfPrice}}</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="105" valign="top"
                        style="width:63.1500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal"><span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.electricEnergyPrice}}</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <p class="MsoNormal" style="word-break: break-all;"><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:9.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">备注：本表在年度交易开始前提交四川电力交易中心，价格最多精确到小数点后一位。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:9.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="margin-top: 7.8pt; margin-bottom: 7.8pt; word-break: break-all; line-height: 29pt;"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
            </div>
            <span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><br
              clear="all" style="page-break-before:always;mso-break-type:section-break"></span>
            <p class="MsoNormal"
               style="margin-top: 7.8pt; margin-bottom: 7.8pt; word-break: break-all; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><font
              face="黑体">附件</font></span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">2</span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;font-size:24.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" align="center"
               style="text-align:center;line-height:28.0000pt;mso-line-height-rule:exactly;"><b><span
              style="font-family: 方正小标宋简体; font-size: 18pt;">  </span></b></p>
            <p class="MsoNormal" align="center"
               style="text-align:center;line-height:28.0000pt;mso-line-height-rule:exactly;"><span
              style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"><font
              face="小标宋">甲乙双方月度增量电量交易价格表</font></span><span
              style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:28.0000pt;mso-line-height-rule:exactly;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:18.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">甲方：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">{{this.deta_list.contract.customerName}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">（电力用户名称）</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.usePowerNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">（用电户号）</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">乙方：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">{{this.yi_list.name}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">（售电公司名称）</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="line-height: 29pt;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">交易周期：</font> &nbsp;{{ get_time_year(this.deta_list.contract.contractStartTime) }} <font
              face="仿宋_GB2312">年 </font><font face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">月 </font><font
              face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">日至 </font><font
              face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">年 </font><font
              face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">月 </font><font
              face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractEndTime) }}  </font><font face="仿宋_GB2312">日。</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" align="right" style="layout-grid-mode:char;word-break:break-all;text-align:right;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" align="right" style="layout-grid-mode:char;text-align:right;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"><font
              face="仿宋_GB2312">单位：元</font>/<font face="仿宋_GB2312">兆瓦时</font></span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <div align="center">
              <table class="MsoNormalTable" border="1" cellspacing="0" style="width: 414.8pt; border: none;">
                <tbody>
                <tr>
                  <td width="219" valign="center"
                      style="width:131.7000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid windowtext;mso-border-left-alt:0.5000pt solid windowtext;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="right" style="layout-grid-mode:char;text-align:right;"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">交易品种</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                    <p class="MsoNormal" style="text-indent: 18pt;"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">月份</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="235" valign="center"
                      style="width:141.5500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center" style="layout-grid-mode:char;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">协议外月度电量交易价</span><span
                      style="font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="235" valign="center"
                      style="width:141.5500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center" style="layout-grid-mode:char;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">月度富余电量交易价</span><span
                      style="font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                </tr>
                <tr v-for='(item,index) in this.deta_list.list4'>
                  <td width="219" valign="top"
                      style="width:131.7000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid windowtext;mso-border-left-alt:0.5000pt solid windowtext;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.month}}<font
                      face="仿宋_GB2312">月</font></span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="235" valign="top"
                      style="width:141.5500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.monthPowerPrice}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="235" valign="top"
                      style="width:141.5500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.monthSurplusPowerPrice}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <p class="MsoNormal" style="word-break: break-all;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:9.0000pt;mso-font-kerning:1.0000pt;"><font
              face="仿宋_GB2312">备注：本表在年度交易开始前提交四川电力交易中心，价格最多精确到小数点后一位。</font></span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:9.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal"
               style="margin-top:7.8000pt;margin-bottom:7.8000pt;mso-para-margin-top:0.5000gd;mso-para-margin-bottom:0.5000gd;mso-outline-level:1;line-height:29.0000pt;mso-line-height-rule:exactly;">
            <span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" align="center"
               style="margin-top:7.8000pt;margin-bottom:7.8000pt;mso-para-margin-top:0.5000gd;mso-para-margin-bottom:0.5000gd;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <b><span style="font-family: 方正小标宋简体; font-size: 18pt;">  </span></b></p>
            <p class="MsoNormal" style="margin-top: 7.8pt; margin-bottom: 7.8pt; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="margin-top: 7.8pt; margin-bottom: 7.8pt; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="margin-top: 7.8pt; margin-bottom: 7.8pt; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="margin-top: 7.8pt; margin-bottom: 7.8pt; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:黑体;mso-ascii-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:16.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="margin-top: 7.8pt; margin-bottom: 7.8pt; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="margin-top: 7.8pt; margin-bottom: 7.8pt; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><font
              face="黑体">附件</font></span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">3</span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" align="center"
               style="text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;"><b><span
              style="font-family: 方正小标宋简体; font-size: 18pt;">  </span></b></p>
            <p class="MsoNormal" align="center"
               style="text-align:center;line-height:28.0000pt;mso-line-height-rule:exactly;"><span
              style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"><font
              face="小标宋">甲乙双方协议电量表</font></span><span
              style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" align="center"
               style="text-align:center;line-height:28.0000pt;mso-line-height-rule:exactly;"><b><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 18pt;">  </span></b></p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">甲方：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">{{this.deta_list.contract.customerName}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">（电力用户名称）</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.usePowerNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">（用电户号）</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">乙方：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">{{this.yi_list.name}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">（售电公司名称）</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="line-height: 29pt;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">交易周期：</font> &nbsp;{{ get_time_year(this.deta_list.contract.contractStartTime) }} <font
              face="仿宋_GB2312">年 </font><font face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">月 </font><font
              face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">日至 </font><font
              face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">年 </font><font
              face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">月 </font><font
              face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractEndTime) }}  </font><font face="仿宋_GB2312">日。</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" align="right" style="layout-grid-mode:char;word-break:break-all;text-align:right;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" align="right" style="layout-grid-mode:char;text-align:right;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"><font
              face="仿宋_GB2312">单位：兆瓦时</font></span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <div align="center">
              <table class="MsoNormalTable" border="1" cellspacing="0" style="width: 414.8pt; border: none;">
                <tbody>
                <tr>
                  <td width="131" valign="center"
                      style="width:79.1000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid windowtext;mso-border-left-alt:0.5000pt solid windowtext;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="right"
                       style="layout-grid-mode:char;word-break:break-all;text-align:right;line-height:16.0000pt;mso-line-height-rule:exactly;">
                    <span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;</span><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;</span><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">交易 </span><span
                      style="font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">&nbsp;</span><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">品种</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">月份</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="91" valign="center"
                      style="width:54.8500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center" style="layout-grid-mode:char;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">交易总量</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="center"
                      style="width:70.2500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center" style="layout-grid-mode:char;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">常规直接交易电量</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="center"
                      style="width:70.2000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center"
                       style="layout-grid-mode:char;word-break:break-all;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">长期战略协议直接交易电量</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="center"
                      style="width:70.2000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center"
                       style="layout-grid-mode:char;word-break:break-all;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">自备替代直接交易</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="center"
                      style="width:70.2000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center" style="layout-grid-mode:char;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">电能替代直接交易</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                </tr>
                <tr v-for='(item,index) in this.deta_list.list5'>
                  <td width="131" valign="top"
                      style="width:79.1000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid windowtext;mso-border-left-alt:0.5000pt solid windowtext;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.month}}<font
                      face="仿宋_GB2312">月</font></span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="91" valign="top"
                      style="width:54.8500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.totalAmount}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="top"
                      style="width:70.2500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.conventionalAmount}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="top"
                      style="width:70.2000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.longAmount}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="top"
                      style="width:70.2000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.selfAmount}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="top"
                      style="width:70.2000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.electricEnergyAmount}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <p class="MsoNormal" style="word-break: break-all;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:9.0000pt;mso-font-kerning:1.0000pt;"><font
              face="仿宋_GB2312">备注：本表在年度交易前提交四川电力交易中心，电量最多精确到小数点后三位。</font></span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:9.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal"
               style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;"><b><span
              style="font-family: 宋体; color: rgb(255, 0, 0); font-size: 16pt;">  </span></b></p>
            <p class="MsoNormal"
               style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;"><b><span
              style="font-family: 宋体; font-size: 16pt;">  </span></b></p>
            <p class="MsoNormal"
               style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;"><b><span
              style="font-family: 宋体; font-size: 16pt;">  </span></b></p>

          </div>
        </div>
        <div style="display: none" class="cont_frame_div">
          <div id="printTest" class="cont_frame">
            <div class="Section0">
              <p class="MsoNormal"
                 style="margin-bottom:10.8500pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;"><b><span
                style="font-family: 仿宋_GB2312; font-size: 16pt;">CH-2018-03</span></b><b><span
                style="font-family: 宋体; font-size: 16pt;"> </span></b></p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:宋体;mso-fareast-font-family:仿宋_GB2312;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:宋体;mso-fareast-font-family:仿宋_GB2312;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:10.8500pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
              <span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:宋体;mso-bidi-font-family:宋体;font-size:22.0000pt;mso-font-kerning:0.0000pt;"><font
                face="小标宋">四川省售电公司与电力用户购售电合同</font></span><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:宋体;mso-bidi-font-family:宋体;font-size:22.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:10.8500pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
              <span
                style="mso-spacerun:'yes';font-family:楷体_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:宋体;font-size:22.0000pt;mso-font-kerning:0.0000pt;"><font
                face="楷体_GB2312">（示范文本）</font></span><span
                style="mso-spacerun:'yes';font-family:楷体_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:宋体;font-size:22.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="margin-bottom: 750px"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:72.0000pt;mso-char-indent-count:4.0000;mso-pagination:widow-orphan;line-height:18.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;"><font
                face="黑体">国家能源局四川监管办公室</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-pagination:widow-orphan;text-align:center;line-height:18.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                face="黑体">制定</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:72.0000pt;mso-char-indent-count:4.0000;mso-pagination:widow-orphan;line-height:18.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;"><font
                face="黑体">四川省工商行政管理局</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:18.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="margin-top:21.7500pt;margin-bottom:10.8500pt;mso-para-margin-top:1.0000gd;mso-para-margin-bottom:0.5000gd;mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <b><span style="font-family: 方正小标宋简体; font-size: 18pt;">  </span></b></p>
            </div>
            <span style="mso-spacerun:'yes';font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><br clear="all"
                                                                                                               style="page-break-before:always;mso-break-type:section-break"></span>
            <div class="Section1">
              <p class="MsoNormal" align="center"
                 style="text-indent:32.0000pt;mso-char-indent-count:2.0000;word-break:break-all;text-align:center;line-height:31.0000pt;mso-line-height-rule:exactly;">
              <span style="mso-spacerun:'yes';font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><font
                face="黑体">目</font> &nbsp;<font face="黑体">录</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-bidi-font-family:'Times New Roman';font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">说明</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第一章</font> &nbsp;<font face="仿宋_GB2312">定义和解释</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第二章</font> &nbsp;<font face="仿宋_GB2312">双方陈述</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第三章</font> &nbsp;<font face="仿宋_GB2312">双方的权利和义务</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第四章</font> &nbsp;<font face="仿宋_GB2312">交易电量、电价</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第五章</font> &nbsp;<font face="仿宋_GB2312">电能计量</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第六章</font> &nbsp;<font face="仿宋_GB2312">结算和支付</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第七章</font> &nbsp;<font face="仿宋_GB2312">合同变更</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第八章</font> &nbsp;<font face="仿宋_GB2312">合同违约和补偿</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第九章</font> &nbsp;<font face="仿宋_GB2312">合同解除</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第十章</font> &nbsp;<font face="仿宋_GB2312">不可抗力</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第十一章</font> &nbsp;<font face="仿宋_GB2312">争议的解决</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第十二章</font> &nbsp;<font face="仿宋_GB2312">适用法律</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第十三章</font> &nbsp;<font face="仿宋_GB2312">合同生效和期限</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">第十四章</font> &nbsp;<font face="仿宋_GB2312">其他</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:仿宋;mso-bidi-font-family:黑体;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <b><span style="font-family: 方正仿宋_GBK; font-size: 16pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <b><span style="font-family: 方正仿宋_GBK; font-size: 16pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <b><span style="font-family: 方正仿宋_GBK; font-size: 16pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <b><span style="font-family: 方正仿宋_GBK; font-size: 16pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <b><span style="font-family: 方正仿宋_GBK; font-size: 16pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:MicrosoftYaHei;font-size:22.0000pt;mso-font-kerning:0.0000pt;"><font
                face="小标宋">说</font> &nbsp;<font face="小标宋">明</font></span><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:MicrosoftYaHei;font-size:22.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">一、为规范售电公司与电力用户购售电行为，根据国家有关法律、法规和四川省相关政策规则要求，国家能源局四川监管办公室、四川省工商行政管理局共同制定本合同示范文本，供符合四川省售电侧改革试点准入要求的售电公司与符合四川电力市场准入条件的电力用户之间订立购售电交易合同使用。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">二、合同双方当事人在合同订立、履行中，应当遵循平等、自愿、公平和诚实信用的原则，相互尊重，充分协商，严格履行。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">三、使用本合同示范文本的，不得修改相关内容。参照本合同示范文本订立合同的，不得使用本合同示范文本的名义或者编号。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">使用本合同示范文本又订立补充协议，补充协议与本合同示范文本的内容相抵触的，不得使用本合同示范文本的名义或者编号。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">四、本合同示范文本由通用条款和专用条款组成。通用条款是指不能或者不必协商的条款，专用条款是指当事人在订立合同时应当或者可以协商的选择性、填充性条款。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">选择性条款中在选项前标示有</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">“</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">□</span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">”</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">符号，选择时在该符号内划</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">“</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">√</span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">”</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">表示肯定或者划</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">“</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">×</span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">”</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">表示否定。选择性条款包含单项选择和多项选择。填充性条款中标示有下划线，双方将协商达成的一致意见填入，无意见的划</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">“</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">×</span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">”</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">、或者</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">“</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">－</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">”</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">表示删除该填充性条款。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">五、电力用户不得在合同有效期内同时与两家及以上售电公司签订本合同；电力用户与售电公司签订本合同后，在合同有效期内不得再与发电企业签订购售电合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">六、本合同仅处理与购售电有关的商务问题，所有关于电网、发电厂、电力用户运行的安全和技术问题纳入并网调度协议和市场化零售供用电合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">七、如国家法律、法规发生变化或者政府有关部门、监管机构出台有关规定、规则，合同双方应按照法律、法规、规定和规则予以调整和修改。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
                <b><span style="font-family: 宋体; font-size: 18pt;">  </span></b></p>
            </div>
            <span
              style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:0.0000pt;"><br
              clear="all" style="page-break-before:always;mso-break-type:section-break"></span>
            <div class="Section2" style="margin-top: 500px">
              <p class="MsoNormal" align="center"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:center;">
              <span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:0.0000pt;"><font
                face="小标宋">四川省售电公司与电力用户购售电合同</font></span><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="right"
                 style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;text-align:right;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 16pt;"><font
                  face="仿宋_GB2312">合同编号：</font> &nbsp;{{this.deta_list.contract.number}} &nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">甲方（电力用户）：</font> &nbsp;&nbsp;&nbsp;<font
                  face="仿宋_GB2312">{{this.deta_list.contract.customerName}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">住所：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">{{this.deta_list.contract.residence}}</font></span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">法人代表</font>/<font face="仿宋_GB2312">授权代理人： &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.representative}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">税务登记号（统一社会信用代码）：</font> &nbsp;&nbsp;{{this.deta_list.contract.taxNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">开户名称：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">{{this.deta_list.contract.accountName}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">开户银行：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">{{this.deta_list.contract.accountBank}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">账号</font>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.contract.accountNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">联</font> <font face="仿宋_GB2312">系</font> <font face="仿宋_GB2312">人：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                  face="仿宋_GB2312">{{this.deta_list.customer.contact}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">电子邮箱：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.email}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">手</font> &nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">机：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.phone}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">办公电话：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.contactNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">通讯地址：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                  face="仿宋_GB2312">{{this.deta_list.contract.contactAddress}}</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">甲方为一家具有法人资格的企业，在</font> &nbsp;<font
                  face="仿宋_GB2312">{{this.deta_list.customer.city}}</font> &nbsp;<font face="仿宋_GB2312">工商行政管理局登记注册。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">乙方（售电公司）：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                  face="仿宋_GB2312">{{this.yi_list.name}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">住所：</font> &nbsp;&nbsp;&nbsp;&nbsp;<font
                  face="仿宋_GB2312">{{this.yi_list.residence}}</font></span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">法人代表</font>/<font face="仿宋_GB2312">授权代理人： &nbsp;&nbsp;&nbsp;&nbsp;{{this.yi_list.representative}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">税务登记号（统一社会信用代码）：</font> {{this.yi_list.taxNumber}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">开户名称：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">{{this.yi_list.accountName}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">开户银行：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">{{this.yi_list.accountBank}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">账号</font>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.yi_list.accountNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">联</font> <font face="仿宋_GB2312">系</font> <font face="仿宋_GB2312">人：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                  face="仿宋_GB2312">{{this.yi_list.contact}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">电子邮箱：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.yi_list.email}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">手</font> &nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">机：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.yi_list.phone}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">办公电话：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.yi_list.contactNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font
                  face="仿宋_GB2312">通讯地址：</font> <font face="仿宋_GB2312">{{this.yi_list.contactAddress}}</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">乙方为一家具有法人资格的售电公司，已取得四川省电力市场交易资格，在</font> <font
                  face="仿宋_GB2312">{{this.yi_list.city}}</font> <font face="仿宋_GB2312">工商行政管理局登记注册。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">鉴于：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">1.<font
                  face="仿宋_GB2312">甲方在 </font><font face="Times New Roman">{{this.deta_list.customer.powerCompany}} </font><font face="仿宋_GB2312">拥有并经营管理一家用电电压等级为 </font><font
                  face="Times New Roman">{{this.deta_list.customer.voltageLevel}} </font><font face="仿宋_GB2312">千伏（</font><font
                  face="Times New Roman">kV</font><font face="仿宋_GB2312">），总用电容量为 &nbsp;&nbsp;</font><font
                  face="Times New Roman">{{this.deta_list.contract.totalUsePowerAmount}}</font><font face="仿宋_GB2312">千瓦（</font><font
                  face="Times New Roman">kW</font><font face="仿宋_GB2312">）或变压器容量为 &nbsp;&nbsp;</font><font
                  face="Times New Roman">{{this.deta_list.contract.transformerCapacity}} </font><font face="仿宋_GB2312">千伏安（</font><font
                  face="Times New Roman">kVA</font><font
                  face="仿宋_GB2312">）的用电企业，符合四川省电力市场准入条件且在四川电力交易中心有限公司（以下简称</font><font
                  face="Times New Roman">“</font><font face="仿宋_GB2312">四川电力交易中心</font><font
                  face="Times New Roman">”</font><font face="仿宋_GB2312">）完成市场主体注册。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">2.<font face="仿宋_GB2312">乙方在四川省拥有合法售电经营资格，符合国家发展改革委、国家能源局《售电公司准入与退出管理办法》准入条件，符合四川省政府主管部门对售电公司准入的相关要求，在四川电力交易中心完成公示、承诺、注册、备案程序，并通过政府相关部门、监管机构评估的售电公司，具备开展电力交易的购售电资格，在四川电力交易中心注册登记的资产总额为 </font><font
                  face="Times New Roman">{{this.yi_list.totalAssets}} </font><font face="仿宋_GB2312">万元，可从事年售电量为 {{this.yi_list.salePowerAmount}} 亿千瓦时。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3</span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;">.</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">甲、乙双方通过四川电力交易中心及电网企业的输配电网络完成购售电交易，双方根据国家有关法律、法规，按照四川省相关政策规则要求，本着平等、自愿、公平和诚信的原则，经协商一致，签订本合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-bidi-font-family:仿宋;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第一章</font> &nbsp;<font face="黑体">定义和解释</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-bidi-font-family:仿宋;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1 <font
                face="仿宋_GB2312">定义</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.1</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">合同电量：指经甲乙双方协商，由本合同约定的双边交易电量</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.2</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">合同成交电量：指</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">通过电力交易机构合规校核、</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">电力调度机构安全校核，用于结算的合同电量</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.3<font
                face="仿宋_GB2312">交割电量：是指电力交易机构依据电力市场交易规则，为本合同出具的结算凭据中的结算电量。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.4 <font
                face="仿宋_GB2312">偏差电量：是指实际交割电量与合同成交电量之差。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.5 <font
                face="仿宋_GB2312">偏差率：偏差率</font><font face="Times New Roman">=</font><font face="仿宋_GB2312">（交割电量</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;">-</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">合同成交电量）</font>/<font face="仿宋_GB2312">合同成交电量</font><font
                face="Times New Roman">×100%</font><font face="仿宋_GB2312">。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.6 <font
                face="仿宋_GB2312">计量点：指在电网企业与甲乙双方签署的《市场化零售供用电合同》中约定的计量交易电量的电能计量装置关口表安装位置。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.7 <font
                face="仿宋_GB2312">偏差考核费用：依据四川电力市场有关交易规则及年度指导意</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">见</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">进行偏差电量考核计算得到的偏差考核金额。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.8 <font
                face="仿宋_GB2312">电网企业：是指拥有输电网、配电网运营权（包括地方电力公司、趸售区域供电公司），承担其供电营业区保底供电服务的企业。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.9 <font
                face="仿宋_GB2312">紧急情况：指电力系统发生事故或发电、输配电、用电设备发生重大事故，电网频率或者电压超规定范围，输变电设备负载超过规定值，主干线路功率超过规定的稳定限额以及其他威胁电网安全运行，有可能破坏电网稳定，导致电网瓦解以至大面积停电等运行情况，并且该情况在结束后得到能源监管机构确认。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.10 <font
                face="仿宋_GB2312">工作日：指除星期六、星期日及法定节假日以外的公历日。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.1.11 <font
                face="仿宋_GB2312">不可抗力：指不能预见、不能避免并不能克服的客观情况。包括：火山爆发、龙卷风、海啸、暴风雨、泥石流、山体滑坡、水灾、火灾、超设计标准的地震、台风、雷电、雾闪等，以及核辐射、战争、瘟疫、骚乱等。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.2 <font
                face="仿宋_GB2312">解释</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.2.1 <font
                face="仿宋_GB2312">本合同中的标题仅为阅读方便，不应被视为本合同的组成部分，亦不应以任何方式影响对本合同的解释。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.2.2 <font
                face="仿宋_GB2312">本合同附件与正文具有同等的法律效力。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.2.3 <font
                face="仿宋_GB2312">本合同对任何一方的合法承继者或受让人具有约束力，但四川电力市场有关交易规则及年度指导意见另有规定以及当事人另有约定的除外。遇有本款约定的情形时，相关义务人应当依法履行必要的通知义务及完备的法律手续。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.2.4 <font
                face="仿宋_GB2312">除上下文另有要求外，本合同所指的日、月、年均为公历日、月、年。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">1.2.5 <font
                face="仿宋_GB2312">本合同中的</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;">“</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">包括</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;">”</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">一词指：包括但不限于。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第二章</font> &nbsp;<font face="黑体">双方陈述</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">甲、乙双方任何一方在此向对方陈述如下：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.1 <font
                face="仿宋_GB2312">本方为一家依法设立并合法存续的企业，有权签署并有能力履行本合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.2 <font
                face="仿宋_GB2312">本方签署和履行本合同所需的一切手续（包括办理必要的政府批准、取得营业执照和电力业务许可证等）均已办妥并合法有效。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.3 <font
                face="仿宋_GB2312">在签署本合同时，任何法院、仲裁机构、行政机关或监管机构均未做出任何足以对本方履行本合同产生重大不利影响的判决、裁定、裁决或具体的行政行为。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.4 <font
                face="仿宋_GB2312">本方为签署本合同所需的内部授权程序均已完成，签署本合同的是本方法定代表人或授权代理人，并且本合同生效后即对双方具有法律约束力。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.5 <font
                face="仿宋_GB2312">本方签署的合同内容符合国家有关市场化交易的法律、法规以及政府有关部门、机构出台有关规定、规则等。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.6 <font
                face="仿宋_GB2312">如国家法律、法规发生变化或者政府有关部门、机构出台有关规定、规则，合同双方同意按照法律、法规和规则予以调整和修改。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">2.7 <font
                face="仿宋_GB2312">本合同签订后，甲方在合同期内不得与除乙方以外的其他售电公司以及发电企业签订购售电合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第三章</font> &nbsp;<font face="黑体">双方权利和义务</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.1 <font
                face="仿宋_GB2312">甲方的权利包括：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.1.1 <font
                face="仿宋_GB2312">与乙方协商制定用电计划和设备检修计划。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.1.2 <font
                face="仿宋_GB2312">获得乙方履行本合同义务相关的信息、资料及查阅电网企业的关口信息数据。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.1.3 <font
                face="仿宋_GB2312">本合同及附件约定的甲方的其他权利。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2 <font
                face="仿宋_GB2312">甲方的义务包括：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.1 <font
                face="仿宋_GB2312">按照国家有关法规、规定和技术规范，运行、维护用电设施，合理控制用电。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.2 <font
                face="仿宋_GB2312">向乙方或四川电力交易中心提供电力交易容量、电量、负荷曲线及其他生产运行信息。根据实际用电需求，准确预测年度用电量以及交易月份用电量。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.3 <font
                face="仿宋_GB2312">发生紧急情况时，按照相关规定执行。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.4 <font
                face="仿宋_GB2312">按时缴纳电力交易电量相关费用，包括：市场交易电费、输配电费、政府性基金及附加、功率因数调整电费等。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;layout-grid-mode:char;word-break:break-all;line-height:31.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.5 <font
                face="仿宋_GB2312">向乙方提供与履行本合同相关的其他信息。如实提供用户用电信息，配合乙方、电网企业及电力交易中心进行电量交易、电费结算、数据统计等工作。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.6 <font
                face="仿宋_GB2312">电力交易电量不得转供或变相转供。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">3.2.7 <font face="仿宋_GB2312">甲方无法履约的，应提前 </font><font
                  face="Times New Roman">{{this.yi_list.column1}} </font><font
                  face="仿宋_GB2312">天书面告知乙方、电网企业、四川电力交易中心以及其他相关方，并承担相应的违约责任，处理好相关事宜。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.2.8 <font
                face="仿宋_GB2312">本合同及附件约定的甲方其他义务。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.3 <font
                face="仿宋_GB2312">乙方权利包括：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.3.1 <font
                face="仿宋_GB2312">获得甲方履行本合同义务相关的信息、资料、数据。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.3.2 <font
                face="仿宋_GB2312">按约定获取电力交易相关收益。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.3.3 <font
                face="仿宋_GB2312">本合同及附件约定的乙方的其他权利。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4 <font
                face="仿宋_GB2312">乙方的义务包括：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4.1 <font
                face="仿宋_GB2312">按照国家有关法律、规定和技术规范，为甲方提供电力交易服务，参与电力市场交易并按规定结算。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4.2 <font
                face="仿宋_GB2312">发生紧急情况时，按照相关规定执行。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4.3 <font
                face="仿宋_GB2312">向甲方和电网企业提供与履行本合同相关的其他信息。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4.4 <font
                face="仿宋_GB2312">向甲方提供真实准确的有关电力交易的相关信息及资料，不得提供虚假的或误导性的信息。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4.5 <font
                face="仿宋_GB2312">根据国家有关法规支付电力交易相关费用。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">3.4.6</span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">本合同及附件约定的乙方的其他义务。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第四章</font> &nbsp;<font face="黑体">交易电量和电价</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="margin-left:7.0500pt;mso-para-margin-left:0.4400gd;text-indent:21.0000pt;mso-char-indent-count:1.5000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">4.1 <font face="仿宋_GB2312">交易周期：本合同交易周期自 </font><font
                  face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">年 </font><font
                  face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">月 </font><font face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractStartTime) }} </font><font
                  face="仿宋_GB2312">日至 </font><font face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractEndTime) }} </font><font
                  face="仿宋_GB2312">年 </font><font face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">月 </font><font
                  face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">日。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">4.2 <font
                face="仿宋_GB2312">交易电价</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">在交易周期内，甲乙双方对不同交易品种分别约定不同的交易价格，协议电量约定价格见附件</font>1<font face="仿宋_GB2312">。甲方协议电量需求以外的月度增量电量，根据甲乙双方自愿，可约定月度增量电量交易电价，约定价格见附件</font><font
                face="Times New Roman">2</font><font face="仿宋_GB2312">。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">双方另有约定如下：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal div_span" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.contract.powerAmountPricePromise}}&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">。</font></span></u></p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">4.3 <font
                face="仿宋_GB2312">交易电量</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">4.3.1 <font
                face="仿宋_GB2312">甲方同意向乙方购买交易周期内的全部用电量，甲乙双方约定的协议电量以附件</font><font face="Times New Roman">3</font><font
                face="仿宋_GB2312">为准。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">4.3.2 <font
                face="仿宋_GB2312">经甲乙双方协商一致，甲乙双方每月可调</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">整</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">年度交易合约电量后续月份分月电量计划，由任意一方在四川电力交易中心组织次月月度交易前</font>3<font face="仿宋_GB2312">个工作日，在交易平台提交电量计划调整申请，并须由双方在平台上进行确认。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;background:rgb(255,255,0);mso-highlight:rgb(255,255,0);"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">4.4 <font
                face="仿宋_GB2312">偏差考核：在结算周期内，对甲方偏差率超过有关交易规则规定的免考核范围的，双方约定按以下方式对偏差考核费用进行分摊：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">。</font></span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第五章</font> &nbsp;<font face="黑体">电能计量</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">5.1 <font
                face="仿宋_GB2312">电力交易涉及的电量计量点在甲乙双方与电网企业签订的《市场化零售供用电合同》中约定。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">5.2 <font
                face="仿宋_GB2312">电力交易涉及的电能计量装置要求、电能计量装置校验要求和计量装置处理办法，按照甲乙双方与电网企业签订的《市场化零售供用电合同》约定执行。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="text-indent: 28pt; line-height: 29pt;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">5.3 <font face="仿宋_GB2312">电力交易结算电量以甲方计量点关口表计量的电量为结算依据，甲方与电网企业约定的抄表例日为每月 每月</font><font
                face="Times New Roman">{{this.deta_list.contract.meterReadingDay}}</font><font face="仿宋_GB2312"> &nbsp;日。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第六章</font> &nbsp;<font face="黑体">结算和支付</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-pagination:widow-orphan;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">6.1</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">购售电合同</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">的</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">结算按照四川相关电力市场交易规则及年度指导意见要求执行。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;mso-pagination:widow-orphan;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">6.2 <font
                face="仿宋_GB2312">甲方按《市场化零售供用电合同》约定向电网企业缴纳用电电费。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">6.3 <font
                face="仿宋_GB2312">乙方电费由电网企业根据四川电力交易中心出具的交易结算依据进行结算和支付。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">6.4 <font
                face="仿宋_GB2312">存在异议的电量和电费不应影响无异议部分的电费结算和支付。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第七章</font> &nbsp;<font face="黑体">合同变更</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">7.1 <font
                face="仿宋_GB2312">本合同的任何修改、补充或变更必须以书面的形式进行，双方法定代表人或授权代理人签字</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">并加盖双方公章或合同专用章</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">后方为有效，</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">但须在双方签字盖章后</font>3<font face="仿宋_GB2312">个工作日内提交四川电力交易中心</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">和能源监管机构</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">备案。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">7.2 <font
                face="仿宋_GB2312">因国家法律、法规发生变化或者政府有关部门、监管机构出台有关规定、规则，导致双方不能正常履行合同约定时，双方应相应变更本合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第八章</font> &nbsp;<font face="黑体">合同违约和补偿</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;layout-grid-mode:char;line-height:30.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">8.1<font
                face="仿宋_GB2312">双方合同一经签订，双方不能以市场电价波动、销户、增容、减容、暂停、改类为由拒绝履行。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">8.2<font
                face="仿宋_GB2312">一方违反本合同约定条款视为违约，另一方有权要求违约方赔偿违约造成的经济损失。双方违约条款约定如下：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <div class="MsoNormal div_span" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp; {{this.deta_list.contract.defaultClausePromise}} &nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></div>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">8.3<font
                face="仿宋_GB2312">违约的处理原则</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">8.3.1</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">违约方应承担支付违约金、继续履行合同和采取补救措施等责任。在支付违约金、继续履约或者采取补救措施后，仍给对方造成其他损失的，应当赔偿损失。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">8.3.2 <font
                face="仿宋_GB2312">在本合同履行期限届满之前，因一方原因导致合同不能继续履行，另一方可在履行期限届满前解除合同并要求其承担相应的违约责任。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">8.3.3<font
                face="仿宋_GB2312">一方违约后，另一方应当采取适当的措施防止损失的扩大。如果该方没有采取适当的措施致使损失扩大的，则其不得就扩大的损失要求违约方承担赔偿责任。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第九章</font> &nbsp;<font face="黑体">合同解除</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">9.1 <font
                face="仿宋_GB2312">如任何一方发生下列事件，则另一方有权在发出解除通知后解除本合同：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">9.1.1 <font
                face="仿宋_GB2312">一方被申请破产、清算或被吊销营业执照；</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">9.1.2 <font
                face="仿宋_GB2312">一方被政府有关部门认定取消市场主体资格；</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">9.1.3 <font
                face="仿宋_GB2312">一方与另一实体联合、合并或将其所有或大部分资产转移给另一实体，而该存续的企业不能合理地承担其在本合同项下的所有义务；</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">9.1.4<font
                face="仿宋_GB2312">一方被行政机关、行政机关授权的单位、司法机关列入不良信用单位或信用等级较低不适于继续交易；</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">9.1.5<font
                face="仿宋_GB2312">因本合同与国家相关条款、法律法规、电力交易规则相冲突的情况，但不致影响本合同继续履行及经过协商补充或变更合同可有效消除冲突的除外。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">9.2 </span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">甲、乙双方均不得擅自解除合同。如果因甲方原因导致合同解除，则甲方应赔偿乙方因此而遭受的损失；如果因乙方原因导致合同解除，则乙方应赔偿甲方因此而遭受的损失。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">9.3</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">&nbsp;<font
                face="仿宋_GB2312">合同解除后应于</font>3<font face="仿宋_GB2312">个工作日内报四川电力交易中心</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">和能源监管机构</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">备案。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第十章</font> &nbsp;<font face="黑体">不可抗力</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">10.1 <font
                face="仿宋_GB2312">若不可抗力的发生完全或部分地妨碍合同任一方履行本合同项下的任何义务，则该方可暂停履行其义务，但前提是：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">10.1.1 </span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">暂停履行的范围和时间不超过消除不可抗力影响的合理需要；</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">10.1.2 </span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">受不可抗力影响的一方应继续履行本合同项下未受不可抗力影响的其他义务，包括所有到期付款的义务；</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">10.1.3 </span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">一旦不可抗力结束，该方应尽快恢复履行本合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">10.2 <font
                face="仿宋_GB2312">若任何一方因不可抗力而不能履行本合同，</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">则该方应尽快书面通知另一方，并在</font>3<font face="仿宋_GB2312">日内以书面方式正式通知另一方。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">该通知书应说明不可抗力的发生日期和预计持续的时间、事件性质、对该方履行本合同的影响及该方为减少不可抗力影响所采取的措施。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">受不可抗力影响的一方应在不可抗力发生之日（如遇通讯中断，则自通讯恢复之日）起</font> &nbsp;{{this.yi_list.column2}} &nbsp;<font
                  face="仿宋_GB2312">日内向对方提供一份由不可抗力发生地公证机构出具的证明文件。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <div class="MsoNormal div_span"
                   style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">10.3 <font face="仿宋_GB2312">受不可抗力影响的一方应采取合理的措施，以减少因不可抗力给合同其他方带来的损失。合同双方应及时协商制定并实施补救计划及合理的替代措施以减少或消除不可抗力的影响。如果受不可抗力影响的一方未能尽其努力采取合理措施减少不可抗力的影响，则该方应承担由此扩大的损失，双方可另行进行约定。若有约定，具体约定为 &nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.contract.forceMajeurePromise}}&nbsp;&nbsp;&nbsp;&nbsp;。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </div>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">10.4 <font
                face="仿宋_GB2312">如果发生不可抗力，双方首先应尽量调整交易和生产计划，尽可能使结算电量接近合同电量。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">10.5 <font
                face="仿宋_GB2312">不可抗力造成的合同解除</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">如果任何不可抗力阻碍一方履行其义务持续超过</font> &nbsp;{{this.yi_list.column3}} &nbsp;&nbsp;<font
                  face="仿宋_GB2312">日，双方应协商决定是否继续履行本合同的条件或解除本合同。如果自不可抗力发生后 </font><font
                  face="Times New Roman">{{this.yi_list.column3}} &nbsp;</font><font face="仿宋_GB2312">日内，双方不能就继续履行合同的条件或解除本合同达成一致意见，任何一方有权书面通知另一方解除本合同，并报能源监管机构和政府相关部门备案。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第十一章</font> &nbsp;<font face="黑体">争议的解决</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">11.1 <font face="仿宋_GB2312">凡因执行本合同所发生的与本合同有关的一切争议，双方应协商解决，也可提请省级政府相关部门、能源监管机构调解。协商或调解不成的，按以下第 &nbsp;</font><font
                  face="Times New Roman">{{this.yi_list.column5}}</font><font face="仿宋_GB2312"> &nbsp;种方式处理：</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">（</font>1<font face="仿宋_GB2312">）双方同意提请</font></span><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">仲裁委员会，请求按照其仲裁规则进行仲裁。仲裁裁决是终局的，对双方均具有法律约束力。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">（</font>2<font face="仿宋_GB2312">）任何一方依法提请</font></span><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">人民法院通过诉讼程序解决。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第十二章</font> &nbsp;<font face="黑体">适用法律</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;text-autospace:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">12.1 <font
                face="仿宋_GB2312">本合同的订立、效力、解释、履行和争议的解决均适用中华人民共和国法律。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第十三章</font> &nbsp;<font face="黑体">合同生效和期限</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">13.1 <font
                face="仿宋_GB2312">本合同的生效条件是：</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">经双方法定代表人或授权代理人签字并加盖公章或合同专用章。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">13.2 <font face="仿宋_GB2312">本合同有效期：自 </font><font
                  face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">年 </font><font
                  face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">月 </font><font face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractStartTime) }} </font><font
                  face="仿宋_GB2312">日至 </font><font face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractEndTime) }} </font><font
                  face="仿宋_GB2312">年 </font><font face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">月 </font><font
                  face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractEndTime) }}  </font><font face="仿宋_GB2312">日。</font></span></u><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"> </span></u></p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="mso-layout-grid-align:none;text-autospace:none;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="黑体">第十四章</font> &nbsp;<font face="黑体">其他</font></span><span
                style="mso-spacerun:'yes';font-family:黑体;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">14.1 <font
                face="仿宋_GB2312">保密</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">甲、乙双方均应保证其从另一方取得的所有无法自公开渠道获得的资料和文件（包括财务、技术等内容）予以保密。未经该资料和文件的原提供方同意，不得向任何第三方透露该资料和文件的全部或任何部分，但按照法律、法规规定可做出披露的情况除外。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">14.2 <font
                face="仿宋_GB2312">合同全部</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"><font
                face="仿宋_GB2312">本合同及其附件构成双方就本合同标的达成的全部内容，取代所有双方在此之前就本合同标的所签订的协议和合同。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">14.3 <font
                face="仿宋_GB2312">通知和送达</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">任何与本合同有关的通知、文件和合规的账单等均须以书面方式进行。通过挂号信、快递或当面送交的，经收件方签字确认即被认为送达；若以传真、电子邮件、</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">QQ<font
                face="仿宋_GB2312">、微信等</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">方式发出并被接收，即视为送达。所有通知、文件和合规的账单等均在送达或接收后方能生效。一切通知、账单、资料或文件等应按照约定的联络信息发给对方，直至一方书面通知另一方变更联络信息为止。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">14.4 <font
                face="仿宋_GB2312">不放弃权利</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">任何一方未通过书面形式声明放弃其在本合同项下的任何权利，则不应被视为其弃权。任何一方未行使其在本合同项下的任何权利，均不应被视为对任何上述权利的放弃或对今后任何上述权利的放弃。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">14.5 <font
                face="仿宋_GB2312">本合同与电网企业与售电公司、电力用户之间签订的《市场化零售供用电合同》互为补充；当《市场化零售供用电合同》约定的内容与本合同不一致时，应按协商一致的原则，经合同签订方协商确定后执行，协商不成的按程序报省级政府相关部门、监管机构协调。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">14.6 <font
                face="仿宋_GB2312">本合同中有关解除、争议解决和保密的条款在本合同解除后仍然有效。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;">14.7 <font
                face="仿宋_GB2312">未尽事宜，由双方协商签订补充协议，并报送能源监管机构和四川电力交易中心备案。补充协议与本合同具有同等法律效力。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="text-indent:28.0000pt;mso-char-indent-count:2.0000;mso-layout-grid-align:none;line-height:29.0000pt;mso-line-height-rule:exactly;">
                <u><span style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">14.8 <font face="仿宋_GB2312">本合同正本一式 {{this.yi_list.column6}} 份，甲乙双方各执 {{this.yi_list.column7}} 份，交四川电力交易中心 {{this.yi_list.column8}} 份，交能源监管机构 {{this.yi_list.column9}} 份。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
            </div>
            <span
              style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"><br
              clear="all" style="page-break-before:always;mso-break-type:section-break"></span>
            <div class="Section3" style="margin-top: 500px">
              <p class="MsoNormal" align="center"
                 style="text-align:center;line-height:35.0000pt;mso-line-height-rule:exactly;"><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"><font
                face="小标宋">签</font> &nbsp;<font face="小标宋">字</font> &nbsp;<font face="小标宋">页</font></span><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="margin-top: 100px"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><u style="text-decoration: none;"><span style="font-family: 仿宋_GB2312; font-size: 14pt;line-height: 40pt;"><font face="仿宋_GB2312">甲方：{{this.deta_list.contract.customerName}}</font> </span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">法定代表人</font>(或授权代理人)：</span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">单位签章：</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">签字日期：</font></span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">年</font></span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">月</font></span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">日</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;margin-bottom: 30pt"> <span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt; margin-top: 100px" ><u style="text-decoration: none;"><span style="font-family: 仿宋_GB2312; font-size: 14pt;"><font face="仿宋_GB2312">乙方：{{this.yi_list.name}}</font> </span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">法定代表人</font>(或授权代理人)：</span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">单位签章：</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">签字日期：</font></span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">年</font></span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">月</font></span><u><span style="font-family: 仿宋_GB2312; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">日</font></span><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:仿宋;font-size:14.0000pt;mso-font-kerning:0.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height: 40pt;"><span
                style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:仿宋;font-size:14.0000pt;mso-font-kerning:0.0000pt;">  </span>
              </p>
            </div>
            <span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><br
              clear="all" style="page-break-before:always;mso-break-type:section-break"></span>
            <div class="Section4" style="margin-top: 400px">
              <p class="MsoNormal" style="word-break: break-all; line-height: 28pt;"><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><font
                face="黑体">附件</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">1</span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;font-size:24.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="center"
                 style="text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;"><b><span
                style="font-family: 方正小标宋简体; font-size: 18pt;">  </span></b></p>
              <p class="MsoNormal" align="center"
                 style="text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;"><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"><font
                face="小标宋">甲乙双方协议电量交易价格表</font></span><span
                style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><b><span
                style="font-family: &quot;Times New Roman&quot;; color: rgb(255, 0, 0); font-size: 18pt;">  </span></b>
              </p>
              <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">甲方：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                face="仿宋_GB2312">{{this.deta_list.contract.customerName}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                face="仿宋_GB2312">（电力用户名称）</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.usePowerNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                face="仿宋_GB2312">（用电户号）</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">乙方：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                face="仿宋_GB2312">{{this.yi_list.name}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="仿宋_GB2312">（售电公司名称）</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" style="line-height: 29pt;"><u><span
                style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">交易周期：</font> &nbsp;{{ get_time_year(this.deta_list.contract.contractStartTime) }} <font
                face="仿宋_GB2312">年 </font><font face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">月 </font><font
                face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">日至 </font><font
                face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">年 </font><font face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractEndTime) }} </font><font
                face="仿宋_GB2312">月 </font><font face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractEndTime) }}  </font><font
                face="仿宋_GB2312">日。</font></span></u><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal" align="right"
                 style="text-align:right;line-height:29.0000pt;mso-line-height-rule:exactly;"><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:11.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
              <p class="MsoNormal" align="right" style="layout-grid-mode:char;word-break:break-all;text-align:right;">
              <span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;<font
                face="仿宋_GB2312">单位：元</font>/<font face="仿宋_GB2312">兆瓦时</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <div align="center">
                <table class="MsoNormalTable" border="1" cellspacing="0" style="width: 414.8pt; border: none;">
                  <tbody>
                  <tr style="height:64.7500pt;">
                    <td width="106" valign="center"
                        style="width:63.6000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid windowtext;mso-border-left-alt:0.5000pt solid windowtext;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal" align="right"
                         style="layout-grid-mode:char;word-break:break-all;text-align:right;line-height:13.0000pt;mso-line-height-rule:exactly;">
                      <span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">交易</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                      <p class="MsoNormal" align="center"
                         style="layout-grid-mode:char;word-break:break-all;text-align:center;line-height:13.0000pt;mso-line-height-rule:exactly;">
                      <span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;&nbsp;品种</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                      <p class="MsoNormal"><span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">月份</span><b><span
                        style="font-family: &quot;Times New Roman&quot;; font-size: 12pt;"> </span></b></p>
                    </td>
                    <td width="177" valign="center"
                        style="width:106.2500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal" align="center"
                         style="layout-grid-mode:char;word-break:break-all;text-align:center;"><span
                        style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">常规直接交易（水电电量交易价）</span><span
                        style="font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="197" valign="center"
                        style="width:118.6500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal" align="center"
                         style="layout-grid-mode:char;word-break:break-all;text-align:center;"><span
                        style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">长期战略协议直接交易（水电电量交易价格）</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="105" valign="center"
                        style="width:63.1500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal" align="center"
                         style="layout-grid-mode:char;word-break:break-all;text-align:center;"><span
                        style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">自备替代直接交易</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="105" valign="center"
                        style="width:63.1500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal" align="center"
                         style="layout-grid-mode:char;word-break:break-all;text-align:center;"><span
                        style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">电能替代直接交易</span><span
                        style="font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                  </tr>
                  <tr v-for='(item,index) in this.deta_list.list3'>
                    <td width="106" valign="top"
                        style="width:63.6000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid windowtext;mso-border-left-alt:0.5000pt solid windowtext;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal"><span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.month}}<font
                        face="仿宋_GB2312">月</font></span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="177" valign="top"
                        style="width:106.2500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal"><span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.conventionalPrice}}</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="197" valign="top"
                        style="width:118.6500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal"><span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.longPrice}}</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="105" valign="top"
                        style="width:63.1500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal"><span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.selfPrice}}</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                    <td width="105" valign="top"
                        style="width:63.1500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                      <p class="MsoNormal"><span
                        style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.electricEnergyPrice}}</span><span
                        style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                      </p>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <p class="MsoNormal" style="word-break: break-all;"><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:9.0000pt;mso-font-kerning:1.0000pt;"><font
                face="仿宋_GB2312">备注：本表在年度交易开始前提交四川电力交易中心，价格最多精确到小数点后一位。</font></span><span
                style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:9.0000pt;mso-font-kerning:1.0000pt;"> </span>
              </p>
              <p class="MsoNormal"
                 style="margin-top: 7.8pt; margin-bottom: 7.8pt; word-break: break-all; line-height: 29pt;"><span
                style="mso-spacerun:'yes';font-family:方正仿宋_GBK;mso-hansi-font-family:宋体;mso-bidi-font-family:'Times New Roman';font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
              </p>
            </div>
            <span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><br
              clear="all" style="page-break-before:always;mso-break-type:section-break"></span>
            <p class="MsoNormal"
               style="margin-top: 600px; margin-bottom: 7.8pt; word-break: break-all; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><font
              face="黑体">附件</font></span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">2</span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;font-size:24.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" align="center"
               style="text-align:center;line-height:28.0000pt;mso-line-height-rule:exactly;"><b><span
              style="font-family: 方正小标宋简体; font-size: 18pt;">  </span></b></p>
            <p class="MsoNormal" align="center"
               style="text-align:center;line-height:28.0000pt;mso-line-height-rule:exactly;"><span
              style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"><font
              face="小标宋">甲乙双方月度增量电量交易价格表</font></span><span
              style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:28.0000pt;mso-line-height-rule:exactly;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:18.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">甲方：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">{{this.deta_list.contract.customerName}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">（电力用户名称）</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.usePowerNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">（用电户号）</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">乙方：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">{{this.yi_list.name}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">（售电公司名称）</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="line-height: 29pt;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">交易周期：</font> &nbsp;{{ get_time_year(this.deta_list.contract.contractStartTime) }} <font
              face="仿宋_GB2312">年 </font><font face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">月 </font><font
              face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">日至 </font><font
              face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">年 </font><font
              face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">月 </font><font
              face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractEndTime) }}  </font><font face="仿宋_GB2312">日。</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" align="right" style="layout-grid-mode:char;word-break:break-all;text-align:right;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" align="right" style="layout-grid-mode:char;text-align:right;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"><font
              face="仿宋_GB2312">单位：元</font>/<font face="仿宋_GB2312">兆瓦时</font></span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <div align="center">
              <table class="MsoNormalTable" border="1" cellspacing="0" style="width: 414.8pt; border: none;">
                <tbody>
                <tr>
                  <td width="219" valign="center"
                      style="width:131.7000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid windowtext;mso-border-left-alt:0.5000pt solid windowtext;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="right" style="layout-grid-mode:char;text-align:right;"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">交易品种</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                    <p class="MsoNormal" style="text-indent: 18pt;"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">月份</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="235" valign="center"
                      style="width:141.5500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center" style="layout-grid-mode:char;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">协议外月度电量交易价</span><span
                      style="font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="235" valign="center"
                      style="width:141.5500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center" style="layout-grid-mode:char;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">月度富余电量交易价</span><span
                      style="font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                </tr>
                <tr v-for='(item,index) in this.deta_list.list4'>
                  <td width="219" valign="top"
                      style="width:131.7000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid windowtext;mso-border-left-alt:0.5000pt solid windowtext;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.month}}<font
                      face="仿宋_GB2312">月</font></span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="235" valign="top"
                      style="width:141.5500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.monthPowerPrice}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="235" valign="top"
                      style="width:141.5500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.monthSurplusPowerPrice}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <p class="MsoNormal" style="word-break: break-all;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:9.0000pt;mso-font-kerning:1.0000pt;"><font
              face="仿宋_GB2312">备注：本表在年度交易开始前提交四川电力交易中心，价格最多精确到小数点后一位。</font></span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:9.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal"
               style="margin-top:7.8000pt;margin-bottom:7.8000pt;mso-para-margin-top:0.5000gd;mso-para-margin-bottom:0.5000gd;mso-outline-level:1;line-height:29.0000pt;mso-line-height-rule:exactly;">
            <span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" align="center"
               style="margin-top:7.8000pt;margin-bottom:7.8000pt;mso-para-margin-top:0.5000gd;mso-para-margin-bottom:0.5000gd;text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;">
              <b><span style="font-family: 方正小标宋简体; font-size: 18pt;">  </span></b></p>
            <p class="MsoNormal" style="margin-top: 7.8pt; margin-bottom: 7.8pt; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="margin-top: 7.8pt; margin-bottom: 7.8pt; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="margin-top: 7.8pt; margin-bottom: 7.8pt; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="margin-top: 7.8pt; margin-bottom: 7.8pt; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:黑体;mso-ascii-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:16.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="margin-top: 7.8pt; margin-bottom: 7.8pt; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="margin-top: 600px; margin-bottom: 7.8pt; line-height: 29pt;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;mso-hansi-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"><font
              face="黑体">附件</font></span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;">3</span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:黑体;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" align="center"
               style="text-align:center;line-height:29.0000pt;mso-line-height-rule:exactly;"><b><span
              style="font-family: 方正小标宋简体; font-size: 18pt;">  </span></b></p>
            <p class="MsoNormal" align="center"
               style="text-align:center;line-height:28.0000pt;mso-line-height-rule:exactly;"><span
              style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"><font
              face="小标宋">甲乙双方协议电量表</font></span><span
              style="mso-spacerun:'yes';font-family:小标宋;mso-hansi-font-family:仿宋;mso-bidi-font-family:'Times New Roman';font-size:22.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" align="center"
               style="text-align:center;line-height:28.0000pt;mso-line-height-rule:exactly;"><b><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 18pt;">  </span></b></p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">甲方：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">{{this.deta_list.contract.customerName}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">（电力用户名称）</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.deta_list.customer.usePowerNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">（用电户号）</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">乙方：</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">{{this.yi_list.name}}</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
              face="仿宋_GB2312">（售电公司名称）</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" style="line-height:29.0000pt;mso-line-height-rule:exactly;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" style="line-height: 29pt;"><u><span
              style="font-family: &quot;Times New Roman&quot;; font-size: 14pt;"><font face="仿宋_GB2312">交易周期：</font> &nbsp;{{ get_time_year(this.deta_list.contract.contractStartTime) }} <font
              face="仿宋_GB2312">年 </font><font face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">月 </font><font
              face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractStartTime) }} </font><font face="仿宋_GB2312">日至 </font><font
              face="Times New Roman">{{ get_time_year(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">年 </font><font
              face="Times New Roman">{{ get_time_Month(this.deta_list.contract.contractEndTime) }} </font><font face="仿宋_GB2312">月 </font><font
              face="Times New Roman">{{ get_time_r(this.deta_list.contract.contractEndTime) }}  </font><font face="仿宋_GB2312">日。</font></span></u><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:14.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal" align="right" style="layout-grid-mode:char;word-break:break-all;text-align:right;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">  </span>
            </p>
            <p class="MsoNormal" align="right" style="layout-grid-mode:char;text-align:right;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"><font
              face="仿宋_GB2312">单位：兆瓦时</font></span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <div align="center">
              <table class="MsoNormalTable" border="1" cellspacing="0" style="width: 414.8pt; border: none;">
                <tbody>
                <tr>
                  <td width="131" valign="center"
                      style="width:79.1000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid windowtext;mso-border-left-alt:0.5000pt solid windowtext;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="right"
                       style="layout-grid-mode:char;word-break:break-all;text-align:right;line-height:16.0000pt;mso-line-height-rule:exactly;">
                    <span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;</span><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">&nbsp;&nbsp;&nbsp;</span><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">交易 </span><span
                      style="font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">&nbsp;</span><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">品种</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">月份</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="91" valign="center"
                      style="width:54.8500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center" style="layout-grid-mode:char;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;">交易总量</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="center"
                      style="width:70.2500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center" style="layout-grid-mode:char;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">常规直接交易电量</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="center"
                      style="width:70.2000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center"
                       style="layout-grid-mode:char;word-break:break-all;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">长期战略协议直接交易电量</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="center"
                      style="width:70.2000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center"
                       style="layout-grid-mode:char;word-break:break-all;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">自备替代直接交易</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="center"
                      style="width:70.2000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:1.0000pt solid windowtext;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal" align="center" style="layout-grid-mode:char;text-align:center;"><span
                      style="mso-spacerun:'yes';font-family:仿宋_GB2312;mso-ascii-font-family:'Times New Roman';mso-hansi-font-family:'Times New Roman';mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:1.0000pt;">电能替代直接交易</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:12.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                </tr>
                <tr v-for='(item,index) in this.deta_list.list5'>
                  <td width="131" valign="top"
                      style="width:79.1000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid windowtext;mso-border-left-alt:0.5000pt solid windowtext;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.month}}<font
                      face="仿宋_GB2312">月</font></span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="91" valign="top"
                      style="width:54.8500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.totalAmount}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="top"
                      style="width:70.2500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.conventionalAmount}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="top"
                      style="width:70.2000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.longAmount}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="top"
                      style="width:70.2000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.selfAmount}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                  <td width="117" valign="top"
                      style="width:70.2000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none;mso-border-left-alt:none;border-right:1.0000pt solid windowtext;mso-border-right-alt:0.5000pt solid windowtext;border-top:none;mso-border-top-alt:0.5000pt solid windowtext;border-bottom:1.0000pt solid windowtext;mso-border-bottom-alt:0.5000pt solid windowtext;">
                    <p class="MsoNormal"><span
                      style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;">{{item.electricEnergyAmount}}</span><span
                      style="font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:16.0000pt;mso-font-kerning:1.0000pt;"> </span>
                    </p>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <p class="MsoNormal" style="word-break: break-all;"><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:9.0000pt;mso-font-kerning:1.0000pt;"><font
              face="仿宋_GB2312">备注：本表在年度交易前提交四川电力交易中心，电量最多精确到小数点后三位。</font></span><span
              style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:仿宋_GB2312;font-size:9.0000pt;mso-font-kerning:1.0000pt;"> </span>
            </p>
            <p class="MsoNormal"
               style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;"><b><span
              style="font-family: 宋体; color: rgb(255, 0, 0); font-size: 16pt;">  </span></b></p>
            <p class="MsoNormal"
               style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;"><b><span
              style="font-family: 宋体; font-size: 16pt;">  </span></b></p>
            <p class="MsoNormal"
               style="margin-bottom:7.8000pt;mso-para-margin-bottom:0.5000gd;mso-pagination:widow-orphan;"><b><span
              style="font-family: 宋体; font-size: 16pt;">  </span></b></p>


          </div>
        </div>
      </div>
    </div>

<div class="sp_dialog">
  <el-dialog title="审批" :visible.sync="dialogFormVisible">
    <el-form :model="sf_form" :rules="rules" ref="sf_form">
      <el-form-item label-width="100px"  label="合同价格" >
        <p class="bule">{{this.deta_list.contract.contractPrice}}元/兆瓦时</p>
      </el-form-item>
      <el-form-item label="请输入报价" label-width="100px" prop="vue1">
        <el-input type="number" size="medium" placeholder="" v-model.number="sf_form.vue1">
          <template slot="append">元/兆瓦时</template>
        </el-input>
        <!--<el-input size="medium"  type="number" v-model ="sf_form.vue1" placeholder=""></el-input>-->
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="submitForm(0)">不通过</el-button>
      <el-button type="primary" @click="submitForm(1)">通 过</el-button>
    </div>
  </el-dialog>
</div>

    <!--<router-view></router-view>-->
  </div>

</template>

<script>
  // 引入axios
  import add_ajax from '../../../api/contract'
  export default {
    data() {
      return {
        menuList:[],
        one: {
          id: 1,
        },
        sf_form:{
            vue1:0,
        },
        rules:{
          vue1:[
            { required: true, message: '请输入报价', trigger: 'blur' },
          ],
        },
        dialogFormVisible:false,
        fromdata: "",  //列表参数
        yidata: "",  //列表参数
        deta_list:{
          contract:{},
          customer:{},
          list3:{},
          list4:{},
          list5:{},
        },
        yi_list: {},

      }
    },
// 映射store数据
    computed: {},
    methods: {
      ret_add(){
        this.$router.go(-1);
      },
      download_deta(){
        window.open(this.HOST + "api/contractDownload?version=1.0&data=%7B%27id%27:"+ this.one.id +"%7D")

//        this.fromdata = "{'id':" + this.one.id + "}"
//        add_ajax.contractDownload(this.fromdata, res => {  //
//          this.$emit('login-success', res);
//        }, (res) => {
//
//        });

      },
      edit_deta(){  //编辑
        this.$router.push({name:'oneDeit',params:{one:this.one.id}});
      },
      get_times(str){ //转换时间戳
       // console.log(str)
        var temp = (new Date(str)).getTime()
        return temp;
      },
      get_time_date(arr){ //时间戳转换为标准时间
        var now = new Date(arr * 1000),
          y = now.getFullYear(),
          m = now.getMonth() + 1,
          d = now.getDate();
        return y + "." + (m < 10 ? "0" + m : m) + "." + (d < 10 ? "0" + d : d);
      },
      get_time_year(arr){ //时间戳转换获取年
        var now = new Date(arr * 1000),
          y = now.getFullYear();
        return y;
      },
      get_time_Month(arr){ //时间戳转换为月
        var now = new Date(arr * 1000),
          m = now.getMonth() + 1
        return m;
      },
      get_time_r(arr){ //时间戳转换为日
        var now = new Date(arr * 1000),
          d = now.getDate();
        return d;
      },
      get_utc(arr){ //时间戳（秒）转换UTC时间格式
        return new Date(((arr * 1000) + 8 * 3600 * 1000)).toISOString();
      },
      find_date(){
        this.fromdata = "{'id':" + this.one.id + "}"
        add_ajax.contractDetailService(this.fromdata, res => {  //
          this.$emit('login-success', res);
        }, (res) => {
          if(res.status == 200){
            this.deta_list = res.body
            this.sf_form.vue1 = this.deta_list.contract.quotedPrice
          }
        });
        this.yidata = "{}"
        add_ajax.saleDetailService(this.yidata, res => {  //
          this.$emit('login-success', res);
        }, (res) => {
          this.yi_list = res.body.sale
        });
      },
      submitForm(type) {
        this.$refs["sf_form"].validate((valid) => {
          if (valid) {
            if( this.deta_list.contract.contractPrice >= this.sf_form.vue1){
                //正常合同
              this.fromdata = "{'id':"+ this.one.id +",'action':"+ type +",'quotedPrice':"+ this.sf_form.vue1 +"}"
              add_ajax.contractReviewService(this.fromdata, res => {  //
                this.$emit('login-success', res);
              }, (res) => {
                this.dialogFormVisible = false
                if(res.status == 200){
                  this.$message({
                    type: 'success',
                    message: '审批成功!'
                  });
                  this.find_date()
                }else{
                  this.$message({
                    type: 'message',
                    message: res.message
                  });
                }
              });
            }else{
              this.$confirm('合同价格小于报价，是否继续？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
               // console.log('确认');
                this.fromdata = "{'id':"+ this.one.id +",'action':"+ type +",'quotedPrice':"+ this.sf_form.vue1 +"}"
                add_ajax.contractReviewService(this.fromdata, res => {  //
                  this.$emit('login-success', res);
                }, (res) => {
                  this.dialogFormVisible = false
                  if(res.status == 200){

                    this.$message({
                      type: 'success',
                      message: '审批成功!'
                    });
                    this.find_date()
                  }else{
                    this.$message({
                      type: 'message',
                      message: res.message
                    });
                  }
                });
              }).catch(() => {


              });
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      show_map(id){
        let obj = {};
        if( this.menuList != ""){
          obj =  this.menuList.find((item)=>{
            return item.id === id;
          });
          if(obj != undefined){
            return obj.id
          }else{
            return ""
          }
        }else {
          return ""
        }


      },
    },
//生命周期钩子函数，进入页面显示之前获取数据到store
    created() {
        console.log(this.$route.params.one)
      this.one.id = this.$route.params.one
//      this.one.type = this.$route.params.two
      this.find_date()
      this.menuList = JSON.parse(localStorage.getItem('menuList'));


    }
  }

</script>

<style scoped>
  .input_div .el-input__icon {
    line-height: 30px !important;
  }

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

  .ma_content {
    width: 100%;
    /*min-height: calc(100vh - 61px - 51px - 16px);*/
    min-height: calc(100vh - 61px - 101px - 30px);

  }

  .ma_row {
    width: 85%;
    height: 70px;
    margin: 30px auto;
  }

  .ma_left {
    width: calc(100% - 320px);
    float: left;
  }

  .ma_left_img {
    width: 44px;
    height: 80px;
    margin-right: 27px;
    float: left;
  }

  .ma_left_img img {
    width: 44px;
    height: 44px
  }

  .ma_left_con {
    width: calc(100% - 44px - 27px);
    float: right;
  }

  .ma_left_con p {
    font-size: 16px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 45px;
  }

  .list_right {
    vertical-align: middle;
    float: left;
    width: calc(100%);
    height: 30px;
  }

  .right_div {
    float: left;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    color: rgba(51, 51, 51, 1);
    vertical-align: middle;;
  }

  .right_div span {
    width: 18px;
    height: 18px;
    font-size: 12px;
    color: rgba(50, 156, 248, 1);
    font-weight: 400;
    line-height: 30px;
    border: 1px solid rgba(50, 156, 248, 1);
    border-radius: 2px;
    vertical-align: middle;
    margin-right: 7px;
  }

  .con_div {
    width: 100%;
    height: 80px;
  }

  .con_row {
    width: 50%;
    float: left;
    height: 20px;
  }

  .con_div a {
    font-size: 14px;
    font-weight: 400;
    text-decoration: underline;
    color: rgba(136, 136, 136, 1);
  }

  .con_div p {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 5px;
    color: rgba(136, 136, 136, 1);
  }

  .ma_right {
    width: calc(80px * 4);
    float: right;
  }

  .cont_frame_div{
    width: 85%;
    min-height: 300px;
    padding:30px 0px;
    margin: 0 auto;
  }
  .cont_frame {
    width: 80%;
    min-height: 300px;
    margin: 0 auto;
  }


  /*** 弹窗 ***/

  .add_div {
    background-color: white;
  }

  .add_div_one {
    width: 100%;
    height: 320px;
    /*background:rgba(73,138,243,1);*/
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
    margin: 30px auto;
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
    width: 250px;
    margin: 30px auto;
    overflow: auto;
  }

  .cont_btn {
    width: 100px;
    float: left;
    margin-right: 30px;
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
    float: left;
  }

  .wi_btn button {
    width: 100%;
    font-size: 14px;
    margin-bottom: 10px;
    color: rgba(150, 150, 150, 1);
    background: #fff;
  }

  /*** 弹窗结束 **/

  .div_span span{
    display: block;
    width: 100%;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }

</style>
<style>


.sp_dialog .bule{
  font-size:16px;
  font-weight:400;
  color:rgba(0,119,221,1);
}

.sp_dialog .el-dialog__footer{
  text-align: center;
  padding-top: 20px;
}
  .sp_dialog .el-dialog__body {
    padding: 0;
  }
  .sp_dialog .el-dialog{
    width: 30%;
  }
  .sp_dialog .el-form{
    width: 300px;
    margin: 0 auto;
  }
  .sp_dialog .el-form-item{
    margin-top: 10px;
    margin-bottom: 10px;
}
  .el-button {
    padding: 9px 20px;
    font-size: 12px;
    margin-left: 10px;
  }

  .el-message-box__status.el-icon-warning {
    color: #ff253a;
    margin-left: -25px;
  }

  .el-message-box__btns {
    padding: 5px 15px 0;
    text-align: center;
  }

  .el-message-box__status {
    position: absolute;
    top: 50%;
    left: 110px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 24px !important;
  }

  .el-message-box__status + .el-message-box__message {
    padding-left: 36px;
    padding-right: 12px;
    text-align: center;
  }

  .ma_left_con .el-icon-arrow-right {
    margin: 0 10px;
    margin-top: 7px;
  }
</style>
