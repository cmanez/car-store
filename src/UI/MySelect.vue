<template>
  <select name="" id="" class="select" v-model="model">
    <slot></slot>
  </select>
</template>

<script setup>
import { defineModel } from 'vue'
const model = defineModel({})
</script>

<style>
.select {
  width: 100%;
}
</style>
