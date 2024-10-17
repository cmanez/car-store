<template>
  <MyModal>
    <div class="sign-form">
      <span>Авторизация</span>
      <div class="sign-form_item">
        <span class="sign-form_item_text">Логин:</span> <MyInput></MyInput>
      </div>

      <div class="sign-form_item">
        <span class="sign-form_item_text">Пароль:</span> <MyInput></MyInput>
      </div>
      <div><MyButton>Вход</MyButton></div>
    </div>
  </MyModal>
</template>

<script setup>
import MyModal from './MyModal.vue'
import MyInput from '@/UI/MyInput.vue'
import MyButton from '@/UI/MyButton.vue'
</script>

<style></style>
