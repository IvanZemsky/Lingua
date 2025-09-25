<script setup lang="ts">
import { parsePunctuation, type TaskTranslateAll } from "@/entities/language"
import TaskWord from "../task-word.vue"
import { UiTextarea } from "@/shared/ui"
import { TASK_TYPES_TITLES } from "."
import { useSpeechStore } from "@/features/language/voiceover"

type Props = {
  data: TaskTranslateAll
}

const { data } = defineProps<Props>()

const currentTaskNumber = defineModel("currentTaskNumber", {
  type: Number,
  required: true,
})

const speech = useSpeechStore()

const parsedWords = parsePunctuation(data.text)
</script>

<template>
  <div class="flex flex-col gap-4 h-full">
    <h1 class="font-bold text-[25px]">{{ TASK_TYPES_TITLES[data.type] }}</h1>

    <p class="flex flex-wrap gap-1 text-[18px]">
      <TaskWord
        v-for="word in parsedWords"
        :key="word.id"
        :word="word"
        @click="speech.speak(word.text)"
      />
    </p>

    <UiTextarea placeholder="Translation" class="mt-auto h-30 resize-none" />
  </div>
</template>
