<script setup lang="ts">
import type { TaskListenAndPlaceInOrder } from "@/entities/language"

type Props = {
  data: TaskListenAndPlaceInOrder
}

defineProps<Props>()

const answer = defineModel("answer", {
  type: String,
  required: true,
})
</script>

<template>
  <div></div>
</template>
