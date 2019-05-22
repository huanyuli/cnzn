/**
 * 全局公用表单验证方法
 */


/**
 * 验证手机号码
 */
let checkPhone = (rule, value, callback) => {

  let reg = /^1[3|4|5|7|8|9][0-9]\d{4,8}$/;
  if(!reg.test(value)) {
    callback(new Error('请输入正确的手机号码'));
  } else {
    callback();
  }
};


/**
 * 验证姓名
 */
let checkName = (rule, value, callback) => {
  let reg = new RegExp("[`~!@#$%^&*()_=+|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】《》‘；：”“'。，、？-]");
  let regFont = new RegExp("[A-Za-z\u4e00-\u9fa5]");
  if (value.length > 20) {
    callback(new Error('请输入不超过20个字符的姓名'));
  } else if (reg.test(value) || /[0-9]/.test(value)) {
    callback(new Error('请输入不含有特殊符号的姓名'));
  } else if (!regFont.test(value)) {
    callback(new Error('请输入含有中文或英文的姓名'));
  } else {
    callback();
  }
};
let validator = {
  is_Phone : checkPhone,
  is_name : checkName,
};
//
// const install = function (Vue, opts = {}) {
//   Vue.prototype.$validator = validator;
// };

export default validator
