<template>
  <div class="w-full h-screen flex justify-center items-center">
    <img class="fixed left-0 w-full h-full" src="@img/bg-login.svg" />
    <div
      class="absolute left-0 right-0 w-full h-full flex justify-center items-center"
    >
      <transition name="bounce">
        <login-form v-show="route.name === 'Login' && isLoginForm"></login-form>
      </transition>

      <transition name="bounce">
        <login-history
          v-show="route.name === 'Login' && !isLoginForm"
        ></login-history>
      </transition>

      <transition name="bounce">
        <register-form v-show="route.name === 'Register'"></register-form>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { useRoute } from 'vue-router'
import LoginForm from './login-form/index.vue'
import LoginHistory from './login-history/index.vue'
import RegisterForm from './register-form/index.vue'
const route = useRoute()
const isLoginForm = ref(false)

const setIsLoginForm = (value: boolean) => {
  isLoginForm.value = value
}

provide('setIsLoginForm', setIsLoginForm)
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s ease-out;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
