<script setup lang="ts">
import type { TaskPlaceInOrder } from "@/entities/language"

type Props = {
  data: TaskPlaceInOrder
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
