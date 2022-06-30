import BaseModel from '@cp/base-model/base-model.vue'
import { Component } from 'vue'
interface App {
  component(name: string, component: Component): this
}
export default {
  install: function (Vue: App) {
    Vue.component(BaseModel.name, BaseModel)
  },
}
