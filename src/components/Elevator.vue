<template>
  <div class="elevator">
    <div class="elevator__shaft">
      <div class="elevator__cabin">
        <div class="cabin__floor-panel">
          <div class="floor-panel__move-directions">
            <IconArrowUp :active="false"/>
            <IconArrowDown :active="true"/>
          </div>
          <span class="floor-panel__target-floor">01</span>
        </div>
        <span class="cabin__door-status">
        Open
      </span>
        <div class="cabin__special-block">
          <button>Emergency</button>
          <button>Call</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconArrowUp from "@/components/icons/IconArrowUp.vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";

// const shaftHeight = 202 * 5;
</script>

<style scoped lang="scss">
.elevator {
  &__shaft {
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
    background: white;
  }

  &__door-status {
    color: green;
  }
}

.floor-panel {
  &__move-directions {
    font-size: 18px;
  }

  &__target-floor {
    font-size: 18px;
  }
}
</style>
