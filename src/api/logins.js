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
   *  /api/userLoginService 用户登陆
   */
  userLoginService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/userLoginService', params, success_callback, fail_callback);
  },


}

