<script setup lang="ts">
import { UiCard, CardContent } from "@/shared/ui"
import type { LessonResult } from "./use-result"

const { result } = defineProps<{ result: LessonResult }>()
</script>

<template>
  <div class="flex flex-col gap-4 items-center text-xl grow-1">
    <h1 class="font-montserrat text-2xl font-bold">Level finished</h1>
    <UiCard class="my-auto">
      <CardContent>
        <p>Correct: {{ result.correct }}</p>
        <p>Mistakes: {{ result.mistakes }}</p>
      </CardContent>
    </UiCard>
  </div>
</template>
