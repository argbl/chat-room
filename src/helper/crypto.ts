import Crypto from 'crypto-js'

// Encrypt
export function encrypt(text: string, secret: string) {
  return Crypto.AES.encrypt(text, secret).toString()
}

export function dDecrypt(text: string, secret: string) {
  return Crypto.AES.decrypt(text, secret).toString(Crypto.enc.Utf8)
}
