<template>
  <main class="skyscraper">
    <section class="skyscraper__elevators">
      <Elevator v-for="elevator in elevators"/>
    </section>
    <section class="skyscraper__floors">
      <Floor v-for="floor in floors" :floorNumber="floor"/>
    </section>
  </main>
</template>

<script setup lang="ts">
import Floor from "@/components/Floor.vue";
import Elevator from "@/components/Elevator.vue";

const floorsCount = 3;
const elevatorsCount = 3;

const elevators = new Array(elevatorsCount);
const floors = [...Array(floorsCount).keys()];
console.log(floors);
</script>

<style scoped lang="scss">
.skyscraper {
  display: flex;
  flex-direction: row;

  &__elevators {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  &__floors {
    display: flex;
    flex-direction: column-reverse;
    //justify-content: revert;
  }
}

</style>
