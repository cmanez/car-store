import { ref } from 'vue'
import { defineStore } from 'pinia'
import { signStore } from './signin'

export const modalStore = defineStore('sell', () => {
  const signState = signStore()
  const modalName = ref(null)
  const modalVisible = (className) => {
    modalName.value = className
  }
  const modalClose = () => {
    modalName.value = null
    signState.clearInput()
  }
  return {
    modalVisible,
    modalClose,
    modalName
  }
})
