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
              validpass: signState.checkConfirmPassword && signState.password,
              invalidpass: signState.checkConfirmPassword === false && !signState.password
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
              validpass: signState.checkConfirmPassword && signState.confirmPassword,
              invalidpass: signState.checkConfirmPassword === false && !signState.confirmPassword
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
            v-imask="{ mask: '+7(000) 000-0000', lazy: true }"
            :class="{
              validpass: signState.checkValidePhone,
              invalidpass: signState.checkValidePhone === false
            }"
            maxlength="16"
            @input="console.log(signState.phoneNum)"
          ></MyInput>
        </div>
      </div>
      <div>
        <MyButton @click="handleClick()">Зарегистрироваться</MyButton>
      </div>
    </div>
  </MyModal>
</template>
<script setup lang="ts">
import MyModal from './MyModal.vue'
import MyInput from '@/UI/MyInput.vue'
import MyButton from '@/UI/MyButton.vue'
import { modalStore } from '../stores/modal'
import { signStore } from '@/stores/signin'

const signState = signStore()
const modalState = modalStore()

const checkBeforeClose = () => {
  signState.checkFieldsValues() ? modalState.modalClose() : 0
}
const handleClick = () => {
  signState.startCheckValid()
  checkBeforeClose()
}
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
