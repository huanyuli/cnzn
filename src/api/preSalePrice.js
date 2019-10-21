import withAxios from "./withAxios";

/**
 *   客户管理
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
   *  /api/customerListCodeService 客户列表字典
   */
  customerListCodeService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerListCodeService', params, success_callback, fail_callback);
  },
  /**
   *  /api/preCustomerListService 列表
   */
  preCustomerListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/preCustomerListService', params, success_callback, fail_callback);
  },
  preCustomerCreateService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/preCustomerCreateService', params, success_callback, fail_callback);
  },
  preCustomerEditService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/preCustomerEditService', params, success_callback, fail_callback);
  },
  preCustomerCalculationService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/preCustomerCalculationService', params, success_callback, fail_callback);
  },
  // /api/preCustomerDetailService 售前报价报量-详情
  preCustomerDetailService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/preCustomerDetailService', params, success_callback, fail_callback);
  },
  //api/preCustomerLeaderEditService 售前报价报量-领导填写电量
  preCustomerLeaderEditService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/preCustomerLeaderEditService', params, success_callback, fail_callback);
  },
  // /api/preCustomerLeaderBackService 售前报价报量-领导退回
  preCustomerLeaderBackService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/preCustomerLeaderBackService', params, success_callback, fail_callback);
  },
  

}
