/**
 * 正则合集
 * 
 */


// 手机号
export const phoneRegex = /^1[3-9][0-9]\d{8}$/;

// 座机号
export const telRegex = /^([0-9]{3,4}-)?[0-9]{7,8}$/;

// 身份证号
export const identityCardRegex = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

// 邮箱
export const emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// 真实姓名
export const realNameRegex = /^[\u4E00-\u9FA5]{2,}(?:·[\u4E00-\u9FA5]{2,})*$/;

export default { phoneRegex, telRegex, identityCardRegex, emailRegex, realNameRegex };
