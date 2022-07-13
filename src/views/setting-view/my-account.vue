<template>
  <div>
    <div class="text-lg mb-5">我的帐号</div>
    <div class="theme-second">
      <div
        class="h-[100px] rounded-t-md w-full"
        :style="{
          backgroundColor: user.banner_color || '#22c55e',
        }"
      ></div>
      <div class="flex -mt-5 justify-between items-center">
        <div class="flex items-center text-xl">
          <div class="p-2 theme-second w-24 h-24 rounded-full ml-4">
            <img
              :src="user.avatar"
              class="w-full h-full rounded-full object-cover"
            />
          </div>
          <div class="ml-2">{{ user.nickname }}</div>
          <span>#{{ user.id }}</span>
        </div>
        <button
          @click="settingStore.setSettingActiveIndex(1)"
          class="bg-blue-600 button text-sm rounded py-[2px] px-4 h-8 mr-4"
        >
          <div>编辑个人信息</div>
        </button>
      </div>
      <div class="rounded">
        <div class="theme-second p-4 text-gray-200">
          <div class="theme-primary p-4 rounded">
            <div class="flex items-center">
              <div class="flex-1 flex flex-col">
                <h5 class="mb-1 text-xs">用户名</h5>
                <div class="flex">
                  <div class="text-primary">{{ user.nickname }}</div>
                  <span>#{{ user.id }}</span>
                </div>
              </div>
              <button
                @click="nicknameModalRef?.show"
                class="h-8 py-[2px] px-4 my-1 bg-third button text-sm rounded"
              >
                <div>编辑</div>
              </button>
            </div>
            <div class="flex items-center mt-6">
              <div class="flex-1 flex flex-col">
                <h5 class="mb-1 text-xs">邮箱</h5>
                <div class="flex">
                  <div class="text-primary">{{ user.email }}</div>
                </div>
              </div>
              <button
                @click="emailModalRef?.show"
                class="h-8 py-[2px] px-4 my-1 bg-third button text-sm rounded"
              >
                <div>编辑</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[1px] my-10 bg-gray-500"></div>
    <div class="text-lg mb-5">密码和验证</div>
    <button
      @click="passwordModalRef?.show"
      class="bg-blue-600 button text-sm rounded py-[2px] px-4 h-8 mr-4"
    >
      <div>更改密码</div>
    </button>
    <base-modal
      :visible="nicknameModalRef?.visible"
      ref="nicknameModalRef"
      title="更改用户名"
      subtitle="输入新用户名"
      @confirm="confirmUser"
    >
      <base-input
        v-model="userForm.nickname"
        label="用户名"
        check="nickname"
        inputType="nickname"
      ></base-input>
    </base-modal>

    <base-modal
      :visible="emailModalRef?.visible"
      ref="emailModalRef"
      title="更改邮箱"
      subtitle="输入新邮箱"
      @confirm="confirmUser"
    >
      <base-input
        v-model="userForm.email"
        label="电子邮箱"
        check="email"
        inputType="email"
      ></base-input>
    </base-modal>

    <base-modal
      :visible="passwordModalRef?.visible"
      ref="passwordModalRef"
      title="更改密码"
      subtitle="输入当前密码和新密码"
      @confirm="confirmPass"
    >
      <base-input
        v-model="passForm.originalPassword"
        label="当前密码"
        check="password"
        inputType="password"
      ></base-input>
      <base-input
        v-model="passForm.newPassword"
        class="mt-5"
        label="新密码"
        check="password"
        inputType="password"
      ></base-input>
      <base-input
        v-model="passForm.checkPassword"
        class="mt-5"
        label="确认密码"
        inputType="password"
      ></base-input>
    </base-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useUserStore } from '@/store/user'
import baseModal from '@/components/base-modal/base-modal.vue'
import baseInput from '@/components/base-input/base-input.vue'
import { update, pass } from '@/api/user'
import useValidate from '@/hooks/useValidate'
import Message from '@/components/base-message'
import { useSettingStore } from '@/store/setting'
import { PassProps } from '@model/user'
const userStore = useUserStore()

const user = computed(() => {
  return userStore.user
})
const settingStore = useSettingStore()
const userForm = ref(userStore.user)
const nicknameModalRef = ref<{ visible: boolean; show: () => void } | null>(
  null
)
const emailModalRef = ref<{ visible: boolean; show: () => void } | null>(null)

const passForm: PassProps = reactive({
  originalPassword: '',
  newPassword: '',
  checkPassword: '',
})
const passwordModalRef = ref<{ visible: boolean; show: () => void } | null>(
  null
)
const confirmUser = async () => {
  const rules = {
    nickname: 'nickname',
    email: 'email',
  }
  if (useValidate(userForm.value, rules)) {
    const { data: result } = await update(userForm.value)
    await userStore.me()
    if (result.code === 200) {
      Message.success(result.message)
    } else {
      Message.error(result.message)
    }
  }
}

const confirmPass = async () => {
  const { data: result } = await pass(passForm)
  if (result.code === 200) {
    Message.success(result.message)
    await userStore.me()
  } else {
    Message.error(result.message)
  }
}
</script>
<style scoped></style>
