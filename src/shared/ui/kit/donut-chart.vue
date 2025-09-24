<script setup lang="ts">
type Props = {
  percentage: number
  stroke: string
}

defineProps<Props>()

</script>

<template>
  <svg viewBox="0 0 120 120">
    <circle
      cx="60"
      cy="60"
      r="50"
      stroke-width="8"
      fill="none"
      stroke-dasharray="314"
      :stroke-dashoffset="314 * (1 - percentage / 100)"
      stroke-linecap="round"
      transform="rotate(-90 60 60)"
    />
  </svg>
</template>
