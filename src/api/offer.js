import withAxios from "./withAxios";

/**
 *   报价环节
 *   @param httpMethod 请求方法（GET POST PUT PATCH DELETE）
 *   @param urlType URL类型
 *   @param path api路径
 *   @param params 请求参数
 * */



export default {

  /**
   * /api/areaListService 区域列表
   */
  areaListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/areaListService', params, success_callback, fail_callback);
  },

  /**
   *  /api/customerListService 客户资料列表
   */
  customerListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerListService', params, success_callback, fail_callback);
  },

  /**
   *  api/constatsService 常量查询（年份）
   */
  constatsService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/constatsService', params, success_callback, fail_callback);
  },
  /**
   *  api/businessUserListService 业务员查询
   */
  businessUserListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/businessUserListService', params, success_callback, fail_callback);
  },

  /**
   *  api/customerQuotedListService  客户报价列表查询
   */
  customerQuotedListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerQuotedListService', params, success_callback, fail_callback);
  },


  /**
   *  api/customerQuotedCreateService 客户报价添加
   */
  customerQuotedCreateService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerQuotedCreateService', params, success_callback, fail_callback);
  },

  /**
   *  api/customerQuotedDeleteService 客户报价删除
   */
  customerQuotedDeleteService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerQuotedDeleteService', params, success_callback, fail_callback);
  },

  /**
   *  /api/quotedDetailService 客户年度报价查询
   */
  quotedDetailService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/quotedDetailService', params, success_callback, fail_callback);
  },

  /**
   *  /api/quotedReSetService 客户富裕电量默认值获取
   */
  quotedReSetService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/quotedReSetService', params, success_callback, fail_callback);
  },

  /**
   *  /api/quotedEditService 报价修改
   */
  quotedEditService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/quotedEditService', params, success_callback, fail_callback);
  },
  /**
   *  /api/customerQuotedYearListService 客户年度年份列表查询
   */
  customerQuotedYearListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerQuotedYearListService', params, success_callback, fail_callback);
  },


  /**
   *  /api/customerContractQuotedListService 客户合同价格统计-客户合同价格统计查询
   */
  customerContractQuotedListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerContractQuotedListService', params, success_callback, fail_callback);
  },

  /**
   * /api/customerContractQuotedCreateService 客户合同价格统计-客户合同价格统计添加
   */
  customerContractQuotedCreateService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerContractQuotedCreateService', params, success_callback, fail_callback);
  },

  /**
   * /api/thermalPowerPriceCreateService 客户合同价格统计-火电价格创建
   */
  thermalPowerPriceCreateService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/thermalPowerPriceCreateService', params, success_callback, fail_callback);
  },

  /**
   * /api/thermalPowerPriceDetailService 客户合同价格统计-火电价格查询
   */
  thermalPowerPriceDetailService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/thermalPowerPriceDetailService', params, success_callback, fail_callback);
  },

  /**
   *  /api/customerCodeService 客户资料字典
   */
  customerCodeService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerCodeService', params, success_callback, fail_callback);
  },

  /**
   *  /api/customerQuotedExportService 客户报价导出
   */
  customerQuotedExportService(params, success_callback, fail_callback) {
    withAxios.requestExportService('POST', 3,'/api/customerQuotedExportService', params, success_callback, fail_callback);
  },

  /**
   *  /api/customerContractQuotedExportService 客户合同价格统计导出
   */
  customerContractQuotedExportService(params, success_callback, fail_callback) {
    withAxios.requestExportService('POST', 3,'/api/customerContractQuotedExportService', params, success_callback, fail_callback);
  },
}
