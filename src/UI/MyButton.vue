<template>
  <a href="#" class="button" id="button">
    <div class="sad"><slot></slot></div
  ></a>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.button {
  display: flex;
  align-self: center;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  background: #fc6e51;
  text-decoration: none;
  user-select: none;
  color: $main-light;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  transition: background-color 0.6s ease;
  overflow: hidden;
  .sad {
    margin: 10px 20px;
  }
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    top: var(--mouse-y);
    left: var(--mouse-x);
    transform-style: flat;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(white, 0.1);
    border-radius: 100%;
    transition:
      width 0.3s ease,
      height 0.3s ease;
  }
  &:focus,
  &:hover {
    background: #e45252;
  }
  &:active {
    &:after {
      width: 300px;
      height: 300px;
    }
  }
}
</style>
