import withAxios from './withAxios'

/**
 *   报价环节
 *   @param httpMethod 请求方法（GET POST PUT PATCH DELETE）
 *   @param urlType URL类型
 *   @param path api路径
 *   @param params 请求参数
 * */

export default {
  /**
   *  /api/userListService 用户列表
   */
  userListService(params, success_callback, fail_callback) {
    withAxios.requestData(
      'POST',
      3,
      '/api/userListService',
      params,
      success_callback,
      fail_callback,
    )
  },

  /**
   * /api/userDeleteService 用户删除
   */
  userDeleteService(params, success_callback, fail_callback) {
    withAxios.requestData(
      'POST',
      3,
      '/api/userDeleteService',
      params,
      success_callback,
      fail_callback,
    )
  },

  /**
   * /api/userCreateService 用户创建
   */
  userCreateService(params, success_callback, fail_callback) {
    withAxios.requestData(
      'POST',
      3,
      '/api/userCreateService',
      params,
      success_callback,
      fail_callback,
    )
  },

  /**
   * /api/userEditService 用户编辑
   */
  userEditService(params, success_callback, fail_callback) {
    withAxios.requestData(
      'POST',
      3,
      '/api/userEditService',
      params,
      success_callback,
      fail_callback,
    )
  },

  /**
   * /api/roleListService 角色列表
   */
  roleListService(params, success_callback, fail_callback) {
    withAxios.requestData(
      'POST',
      3,
      '/api/roleListService',
      params,
      success_callback,
      fail_callback,
    )
  },

  /**
   * /api/menuListService 权限树形结构数据
   */
  menuListService(params, success_callback, fail_callback) {
    withAxios.requestData(
      'POST',
      3,
      '/api/menuListService',
      params,
      success_callback,
      fail_callback,
    )
  },

  /**
   * /api/roleCreateService 创建角色
   */
  roleCreateService(params, success_callback, fail_callback) {
    withAxios.requestData(
      'POST',
      3,
      '/api/roleCreateService',
      params,
      success_callback,
      fail_callback,
    )
  },
  /**
   * /api/roleEditService 编辑角色
   */
  roleEditService(params, success_callback, fail_callback) {
    withAxios.requestData(
      'POST',
      3,
      '/api/roleEditService',
      params,
      success_callback,
      fail_callback,
    )
  },

  /**
   * 交易类型表列表
   */
  contractTableListService(params, success_callback, fail_callback) {
    withAxios.requestData(
      'POST',
      3,
      '/api/contractTableListService',
      params,
      success_callback,
      fail_callback,
    )
  },

  /**
   * 交易类型表创建
   */
  contractTableCreateService(params, success_callback, fail_callback) {
    withAxios.requestData(
      'POST',
      3,
      '/api/contractTableCreateService',
      params,
      success_callback,
      fail_callback,
    )
  },
  
  /**
   * 交易类型表创建
   */
  contractTableEditService(params, success_callback, fail_callback) {
    withAxios.requestData(
      'POST',
      3,
      '/api/contractTableEditService',
      params,
      success_callback,
      fail_callback,
    )
  },


  /**
   * 交易类型表详情
   */
  contractTableDetailService(params, success_callback, fail_callback) {
    withAxios.requestData(
      'POST',
      3,
      '/api/contractTableDetailService',
      params,
      success_callback,
      fail_callback,
    )
  },
}
