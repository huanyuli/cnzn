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
   *  /api/customerListService 客户资料列表
   */
  customerListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerListService', params, success_callback, fail_callback);
  },

  /**
   *  /api/customerCodeService 客户资料字典
   */
  customerCodeService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerCodeService', params, success_callback, fail_callback);
  },


  /**
   *  /api/customerNameExistsService 查询客户名称是否存在
   */
  customerNameExistsService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerNameExistsService', params, success_callback, fail_callback);
  },

  /**
   *  /api/customerListCodeService 客户列表字典
   */
  customerListCodeService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerListCodeService', params, success_callback, fail_callback);
  },

  /**
   *  /api/customerDetailService 客户详情
   */
  customerDetailService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerDetailService', params, success_callback, fail_callback);
  },
  /**
   *  /api/customerDeleteService 客户删除
   */
  customerDeleteService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerDeleteService', params, success_callback, fail_callback);
  },

  /**
   * /api/customerCreateService 创建客户
   */
  customerCreateService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerCreateService', params, success_callback, fail_callback);
  },
  /**
   * /api/customerEditService 编辑客户
   */
  customerEditService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerEditService', params, success_callback, fail_callback);
  },

  /**
   * /api/areaListService 区域列表
   */
  areaListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/areaListService', params, success_callback, fail_callback);
  },


  /**
   * /api/userListService 用户列表
   */
  userListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/userListService', params, success_callback, fail_callback);
  },
  /**
   * /api/templateDownloadService 下载导入模板
   */
  templateDownloadService(params, success_callback, fail_callback) {
    withAxios.requestExportService('POST', 3,'/api/templateDownloadService', params, success_callback, fail_callback);
  },
}
