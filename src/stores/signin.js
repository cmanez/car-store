import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const signStore = defineStore('sign', () => {
  const login = ref('')
  const email = ref('')
  const password = ref('')
  const phoneNum = ref('')
  const confirmPassword = ref('')
  const classPasswordChange = ref(null)
  const clickToCheck = ref(false)

  const startCheckValid = () => {
    clickToCheck.value = true
  }

  const phoneAddPlus = () => {
    if (phoneNum.value.indexOf('+') === -1) {
      phoneNum.value = '+7' + phoneNum.value
    }
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

  const checkValideLogin = computed(() => {
    return clickToCheck.value ? /^[a-z0-9_-]{3,16}$/.test(login.value) : null
  })
  const checkValidePhone = computed(() => {
    return clickToCheck.value
      ? /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(phoneNum.value)
      : null
  })

  return {
    checkConfirmPassword,
    checkValidePhone,
    password,
    confirmPassword,
    login,
    email,
    checkValideEmail,
    checkStrongPassword,
    checkValideLogin,
    phoneNum,
    startCheckValid,
    phoneAddPlus
  }
})
