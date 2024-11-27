<template>
  <input v-model="model" />
</template>

<script setup>
const model = defineModel({})
</script>

<style lang="scss">
input {
  width: 100%;
  background-color: $items-gray;
  border: none;
  padding: 5px 8px;
  outline: none;
}
</style>
