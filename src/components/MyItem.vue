<template>
  <div
    class="item"
    v-for="item in autoArrayState.itemCarArray"
    :key="item.model"
    @click="carCardState.pushInfoCar(item.model, item.price, item.mileage, item.phoneNum)"
  >
    <div class="item_car-pic">
      <img src="@/assets/img/car.webp" alt="" @click="modalState.modalVisible('carCard')" />
    </div>
    <div class="test_wrapper">
      <div class="item_car-info" @click="modalState.modalVisible('carCard')">
        <div class="item_car-info-properties">
          <div class="item_car-info-properties-prop">Марка: {{ item.model }}</div>
          <div class="item_car-info-properties-prop">Цена: {{ item.price }} ₽</div>
          <div class="item_car-info-properties-prop">Пробег: {{ item.mileage }} км</div>
        </div>
      </div>

      <div class="item_car-info-delete" @click="autoArrayState.newCarArray(item.id)">
        <img src="../assets/close.svg" alt="" class="modal_close-item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { autoArrayStore } from '../stores/auto_array'
import { carCardStore } from '../stores/carCard'
import { modalStore } from '../stores/modal'
const modalState = modalStore()
const carCardState = carCardStore()
const autoArrayState = autoArrayStore()
</script>
<style lang="scss">
.item {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  // border: solid 1px rgb(184, 127, 127);
  // border-radius: 10px;
  background-color: $main-light;
  transition: 0.2s;
  .test_wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  &_car-pic {
    height: 60%;
    align-self: center;
    justify-self: center;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &_car-info {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    &-properties {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-prop {
        height: 20%;
      }
    }
    &-delete {
      display: flex;
      align-items: end;
      img {
        width: 30px;
        height: 30px;
      }
      transition: 0.2s;
    }
    &-delete:hover {
      transform: scale(1.1);
      transition: 0.2s;
    }
  }
}
.item:hover {
  scale: 1.03;
  transition: 0.2s;
}
</style>
