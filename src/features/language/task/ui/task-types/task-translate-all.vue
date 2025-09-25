<script setup lang="ts">
import type { TaskTranslateAll } from "@/entities/language"
import TaskWord from "../task-word.vue"
import { UiTextarea } from "@/shared/ui"
import { TASK_TYPES_TITLES } from "."

type Props = {
  data: TaskTranslateAll
}

const { data } = defineProps<Props>()

const parsedWords = data.text
  .map((word, i, array) => {
    if (word.translations.length === 0) return

    const nextItem = array[i + 1]
    if (!nextItem) {
      return word
    }

    const isNotWord = nextItem.translations.length === 0
    if (isNotWord) {
      return {
        ...word,
        text: word.text + nextItem.text,
      }
    }
  })
  .filter((w) => w !== undefined)
</script>

<template>
  <div class="flex flex-col gap-4 h-full">
    <h1 class="font-bold text-[25px]">{{ TASK_TYPES_TITLES[data.type] }}</h1>

    <p class="flex flex-wrap gap-1 text-[18px]">
      <TaskWord v-for="word in parsedWords" :key="word.id" :word="word" />
    </p>

    <UiTextarea placeholder="Translation" class="mt-auto h-30"/>
  </div>
</template>
