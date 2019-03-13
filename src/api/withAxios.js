
import {Message} from "element-ui"
import baseUrl from "../assets/js/baseurl"

export default {

  /**
   * 请求API公用函数
   * @param httpMethod 请求方法（GET POST PUT PATCH DELETE）
   * @param urlType URL类型
   * @param path api路径
   * @param params 请求参数
   */
  requestData(httpMethod,urlType,path, params, success_callback, fail_callback) {
    let token = localStorage.getItem('adminToken') || '';
    let selfId = localStorage.getItem('adminSelfId') || '';
   // console.log(token)
    let reqUrl = '';
    let key = 'data';
    if (httpMethod === 'GET') {
      key = 'params';
    }else if (httpMethod === 'POST') {
      key = 'params';
    }

    // if (urlType === 1 || urlType === 5 || urlType === 6) {
    //   reqUrl = baseUrl.appCdzqUrl();
    // } else if (urlType === 2) {
    //   reqUrl = baseUrl.activityUrl();
    // } else if (urlType === 4) {
    //   reqUrl = baseUrl.investigateUrl();
    // } else {
    //   reqUrl = baseUrl.dataUrl();
    // }

    axios({
      url: path,
      method: httpMethod,
      baseURL: process.env.API_ROOT,
      headers: {
       // 'token': token,
        // 'version': '1.0'
      },
      [key]:{
        'version': '1.0',
         'selfId':selfId,
        'token': token,
        data:params
      }
    }).then(function (res) {
      if (res.data.status === 200) {
        success_callback && success_callback(res.data);
      }else if (res.data.status === 600) {
        Message({
          type: 'warning',
          message: res.data.message
        });
        return false;
      }
      fail_callback && fail_callback(res.data);

    }).catch(function (errormsg) {
      if (errormsg) {
        Message({
          type: 'warning',
          message: '服务器异常！'
        });
        fail_callback && fail_callback(errormsg.data);
      }
    });
  },
  requestFormData(path,file, params, success_callback, fail_callback) {
    let token = localStorage.getItem('adminToken') || '';
    let selfId = localStorage.getItem('adminSelfId') || '';

    var formData = new window.FormData() // vue 中使用 window.FormData(),否则会报 'FormData isn't definded'
    formData.append('file', file)
    formData.append('data', params)
    formData.append('version', '1.0')
    formData.append('selfId', selfId)
    var options = {  // 设置axios的参数
      url: path,
      data: formData,
      baseURL: process.env.API_ROOT,
      method: 'post',
      headers: {
        'token': token,
        'Content-Type': 'multipart/form-data'
      }
    }
    this.axios(options).then(function (res) {
      if (res.data.status === 200) {
        success_callback && success_callback(res.data);
      }else if (res.data.status === 600) {
        Message({
          type: 'warning',
          message: res.data.message
        });
        return false;
      }
      fail_callback && fail_callback(res.data);

    }).catch(function (errormsg) {
      if (errormsg) {
        Message({
          type: 'warning',
          message: '服务器异常！'
        });
        fail_callback && fail_callback(errormsg.data);
      }
    }); // 发送请求

  },
  requestExportService(httpMethod,urlType,path, params, success_callback, fail_callback) {
    let selfId = localStorage.getItem('adminSelfId') || '';
    var _temp =process.env.API_ROOT + path +"?version=1.0&selfId= "+ selfId +"&data="+ params
    console.log(encodeURI(_temp))
    window.open(encodeURI(_temp))
  },
}
