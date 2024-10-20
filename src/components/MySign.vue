<template>
  <MyModal>
    <div class="sign-form">
      <span>Регистрация</span>
      <div class="sign-form_item">
        <span class="sign-form_item_text"> Логин:</span>
        <div class="sign-form_item_input"><MyInput v-model="login" id=""></MyInput></div>
      </div>

      <div class="sign-form_item">
        <span class="sign-form_item_text">Пароль:</span>
        <div class="sign-form_item_input"><MyInput v-model="password" id=""></MyInput></div>
      </div>

      <div class="sign-form_item">
        <span class="sign-form_item_text">Повторите пароль:</span>
        <div class="sign-form_item_input"><MyInput id=""></MyInput></div>
      </div>

      <div class="sign-form_item">
        <span class="sign-form_item_text">Электронная почта:</span>
        <div class="sign-form_item_input"><MyInput v-model="email" id=""></MyInput></div>
      </div>
      <div><MyButton>Зарегистрироваться</MyButton></div>
    </div>
  </MyModal>
</template>
<script setup lang="ts">
import MyModal from './MyModal.vue'
import MyInput from '@/UI/MyInput.vue'
import MyButton from '@/UI/MyButton.vue'
import { ref } from 'vue'

const login = ref('')
const password = ref('')
const email = ref('')
</script>

<style lang="scss">
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
