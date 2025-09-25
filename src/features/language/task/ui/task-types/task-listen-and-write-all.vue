<script setup lang="ts">
import {
  type TaskListenAndWriteAll,
  getWordsAsText,
  parsePunctuation,
} from "@/entities/language"
import { TASK_TYPES_TITLES } from "./index"
import { UiTextarea } from "@/shared/ui"
import VoiceoverBtn from "../voiceover-btn.vue"

type Props = {
  data: TaskListenAndWriteAll
}

const { data } = defineProps<Props>()

defineEmits<{
  (e: "play-audio", text: string): void
}>()

const answer = defineModel("answer", {
  type: String,
  required: true,
})

const text = getWordsAsText(parsePunctuation(data.text))
</script>

<template>
  <div class="flex flex-col gap-4 h-full">
    <h1 class="font-bold text-[25px]">{{ TASK_TYPES_TITLES[data.type] }}</h1>

    <div class="flex items-senter gap-4 p-4">
      <VoiceoverBtn @play-audio="$emit('play-audio', text)" />
    </div>

    <UiTextarea
      placeholder="Text"
      class="mt-auto h-30 resize-none"
      v-model="answer"
    />
  </div>
</template>
