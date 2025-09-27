<script setup lang="ts">
import {
  getWordsAsText,
  parsePunctuation,
  type TaskListenAndPlaceInOrder,
} from "@/entities/language"
import { TASK_TYPES_TITLES } from "./index"
import VoiceoverBlock from "../voiceover/voiceover-block.vue"
import TaskSelectWords from "../task-select-words.vue"

type Props = {
  data: TaskListenAndPlaceInOrder
}

defineEmits<{
  (e: "play-audio", text: string): void
}>()

const { data } = defineProps<Props>()

const answer = defineModel<string>("answer", { required: true })

const text = getWordsAsText(parsePunctuation(data.text))
</script>

<template>
  <div class="flex flex-col gap-4 grow-1">
    <h1 class="font-bold text-[25px] font-montserrat">
      {{ TASK_TYPES_TITLES[data.type] }}
    </h1>

    <div class="flex items-senter gap-4">
      <VoiceoverBlock @play-audio="$emit('play-audio', text)" :text="text" />
    </div>

    <TaskSelectWords v-model="answer" :text="data.text" />
  </div>
</template>
