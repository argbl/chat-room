import io from 'socket.io-client'
import { useUserStore } from '@/store/user'
import Message from '@cp/base/base-message'
let socket: any = null
export default function () {
  const initSocket = () => {
    if (!socket) {
      socket = io('http://127.0.0.1:7001/', {
        transports: ['websocket'],
        reconnection: true, // 是否重连
        reconnectionAttempts: 30, // 重新连接的次数
        reconnectionDelay: 1000, // 每过多长时间重连一次
        timeout: 5000, // 超时时间
        autoConnect: false,
        query: {
          token: window.localStorage.getItem('token'),
        },
      })
      socket.on('connect', () => {
        console.log('连接成功') // x8WIv7-mJelg7on_ALbx
      })
      socket.on('disconnect', (res: any) => {
        console.log('连接关闭') // undefined
      })
      socket.on('client_success', (res: any) => {
        console.log(`连接成功${res.message}`) // x8WIv7-mJelg7on_ALbx
      })
      socket.on('connect_error', (e: any) => {
        console.log('connect_error', e)
      })

      socket.connect()

      socket.on('system', (res: any) => {
        Message.success(res)
      })
      socket.on('chat', (res: any) => {
        console.log(res)
      })
      socket.emit('ping', '测试是否连接')
    }

    return socket
  }

  return initSocket()
}
