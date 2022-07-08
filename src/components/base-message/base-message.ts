import createInstance from './Instance.js'

export interface MessageConfig {
  type?: string
  duration?: number
  close?: boolean
}

function renderMessage(message: string, config: MessageConfig) {
  const {
    type = 'text', // 消息类型
    duration = 3000, // 自动关闭延迟时间
    close = false, // 是否显示关闭按钮
  } = config

  // 创建实例
  return createInstance(message, {
    type,
    duration,
    close,
  })
}
export default {
  // 纯文本消息
  text(message = '', config = {}) {
    Object.assign(config, {
      type: 'text',
    })
    return renderMessage(message, config)
  },
  // 成功提示
  success(message = '', config = {}) {
    Object.assign(config, {
      type: 'success',
    })
    return renderMessage(message, config)
  },

  fail(message = '', config = {}) {
    Object.assign(config, {
      type: 'fail',
    })
    return renderMessage(message, config)
  },
}
