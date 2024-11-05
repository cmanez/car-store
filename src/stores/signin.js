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

  const checkFieldsValues = () => {
    return clickToCheck.value &&
      checkStrongPassword.value &&
      checkConfirmPassword.value &&
      checkValideEmail.value &&
      checkValideLogin.value &&
      checkValidePhone.value
      ? true
      : false
  }

  const startCheckValid = () => {
    clickToCheck.value = true
  } // для запуска проверки полей на валидность

  const checkConfirmPassword = computed(() => {
    if (clickToCheck.value && password.value && confirmPassword.value) {
      password.value === confirmPassword.value
        ? (classPasswordChange.value = true)
        : (classPasswordChange.value = false)
    }
    return classPasswordChange.value // проверка на корректность совпадения введенных паролей
  })

  const checkValideEmail = computed(() => {
    return clickToCheck.value ? /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email.value) : null
  }) //валидация мыла

  const checkStrongPassword = computed(() => {
    return clickToCheck.value
      ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(password.value)
      : null //валидация пароля
  })

  const checkValideLogin = computed(() => {
    return clickToCheck.value ? /^[a-z0-9_-]{3,16}$/.test(login.value) : null //валидация логина
  })

  const checkValidePhone = computed(() => {
    return clickToCheck.value
      ? /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(phoneNum.value)
      : null //валидация телефона
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
    clickToCheck,
    startCheckValid,
    checkFieldsValues
  }
})
