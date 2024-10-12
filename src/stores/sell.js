import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const sellStore = defineStore('sell', () => {
  const classActive = ref(true)

  const changeClass = computed(() => {
    return classActive.value ? (classActive.value = false) : (classActive.value = true)
  })

  return {
    changeClass,
    classActive
  }
})
