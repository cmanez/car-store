import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const signStore = defineStore('sign', () => {
  const login = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const classPasswordChange = ref(null)
  const clickToCheck = ref(false)

  const startCheckValid = () => {
    clickToCheck.value = true
  }

  const checkConfirmPassword = computed(() => {
    if (clickToCheck.value && password.value && confirmPassword.value) {
      password.value === confirmPassword.value
        ? (classPasswordChange.value = true)
        : (classPasswordChange.value = false)
    }
    return classPasswordChange.value
  })

  const checkValideEmail = computed(() => {
    return clickToCheck.value ? /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email.value) : null
  })
  const checkStrongPassword = computed(() => {
    return clickToCheck.value
      ? /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/.test(
          password.value
        )
      : null
  })

  return {
    checkConfirmPassword,
    startCheckValid,
    password,
    confirmPassword,
    login,
    email,
    checkValideEmail,
    checkStrongPassword
  }
})
