<script setup lang="ts">
import type { WordBase } from "@/entities/language"
import { ref, computed } from "vue"
import { UiButton } from "@/shared/ui"

const { text } = defineProps<{
  text: WordBase[]
}>()

const answer = defineModel<string>({ required: true })

// to composable
const wordsToSelect = ref<WordBase[]>(text)

const selectedWords = computed(() =>
  answer.value.split(" ").filter((w) => w.length > 0),
)

function selectWord(word: WordBase) {
  answer.value += ` ${word.text}`
  wordsToSelect.value = wordsToSelect.value.filter((w) => w.id !== word.id)
}

function deselectWord(word: string) {
  const deselected = text.find((w) => w.text === word)
  if (!deselected) return
  answer.value = answer.value.replace(` ${word}`, "")
  wordsToSelect.value.push(deselected)
}
</script>

<template>
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
</template>
