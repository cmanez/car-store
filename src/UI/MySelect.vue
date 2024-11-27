<template>
  <select name="" id="" class="select" v-model="model">
    <slot></slot>
  </select>
</template>

<script setup>
import { defineModel } from 'vue'
const model = defineModel({})
</script>

<style lang="scss">
select {
  width: 100%;
  padding: 10px 14px;
  border: none;
  border-radius: 4px;
  background-color: $items-gray;
}
/* .select {
  width: 100%;
} */
</style>
