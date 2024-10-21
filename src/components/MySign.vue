<template>
  <MyModal>
    <div class="sign-form">
      <span>Регистрация</span>
      <div class="sign-form_item">
        <span class="sign-form_item_text"> Логин:</span>
        <div class="sign-form_item_input"><MyInput v-model="signState.login" id=""></MyInput></div>
      </div>

      <div class="sign-form_item">
        <span class="sign-form_item_text">Пароль:</span>
        <div class="sign-form_item_input">
          <MyInput
            v-model="signState.password"
            @click="console.log(signState.checkConfirmPassword)"
            id=""
            :class="{
              validpass: signState.checkConfirmPassword === true,
              invalidpass: signState.checkConfirmPassword === false
            }"
          ></MyInput>
        </div>
      </div>

      <div class="sign-form_item">
        <span class="sign-form_item_text">Повторите пароль:</span>
        <div class="sign-form_item_input">
          <!-- {{ signState. }} -->
          <MyInput
            id=""
            :class="{
              validpass: signState.checkConfirmPassword === true,
              invalidpass: signState.checkConfirmPassword === false
            }"
            v-model="signState.confirmPassword"
          ></MyInput>
        </div>
      </div>

      <div class="sign-form_item">
        <span class="sign-form_item_text">Электронная почта:</span>
        <div class="sign-form_item_input">
          <MyInput
            id=""
            :class="{
              validpass: signState.checkValideEmail === true,
              invalidpass: signState.checkValideEmail === false
            }"
            v-model="signState.email"
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
// import { ref } from 'vue'
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
