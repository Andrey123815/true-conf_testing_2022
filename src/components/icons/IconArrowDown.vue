<template>
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.05379 4.46418L5.98724 15.464C5.9838 16.134 6.31071 16.7357 6.81885 17.0983L12.9563 21.4999L19.1387 17.1616C19.6505 16.8042 19.9836 16.2059 19.9871 15.5359L20.0336 4.53604L13.0188 9.34005L6.05379 4.46418Z"
          :fill="active ? 'yellow' : '#323232'"/>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  active: boolean
}

const {active} = defineProps<Props>();
</script>
