<template>
  <Transition>
    <div
      v-if="modalState.modalName === 'sell'"
      class="wrapper-modal"
      @click="console.log(modalState.modalName)"
    >
      <div class="background" @click="modalState.modalClose"></div>
      <div class="modal">
        <img
          @click="modalState.modalClose"
          src="../assets/close.svg"
          alt=""
          class="modal_close-item"
        />
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { modalStore } from '../stores/modal'

const modalState = modalStore()
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 1s;
}
// .modal_none {
//   transition: display 10s;
//   display: none;
// }
.wrapper-modal {
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
    transition: 10s;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 30rem;
    width: 25rem;
    background-color: $main-light;
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
