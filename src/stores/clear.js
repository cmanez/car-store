import { defineStore } from 'pinia'
import { autoArrayStore } from './auto_array'
import { signStore } from './signin'
export const clearStore = defineStore('clear', () => {
  const signState = signStore()
  const autoArrayState = autoArrayStore()
  const clearItems = () => {
    //очистка элементов после закрытия модального окна
    signState.login = ''
    signState.email = ''
    signState.password = ''
    signState.phoneNum = ''
    signState.confirmPassword = ''
    signState.classPasswordChange = false
    signState.clickToCheck = false
    autoArrayState.notEnoughData = false
  }
  return {
    clearItems
  }
})
