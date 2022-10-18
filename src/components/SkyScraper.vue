<template>
  <main class="skyscraper">
    <section class="skyscraper__elevators">
      <Elevator
        v-for="elevatorNumber in elevators"
        :key="elevatorNumber"
        :elevatorNumber="elevatorNumber"
        :targetFloor="elevatorsCalls[elevatorNumber]"
        @free-elevator="
          updateElevatorStatus(elevatorNumber, elevatorsCalls[elevatorNumber])
        "
      />
    </section>
    <section class="skyscraper__floors">
      <Floor
        v-for="floor in floors"
        :key="floor"
        :floorNumber="floor"
        @call-elevator="callElevator"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import Floor from "@/components/Floor.vue";
import Elevator from "@/components/Elevator.vue";
import Queue from "../libraries/Queue";
import {reactive} from "vue";
import type {IElevatorStatus, IFloor} from "@/configurations/elevator";

const floorsCount = 4;
const elevatorsCount = 1;
const elevators = [...Array(elevatorsCount).keys()];
const floors = [...Array(floorsCount).keys()];

const callElevator = (floor: number) => {
  elevatorCallQueue.enqueue(floor);
  elevatorScheduler();
};

const updateElevatorStatus = (elevatorNumber: number, currentFloor: number) => {
  elevatorsStatuses[elevatorNumber].inWork = false;
  elevatorCallQueue.dequeue(currentFloor);
  elevatorScheduler();
};

const elevatorScheduler = () => {
  const allElevatorsInWork = elevatorsStatuses.reduce(
    (noFreeElevator: boolean, status) => noFreeElevator && status.inWork,
    true
  );

  for (let index = 0; index < elevatorsCount; ++index) {
    if (!elevatorCallQueue.getLength() || allElevatorsInWork) {
      break;
    }
    if (!elevatorsStatuses[index].inWork) {
      for (let floorCall of elevatorCallQueue.qu) {
        if (!elevatorsCalls.includes(floorCall as IFloor)) {
          elevatorsCalls[index] = floorCall as IFloor;
          break;
        }
      }
      elevatorsStatuses[index].inWork = true;
    }
  }
};

const elevatorCallQueue = reactive(new Queue<number>());

const elevatorsCalls: IFloor[] = reactive(
  new Array(elevatorsCount).fill(0 as IFloor)
);

const elevatorsStatuses: IElevatorStatus[] = reactive(
  new Array(elevatorsCount).fill({inWork: false} as IElevatorStatus)
);
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
