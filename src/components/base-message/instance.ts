import { createApp } from 'vue'
import BaseMessage from './base-message.vue'
import { MessageConfig } from './base-message'
const createInstance = (message: string, config: MessageConfig) => {
  const messageNode = document.createElement('div')
  messageNode.classList.add(
    'fixed',
    'message',
    'left-1/2',
    '-translate-x-[200px]'
  )

  const height = 68 //48px高度 + 20px间隔

  const messageList = document.getElementsByClassName('message')

  messageNode.style.top = `${messageList.length * height + 20}px`
  const app = createApp(BaseMessage, {
    message,
    config,
    remove() {
      handleRemove()
    },
  })

  const instance = app.mount(messageNode)

  document.body.appendChild(messageNode)

  const handleRemove = () => {
    document.body.removeChild(messageNode)
    resetMessagePos()
  }

  const resetMessagePos = () => {
    for (let i = 0; i < messageList.length; i++) {
      ;(messageList[i] as HTMLElement).style.top = `${i * height + 20}px`
    }
  }
}
export default createInstance
