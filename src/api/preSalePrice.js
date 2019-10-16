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
   *  /api/preCustomerListService 列表
   */
  preCustomerListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/preCustomerListService', params, success_callback, fail_callback);
  },

}
