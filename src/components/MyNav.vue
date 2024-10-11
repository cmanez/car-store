<template>
  <div class="nav">
    <div class="nav_left">
      <MyButton>продать</MyButton>
      <MyButton>купить</MyButton>
    </div>
    <div class="nav_right">
      <div class="nav_right-auth">
        <MyButton>Sign In</MyButton>
        <MyButton>Log In</MyButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyButton from '@/UI/MyButton.vue'
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
