import { createApp } from 'vue'
import LoadingStatus from './loading-status.vue'

interface loadingElement extends HTMLElement {
  loading: HTMLElement
  normal: HTMLElement[]
}

export default {
  mounted(el: loadingElement, binding: any) {
    const app = createApp(LoadingStatus, {
      size: Number(binding.arg),
    }) // 根据模板创建app

    // 将app挂载在div上
    // instance 可获取实例上暴露的方法 setup语法中需要defineExpose
    const instance = app.mount(document.createElement('div'))
    if (binding.value) {
      append(el)
    }
    if (!el.loading) {
      el.loading = instance.$el
    }
    const normal: HTMLElement[] = []
    el.childNodes.forEach((element) => {
      normal.push(element as HTMLElement)
    })
    el.normal = normal
  },

  updated(el: loadingElement, binding: any) {
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  },
}
function append(el: loadingElement) {
  el.classList.add('flex')
  el.classList.add('items-center')
  el.classList.add('justify-center')
  el.normal.forEach((element) => {
    el.removeChild(element)
  })
  el.appendChild(el.loading)
}

function remove(el: loadingElement) {
  el.removeChild(el.loading)
  el.normal.forEach((element) => {
    el.appendChild(element)
  })
}
