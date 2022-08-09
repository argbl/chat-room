export function debounce(fn: () => void, delay = 1000) {
  let timer: number | null = null
  return function () {
    if (timer) {
      return
    }
    fn()
    timer = setTimeout(() => {
      clearTimeout(timer!)
      timer = null
    }, delay)
  }
}
