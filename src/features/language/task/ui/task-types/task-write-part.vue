<script setup lang="ts">
import type { TaskWritePart } from "@/entities/language"

type Props = {
  data: TaskWritePart
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
