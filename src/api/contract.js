import withAxios from "./withAxios";

/**
*   合同管理
 *   @param httpMethod 请求方法（GET POST PUT PATCH DELETE）
 *   @param urlType URL类型
 *   @param path api路径
 *   @param params 请求参数
* */

export default {
  /**
   * /api/contractListService 合同列表 （售电合同）
   */
  contractListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/contractListService', params, success_callback, fail_callback);
  },

  /**
   *  /api/contractCodeService 合同字典（售电合同）
   */
  contractCodeService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/contractCodeService', params, success_callback, fail_callback);
  },

  /**
   *  /api/customerListService 客户资料列表（售电合同）
   */
  customerListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/customerListService', params, success_callback, fail_callback);
  },

  /**
   *  /api/contractCreateService 创建合同 （售电合同）
   */
  contractCreateService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/contractCreateService', params, success_callback, fail_callback);
  },


/**
 *  /api/contractSubmitService 提交合同（售电合同）
 */
contractSubmitService(params, success_callback, fail_callback) {
  withAxios.requestData('POST', 3,'/api/contractSubmitService', params, success_callback, fail_callback);
},

  /**
   *  /api/contractDetailService 合同详情 （售电合同）
   */
  contractDetailService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/contractDetailService', params, success_callback, fail_callback);
  },

  /**
   *  /api/contractDownload 下载合同（get）
   */
  contractDownload(params, success_callback, fail_callback) {
    withAxios.requestData('GET', 3,'/api/contractDownload', params, success_callback, fail_callback);
  },
  /**
   * /api/contractReviewService 合同审批
   */
  contractReviewService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/contractReviewService', params, success_callback, fail_callback);
  },




  /**
   *  /api/saleDetailService 售电方详情-包含合同详情内的一些固定值
   */
  saleDetailService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/saleDetailService', params, success_callback, fail_callback);
  },

  /**
   *  /api/contractEditService 合同编辑 （售电合同）
   */
  contractEditService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/contractEditService', params, success_callback, fail_callback);
  },

  /**
   *  /api/purchaseContractListService  购电合同列表（购电合同）
   */
  purchaseContractListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/purchaseContractListService', params, success_callback, fail_callback);
  },

  /**
   *  /api/providerListService 供电方列表（购电合同）
   */
  providerListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/providerListService', params, success_callback, fail_callback);
  },

  /**
   *  /apiFile/purchaseContractCreateService 创建购电合同
   */
  purchaseContractCreateService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/apiFile/purchaseContractCreateService', params, success_callback, fail_callback);
  },

  /**
   *  /apiFile/purchaseContractEditService 购电合同编辑
   */
  purchaseContractEditService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/apiFile/purchaseContractEditService', params, success_callback, fail_callback);
  },


  /**
   *  /api/purchaseContractDetailService 购电合同详情（购电合同）
   */
  purchaseContractDetailService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/purchaseContractDetailService', params, success_callback, fail_callback);
  },

  /**
   *  /api/purchaseContractDeleteService 购电合同删除（购电合同）
   */
  purchaseContractDeleteService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/purchaseContractDeleteService', params, success_callback, fail_callback);
  },

  /**
   *  /apiFile/thirdContractCreateService 创建第三方合同
   */
  thirdContractCreateService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/apiFile/thirdContractCreateService', params, success_callback, fail_callback);
  },

  /**
   *  /apiFile/thirdContractEditService 第三方合同编辑
   */
  thirdContractEditService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/apiFile/thirdContractEditService', params, success_callback, fail_callback);
  },


  /**
   *  /api/thirdContractListService 第三方合同列表（第三方合同）
   */
  thirdContractListService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/thirdContractListService', params, success_callback, fail_callback);
  },

  /**
   *  /api/thirdContractDetailService 第三方合同详情（第三方合同）
   */
  thirdContractDetailService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/thirdContractDetailService', params, success_callback, fail_callback);
  },
  /**
   *  /api/thirdContractDeleteService 第三方合同删除（第三方合同）
   */
  thirdContractDeleteService(params, success_callback, fail_callback) {
    withAxios.requestData('POST', 3,'/api/thirdContractDeleteService', params, success_callback, fail_callback);
  },

}
