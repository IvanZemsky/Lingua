<script setup lang="ts">
import type { TaskPlaceInOrder } from "@/entities/language"

type Props = {
  data: TaskPlaceInOrder
}

defineProps<Props>()

const currentTaskNumber = defineModel("currentTaskNumber", {
  type: Number,
  required: true,
})
</script>

<template>
  <div></div>
</template>
