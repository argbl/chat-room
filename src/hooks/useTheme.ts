import { computed, toRefs } from 'vue'
import { useSettingStore } from '@/store/setting'
export default function () {
  const settingStore = useSettingStore()
  const theme = computed(() => settingStore.theme)
  const bgColorPrimary = computed(() => {
    return theme.value === 'dark' ? '#36393f' : '#ffffff'
  })
  const bgColorSecond = computed(() => {
    return theme.value === 'dark' ? '#2f3136' : '#f2f3f5'
  })
  const bgColorThird = computed(() => {
    return theme.value === 'dark' ? '#202225' : '#e3e5e8'
  })
  const textColorPrimary = computed(() => {
    return theme.value === 'dark' ? '#ffffff' : '#000000'
  })
  const textColorSecond = computed(() => {
    return theme.value === 'dark' ? '#b9bbbe' : '#4f5660'
  })
  const textColorThird = computed(() => {
    return theme.value === 'dark' ? '#b9bbbe' : '#858585'
  })

  const borderColor = computed(() => {
    return theme.value === 'dark' ? '#202225' : '#e3e5e8'
  })

  return {
    bgColorPrimary,
    textColorPrimary,
    bgColorSecond,
    textColorSecond,
    bgColorThird,
    textColorThird,
    borderColor,
  }
}
