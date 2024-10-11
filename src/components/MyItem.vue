<template>
  <div class="item">
    <div class="item_car-pic"><img src="@/assets/img/car.webp" alt="" /></div>
    <div class="item_car-model">Модель:</div>
    <div class="item_car-price">Цена:</div>
  </div>
</template>

<script setup></script>
<style lang="scss">
.item {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  border: solid 1px rgb(184, 127, 127);
  border-radius: 10px;
  background-color: $main-light;
  &_car-pic {
    height: 60%;
    align-self: center;
    justify-self: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &_car-model {
    height: 20%;
  }
  &_car-price {
    height: 20%;
  }
}
</style>
