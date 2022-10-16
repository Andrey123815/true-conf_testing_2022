<template>
  <div class="floor">
    <span class="floor__number">{{floorNumber}}</span>
    <button>Call the elevator</button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  floorNumber: number
}

const {floorNumber} = defineProps<Props>();
</script>

<style scoped lang="scss">
.floor {
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 201px;
  border-bottom: 1px solid gray;
  padding-left: 10px;

  &:last-child {
    border-top: 1px solid gray;
  }
  &__number {
    text-align: center;
  }
}
</style>
