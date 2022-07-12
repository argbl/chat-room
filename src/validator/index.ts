interface Validator {
  [key: string]: {
    reg: RegExp
    errorMsg: string
  }
}

export default {
  password: {
    reg: /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,12}$/,
    errorMsg: '密码长度为6-12位，至少包含数字跟字母，可以使用字符',
  },

  nickname: {
    reg: /^.{4,20}$/,
    errorMsg: '用户名长度为4-20个字符',
  },

  email: {
    reg: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    errorMsg: '邮箱格式不正确',
  },

  phone: {
    reg: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    errorMsg: '手机号码格式不正确',
  },

  noCheck: {
    reg: new RegExp(''),
    errorMsg: '',
  },
} as Validator
