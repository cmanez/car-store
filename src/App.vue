<template>
  <component :is="$route.meta.layout || 'MainLayout'">
    <div :key="$route.path">
      <router-view />
    </div>
  </component>
</template>

<script setup></script>

<style></style>
