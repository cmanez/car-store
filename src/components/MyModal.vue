<template>
  <div class="wrapper">
    <div class="background" @click="modalState.changeClass"></div>
    <div class="modal">
      <img
        @click="modalState.changeClass"
        src="../assets/close.svg"
        alt=""
        class="modal_close-item"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { modalStore } from '../stores/modal'

const modalState = modalStore()
</script>

<style lang="scss">
.modal_none {
  display: none;
}

.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;

  .background {
    background-color: black;
    opacity: 0.5;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 30rem;
    width: 25rem;
    background-color: $main-light;
    border: solid 1px rgb(184, 127, 127);
    border-radius: 10px;
    padding: 1rem;
    &_close-item {
      position: absolute;
      left: 90%;
      height: 1.5rem;
      transition: 0.2s;
    }
    &_close-item:hover {
      transform: scale(1.25);
      transition: 0.2s;
    }
  }
}
</style>
