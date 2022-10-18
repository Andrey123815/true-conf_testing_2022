<template>
  <div class="elevator">
    <div class="elevator__shaft">
      <div class="elevator__cabin" :style="animationStyles">
        <div class="cabin__floor-panel">
          <div class="floor-panel__move-directions">
            <IconArrowUp
              :active="elevatorState !== DOOR_OPEN_STATE && targetFloor - currentFloor > 0"/>
            <IconArrowDown
              :active="elevatorState !== DOOR_OPEN_STATE && targetFloor - currentFloor < 0"/>
          </div>
          <span class="floor-panel__target-floor">01</span>
        </div>
        <span class="cabin__door-status">
          OPEN
        </span>
        <div class="cabin__special-block">
          <button>Emergency</button>
          <button>targetFloor</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconArrowUp from "@/components/icons/IconArrowUp.vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import {onBeforeMount, onBeforeUnmount, onUpdated, reactive, ref, toRefs} from "vue";
import type {IFloor, TElevatorState} from "@/configurations/elevator";
import {DOOR_OPEN_STATE, FREE_STATE, WORK_STATE} from "@/configurations/elevator";
import type {IAnimationStyle} from "@/configurations/animationStyles";
import {defaultAnimationStyle, generateAnimation} from "@/configurations/animationStyles";

const EMPTY_TIMER: number = -1;

interface Props {
  elevatorNumber: number,
  targetFloor: IFloor,
}

const emit = defineEmits<{
  (e: 'free-elevator', elevatorNumber: number, currentFloor: number): void
}>();


const animation = (animationStyles) => {
  if (timerID.value !== EMPTY_TIMER) {
    return;
  }

  const floorDiff = targetFloor.value - currentFloor.value;

  generateAnimation(animationStyles, floorDiff, currentFloor.value);

  console.log("START ANIMATION", timerID.value);

  timerID.value = setTimeout(() => {
    elevatorState.value = DOOR_OPEN_STATE;

    currentFloor.value = targetFloor.value;

    setTimeout(() => {
      elevatorState.value = FREE_STATE;
      console.log("EMIIIT")
      emit('free-elevator', elevatorNumber.value, currentFloor.value);
      clearTimeout(timerID.value);
      timerID.value = EMPTY_TIMER;
    }, 3000);
  }, Math.abs(floorDiff) * 1000);
}


const props = defineProps<Props>();

const {elevatorNumber, targetFloor} = toRefs(props);
const elevatorState = ref<TElevatorState>(WORK_STATE);
const currentFloor = ref<number>(0);
const animationStyles = reactive<IAnimationStyle>(defaultAnimationStyle);
const timerID = ref<number>(EMPTY_TIMER);

onUpdated(() => animation(animationStyles));

// onBeforeUnmount(() => {
//   localStorage.setItem('elevator' + elevatorNumber, `${currentFloor.value}`);
// });
//
// onBeforeMount(() => {
//   const savedFloorPosition: number = +localStorage.getItem('elevator' + elevatorNumber);
//   if (savedFloorPosition) {
//     currentFloor.value = savedFloorPosition;
//   }
// });
</script>

<style scoped lang="scss">
.elevator {
  &__shaft {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 152px;
    height: 100%;
    border: 1px solid gray;
  }

  &__cabin {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    box-sizing: border-box;
    width: 150px;
    height: 200px;
    border: 5px;
    background: peachpuff;
    padding: 10px 20px;
  }
}

.cabin {
  &__floor-panel {
    display: inline-block;
    border-radius: 5px;
    background: #065F46;
  }

  &__door-status {
    color: green;
    font-size: 20px;
  }
}

.floor-panel {
  &__move-directions {
    font-size: 18px;
  }

  &__target-floor {
    font-size: 18px;
    color: white;
  }
}
</style>
