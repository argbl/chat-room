import BaseModal from '@cp/base/base-modal/base-modal.vue'
import BaseImg from '@cp/base/base-img/base-img.vue'
import BaseDialog from '@cp/base/base-dialog/base-dialog.vue'
import BaseInput from '@cp/base/base-input/base-input.vue'
import { App } from 'vue'

export default {
  install: function (app: App) {
    app.component(BaseModal.__name!, BaseModal)
    app.component(BaseImg.__name!, BaseImg)
    app.component(BaseDialog.__name!, BaseDialog)
    app.component(BaseInput.__name!, BaseInput)
  },
  BaseInput,
}
