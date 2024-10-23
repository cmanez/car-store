<template>
  <input type="text" v-model="model" />
</template>

<script setup>
const model = defineModel({})
</script>

<style>
input {
  width: 100%;
}
</style>
