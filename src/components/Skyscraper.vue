<template>
  <main class="skyscraper">
    <span>{{elevatorsStates}}</span>
    <section class="skyscraper__elevators">
      <Elevator v-for="elevatorNumber in elevators"
                :key="elevatorNumber"
                :elevatorNumber="elevatorNumber"
                :state="elevatorsStates[elevatorNumber]"
                @free-elevator="updateElevatorStatus(elevatorNumber)"/>
    </section>
    <section class="skyscraper__floors">
      <Floor v-for="floor in floors"
             :key="floor"
             :floorNumber="floor"
             @call-elevator="callElevator"/>
    </section>
  </main>
</template>

<script setup lang="ts">
import Floor from "@/components/Floor.vue";
import Elevator from "@/components/Elevator.vue";
import Queue from "../libraries/Queue";
import {reactive, VueElement} from "vue";
import type {IElevatorState} from "@/configurations/elevator";

const floorsCount = 4;
const elevatorsCount = 1;
const elevators = [...Array(elevatorsCount).keys()];
const floors = [...Array(floorsCount).keys()];


const callElevator = (floor: number) => {
  console.log("call elevator");
  elevatorCallQueue.enqueue(floor);
  elevatorScheduler();
}

const updateElevatorStatus = (elevatorNumber: number) => {
  elevatorsStates[elevatorNumber].inWork = false;
  elevatorsStates[elevatorNumber].currFloorBeforeStart = elevatorsStates[elevatorNumber].target;
  console.log('work done');
}

const elevatorScheduler = () => {
  console.log("START SCHEDULER")
  elevatorsStates.forEach((state, index) => {
    if (!state.inWork && elevatorCallQueue.getLength()) {
      console.log(elevatorsStates[index]);
      console.log("set task to elevator");
      elevatorsStates.splice(index, 1,
        {
          target: elevatorCallQueue.dequeue(),
          inWork: true,
          currFloorBeforeStart: elevatorsStates[index].currFloorBeforeStart
        } as IElevatorState);
    }
  })
}

const elevatorCallQueue: Queue = reactive(new Queue());
const elevatorsStates: IElevatorState[] = reactive(new Array(elevatorsCount)
  .fill({target: 0, inWork: false, currFloorBeforeStart: floorsCount} as IElevatorState));

</script>

<style scoped lang="scss">
.skyscraper {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;

  &__elevators {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  &__floors {
    display: flex;
    flex-direction: column-reverse;
  }
}

</style>
