import withAxios from "./withAxios";

/**
 *   电量申报
 *   @param httpMethod 请求方法（GET POST PUT PATCH DELETE）
 *   @param urlType URL类型
 *   @param path api路径
 *   @param params 请求参数
 * */



export default {

  /**
   *  api/constatsService 常量查询（年份）
   */
  constatsService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/constatsService', params, success_callback, fail_callback);
  },

  /**
   *  /api/customerListService 客户资料列表(客户名称)
   */
  customerListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerListService', params, success_callback, fail_callback);
  },

/**
 *  /api/customerMonthPlanListService 每月计划用电量列表
 */
customerMonthPlanListService(params, success_callback, fail_callback) {
  withAxios.requestData('POST', 3,'/api/customerMonthPlanListService', params, success_callback, fail_callback);
},

  /**
   *  /api/customerMonthPlanLockService 冻结某年某月某次的计划用电量
   */
  customerMonthPlanLockService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerMonthPlanLockService', params, success_callback, fail_callback);
  },
  /**
   *  /api/customerMonthPlanSaveService 保存计划用电量
   */
  customerMonthPlanSaveService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerMonthPlanSaveService', params, success_callback, fail_callback);
  },

  /**
   * /api/areaListService 区域列表
   */
  areaListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/areaListService', params, success_callback, fail_callback);
  },

  /**
   * /api/customerMonthPlanCurrentListService 电量池月度交易-客户月度用电情况列表/模拟冻结
   */
  customerMonthPlanCurrentListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerMonthPlanCurrentListService', params, success_callback, fail_callback);
  },

  /**
   * /api/monthGapParamDetailService 电量池月度交易-缺口情况参数详情
   */
  monthGapParamDetailService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/monthGapParamDetailService', params, success_callback, fail_callback);
  },
  /**
   * /api/monthGapParamSaveService 电量池月度交易--保存缺口情况参数
   */
  monthGapParamSaveService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/monthGapParamSaveService', params, success_callback, fail_callback);
  },




  /**
   * /api/poolYearCustomerUsePowerListService 电量池年度交易-客户用电情况列表
   */
  poolYearCustomerUsePowerListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/poolYearCustomerUsePowerListService', params, success_callback, fail_callback);
  },

  /**
   * /api/poolYearPurchasedPowerCreateService 电量池年度交易-添加已购电情况
   */
  poolYearPurchasedPowerCreateService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/poolYearPurchasedPowerCreateService', params, success_callback, fail_callback);
  },



  /**
   * /api/poolYearPurchasedPowerListService 电量池年度交易-已购电列表
   */
  poolYearPurchasedPowerListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/poolYearPurchasedPowerListService', params, success_callback, fail_callback);
  },

  /**
   * /api/poolYearCustomerUsePowerGapService 电量池年度交易-客户用电缺口
   */
  poolYearCustomerUsePowerGapService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/poolYearCustomerUsePowerGapService', params, success_callback, fail_callback);
  },


  /**
   * /api/customerSurplusListService 客户富余电基数列表查询
   */
  customerSurplusListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerSurplusListService', params, success_callback, fail_callback);
  },



  /**
   * /api/customerSurplusCreateService 客户富余电基数创建
   */
  customerSurplusCreateService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerSurplusCreateService', params, success_callback, fail_callback);
  },










}
