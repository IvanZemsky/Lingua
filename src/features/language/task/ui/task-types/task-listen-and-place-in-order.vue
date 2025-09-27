<script setup lang="ts">
import {
  getWordsAsText,
  parsePunctuation,
  type WordBase,
  type TaskListenAndPlaceInOrder,
} from "@/entities/language"
import { TASK_TYPES_TITLES } from "./index"
import VoiceoverBlock from "../voiceover/voiceover-block.vue"
import { UiButton } from "@/shared/ui"
import { computed, ref } from "vue"

type Props = {
  data: TaskListenAndPlaceInOrder
}

defineEmits<{
  (e: "play-audio", text: string): void
}>()

const { data } = defineProps<Props>()

const answer = defineModel("answer", {
  type: String,
  required: true,
})

const text = getWordsAsText(parsePunctuation(data.text))

const wordsToSelect = ref<WordBase[]>(data.text)

const selectedWords = computed(() =>
  answer.value.split(" ").filter((w) => w.length > 0),
)

function selectWord(word: WordBase) {
  answer.value += ` ${word.text}`
  wordsToSelect.value = wordsToSelect.value.filter((w) => w.id !== word.id)
}

function deselectWord(text: string) {
  const word = data.text.find((w) => w.text === text)
  if (!word) return
  answer.value = answer.value.replace(` ${text}`, "")
  wordsToSelect.value.push(word)
}
</script>

<template>
  <div class="flex flex-col gap-4 h-full">
    <h1 class="font-bold text-[25px] font-montserrat">
      {{ TASK_TYPES_TITLES[data.type] }}
    </h1>

    <div class="flex items-senter gap-4">
      <VoiceoverBlock @play-audio="$emit('play-audio', text)" :text="text" />
    </div>

    <div class="grow-1 border-2 border-2-gray-300 p-2 rounded-2xl">
      <div class="flex flex-wrap gap-2 justify-center">
        <UiButton
          v-for="(word, i) in selectedWords"
          :key="i"
          variant="secondary"
          @click="deselectWord(word)"
        >
          {{ word }}
        </UiButton>
      </div>
    </div>

    <div class="border-2 border-2-gray-300 p-2 rounded-2xl min-h-[56px]">
      <div class="flex flex-wrap gap-2 justify-center">
        <UiButton
          v-for="word in wordsToSelect"
          :key="word.id"
          variant="secondary"
          @click="selectWord(word)"
        >
          {{ word.text }}
        </UiButton>
      </div>
    </div>
  </div>
</template>
