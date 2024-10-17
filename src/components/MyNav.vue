<template>
  <div class="nav">
    <div class="nav_left">
      <MyButton @click="$router.push('/')">
        <img class="nav_left_btn" src="@/assets/house.svg" alt="home" />
      </MyButton>
      <MyButton @click="modalState.modalVisible('sell')">продать</MyButton>
      <MyButton @click="$router.push('/cars')">купить</MyButton>
    </div>
    <div class="nav_right">
      <div class="nav_right-auth">
        <MyButton @click="modalState.modalVisible('sign')">Sign In</MyButton>
        <MyButton @click="modalState.modalVisible('auth')">Log In</MyButton>
      </div>
    </div>
  </div>
  <MySell v-if="modalState.modalName === 'sell'"></MySell>
  <MySign v-if="modalState.modalName === 'sign'"></MySign>
  <MyAuth v-if="modalState.modalName === 'auth'"></MyAuth>
</template>

<script setup>
import MyButton from '@/UI/MyButton.vue'
import { modalStore } from '../stores/modal.js'
import MySell from './MySell.vue'
import MySign from './MySign.vue'
import MyAuth from './MyAuth.vue'

const modalState = modalStore()
</script>
<style lang="scss">
.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: $main-red;
  height: 100%;

  &_left {
    width: 30%;
    display: flex;
    justify-content: space-around;
    &_btn {
      width: 16px;
    }
  }
  &_right {
    width: 70%;
    display: flex;
    flex-direction: row-reverse;
    &-auth {
      width: 30%;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
