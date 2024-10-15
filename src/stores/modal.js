import { ref } from 'vue'
import { defineStore } from 'pinia'

export const modalStore = defineStore('sell', () => {
  const classActive = ref(true)
  const changeClass = () => {
    classActive.value = !classActive.value
    console.log(classActive.value)
    return classActive
  }

  return {
    changeClass,
    classActive
  }
})
