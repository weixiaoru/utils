/**
 * 验证合集
 */

import {
  phoneRegex,
  telRegex,
  identityCardRegex,
  emailRegex,
  realNameRegex,
} from "../regex";

import { identityCardId } from "../dict";

//验证手机号
export const checkPhone = (phone): boolean => {
  phone = phone.replace(/\s/g, "");
  if (phoneRegex.test(phone)) {
    return true;
  } else {
    return false;
  }
};

//验证座机号
export const checkTel = (tel): boolean => {
  tel = tel.replace(/\s/g, "");
  if (telRegex.test(tel)) {
    return true;
  } else {
    return false;
  }
};

//验证短信验证码
export const checkSmsCode = (text): boolean => {
  text = text.replace(/\s/g, "");
  if (/^\d{5}$/.test(text)) {
    return true;
  } else {
    return false;
  }
};

//验证真实姓名
export const checkRealName = (text): boolean => {
  text = text.replace(/\s/g, "");
  if (realNameRegex.test(text) && text.length < 16) {
    return true;
  } else {
    return false;
  }
};

//验证身份证号
export const checkIdcard = (text): boolean => {
  let isidcard: boolean = true;
  text = text.replace(/\s/g, "");
  text = text.toLocaleUpperCase();
  const city = identityCardId;
  if (!text || !identityCardRegex.test(text)) {
    isidcard = false;
  } else if (!city[text.substr(0, 2)]) {
    isidcard = false;
  } else {
    if (text.length == 18) {
      let num = text.split("");
      const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      const parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
      let sum = 0;
      let ai = 0;
      let wi = 0;
      for (let i = 0; i < 17; i++) {
        ai = num[i];
        wi = factor[i];
        sum += ai * wi;
      }
      if (parity[sum % 11] != num[17]) {
        isidcard = false;
      } else {
        isidcard = true;
      }
    }
  }
  return isidcard;
};

export default {
  checkPhone,
  checkTel,
  checkSmsCode,
  checkRealName,
  checkIdcard,
};
