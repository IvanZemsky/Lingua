<script setup lang="ts">
import type { TaskTranslateAll } from "@/entities/language"

type Props = {
  data: TaskTranslateAll
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
