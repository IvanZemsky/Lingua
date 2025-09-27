<script setup lang="ts">
import {
  type TaskListenAndWriteAll,
  getWordsAsText,
  parsePunctuation,
} from "@/entities/language"
import { TASK_TYPES_TITLES } from "./index"
import { UiTextarea } from "@/shared/ui"
import VoiceoverBlock from "../voiceover/voiceover-block.vue"
import type { UseSpeechSynthesisOptions } from "@vueuse/core"

type Props = {
  data: TaskListenAndWriteAll
}

const { data } = defineProps<Props>()

defineEmits<{
  (e: "play-audio", text: string, options?: UseSpeechSynthesisOptions): void
}>()

const answer = defineModel("answer", {
  type: String,
  required: true,
})

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

    <UiTextarea
      placeholder="Text"
      class="grow-2 h-30 resize-none border-2 border-gray-200"
      v-model="answer"
    />
  </div>
</template>
