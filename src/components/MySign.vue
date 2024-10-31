<template>
  <MyModal>
    <div class="sign-form">
      <span>Регистрация</span>
      <div class="sign-form_item">
        <span class="sign-form_item_text"> Логин:</span>
        <div class="sign-form_item_input">
          <MyInput
            v-model="signState.login"
            :class="{
              validpass: signState.checkValideLogin,
              invalidpass: signState.checkValideLogin === false
            }"
          ></MyInput>
        </div>
      </div>

      <div class="sign-form_item">
        <span class="sign-form_item_text">Пароль:</span>
        <div class="sign-form_item_input">
          <MyInput
            v-model="signState.password"
            :class="{
              validpass: signState.checkConfirmPassword,
              invalidpass: signState.checkConfirmPassword === false
            }"
            type="password"
            required
          ></MyInput>
        </div>
      </div>

      <div class="sign-form_item">
        <span class="sign-form_item_text">Повторите пароль:</span>
        <div class="sign-form_item_input">
          <!-- {{ signState. }} -->
          <MyInput
            :class="{
              validpass: signState.checkConfirmPassword,
              invalidpass: signState.checkConfirmPassword === false
            }"
            v-model="signState.confirmPassword"
            required
            type="password"
          ></MyInput>
        </div>
      </div>

      <div class="sign-form_item">
        <span class="sign-form_item_text">Электронная почта:</span>
        <div class="sign-form_item_input">
          <MyInput
            :class="{
              validpass: signState.checkValideEmail,
              invalidpass: signState.checkValideEmail === false
            }"
            v-model="signState.email"
            required
            type="email"
          ></MyInput>
        </div>
      </div>
      <div class="sign-form_item">
        <span class="sign-form_item_text">Телефон:</span>
        <div class="sign-form_item_input">
          <MyInput
            v-model="signState.phoneNum"
            required
            @input="signState.phoneAddPlus()"
            :class="{
              validpass: signState.checkValidePhone,
              invalidpass: signState.checkValidePhone === false
            }"
            maxlength="12"
          ></MyInput>
        </div>
      </div>
      <div><MyButton @click="signState.startCheckValid">Зарегистрироваться</MyButton></div>
    </div>
  </MyModal>
</template>
<script setup lang="ts">
import MyModal from './MyModal.vue'
import MyInput from '@/UI/MyInput.vue'
import MyButton from '@/UI/MyButton.vue'

import { signStore } from '@/stores/signin'

// const password = ref('')
// const confrimPassword = ref('')

const signState = signStore()
</script>

<style lang="scss">
.validpass {
  background-color: rgba($color: green, $alpha: 0.5);
}
.invalidpass {
  background-color: rgba($color: red, $alpha: 0.5);
}
.sign_none {
  display: none;
}
.sign-form {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &_item {
    display: flex;
    width: 100%;
    &_text {
      margin-right: 10%;
    }
    &_input {
      width: 100%;
    }
  }
}
</style>
