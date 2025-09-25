<script setup lang="ts">
import type { TaskTranslateAll } from "@/entities/language"

type Props = {
  data: TaskTranslateAll
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
