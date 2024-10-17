<template>
  <div class="footer">
    <MyButton @click="$router.push('/about')">о компании</MyButton>
  </div>
</template>

<script setup>
import MyButton from '@/UI/MyButton.vue'
</script>
<style lang="scss">
.footer {
  display: flex;
  background-color: $main-red;
  height: 100%;
  padding: 0 5% 0 5%;
}
</style>
