<template>
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.985 21.5041L20.0015 10.5041C20.0019 9.83413 19.6722 9.23393 19.1624 8.87363L13.005 4.5L6.84244 8.86637C6.33222 9.22607 6.00187 9.82587 6.00148 10.4959L6.00499 21.4959L12.9978 16.66L19.985 21.5041Z"
          :fill="active ? 'yellow' : '#323232'"/>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  active: boolean
}

const {active} = defineProps<Props>();
</script>
