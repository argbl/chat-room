import BaseModal from '@/components/base/base-modal/index.vue'
import BaseImg from '@/components/base/base-img/index.vue'
import BaseDialog from '@/components/base/base-dialog/index.vue'
import BaseInput from '@/components/base/base-input/index.vue'
import { App } from 'vue'

export default {
  install: function (app: App) {
    app.component('BaseModal', BaseModal)
    app.component('BaseImg', BaseImg)
    app.component('BaseDialog', BaseDialog)
    app.component('BaseInput', BaseInput)
  },
  BaseInput,
}
