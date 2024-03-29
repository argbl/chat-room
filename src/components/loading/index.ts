import { createApp } from 'vue'
import Loading from './index.vue'

interface loadingElement extends HTMLElement {
  loading: HTMLElement
}

export default {
  mounted(el: loadingElement, binding: any) {
    const app = createApp(Loading, {
      size: Number(binding.arg),
    }) // 根据模板创建app

    // 将app挂载在div上
    // instance 可获取实例上暴露的方法 setup语法中需要defineExpose
    const instance = app.mount(document.createElement('div'))

    if (!el.loading) {
      el.loading = instance.$el
    }
    if (binding.value) {
      append(el)
    }
  },

  updated(el: loadingElement, binding: any) {
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  },
}
function append(el: loadingElement) {
  el.classList.add('flex')
  el.classList.add('justify-center')
  el.classList.add('items-center')
  el.appendChild(el.loading)
}

function remove(el: loadingElement) {
  el.removeChild(el.loading)
}
