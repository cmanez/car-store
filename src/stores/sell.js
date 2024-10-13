import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const sellStore = defineStore('sell', () => {
  const classActive = ref(false)

  const changeClass = computed(() => {
    return classActive.value === false ? (classActive.value = true) : (classActive.value = false)
  })

  return {
    changeClass,
    classActive
  }
})
