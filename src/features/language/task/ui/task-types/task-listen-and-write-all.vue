<script setup lang="ts">
import type { TaskListenAndWriteAll } from "@/entities/language"

type Props = {
  data: TaskListenAndWriteAll
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
