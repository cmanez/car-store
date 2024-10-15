<template>
  <div class="nav">
    <div class="nav_left">
      <MyButton @click="modalState.changeClass">продать</MyButton>
      <MyButton>купить</MyButton>
    </div>
    <div class="nav_right">
      <div class="nav_right-auth">
        <MyButton>Sign In</MyButton>
        <MyButton>Log In</MyButton>
      </div>
    </div>
  </div>
  <MySell :class="{ modal_none: modalState.classActive }"></MySell>
</template>

<script setup>
import MyButton from '@/UI/MyButton.vue'
import { modalStore } from '../stores/modal.js'
import MySell from './MySell.vue'

const modalState = modalStore()
</script>
<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  background-color: $main-red;
  height: 4rem;
  &_left {
    width: 30%;
    display: flex;
    justify-content: space-around;
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
