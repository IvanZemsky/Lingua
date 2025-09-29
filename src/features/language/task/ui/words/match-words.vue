<script setup lang="ts">
import { parseWordText, type TextWord } from "@/entities/language"
import { UiButton } from "@/shared/ui"
import { shuffle } from "@/shared/lib"
import { computed } from "vue"
import { ref } from "vue"

const { words, result } = defineProps<{
  words: TextWord[]
  result: Record<string, string>
}>()

const matches = defineModel<Record<string, string>>({ required: true })

const selected = ref<string>("")

const shuffledWords = computed(() => {
  return shuffle(words.map((word) => word.text))
})

const translations = computed(() => {
  return words.map((word) => word.translations[0])
})

function toggleSelectedWord(word: string) {
  if (selected.value === word) {
    selected.value = ""
  } else {
    selected.value = word
  }
}

function selectTranslation(translation: string) {
  if (selected.value) {
    matches.value[selected.value] = translation
    selected.value = ""
  }
}

type WordStatus = "selected" | "correct" | "incorrect" | "default"

function getTranslationStatus(translation: string): WordStatus {
  if (selected.value === translation) return "selected"
  if (matches.value[translation] === result[translation]) return "correct"
  if (matches.value[translation]) return "incorrect"

  return "default"
}

function getWordStatus(word: string) {
  if (matchesHasWord(word) && isWordSelectedCorrectly(word)) return "correct"
  if (matchesHasWord(word) && !isWordSelectedCorrectly(word)) return "incorrect"
  return "default"
}

function isWordSelectedCorrectly(translation: string) {
  for (const [key, value] of Object.entries(matches.value)) {
    if (value === translation) {
      return value === result[key]
    }
  }
}

function matchesHasWord(translation: string) {
  return Object.values(matches.value).includes(translation)
}

const btnStyles = {
  default: "",
  selected: "bg-gray-200",
  correct: "border-green-400",
  incorrect: "border-red-400",
}
</script>

<template>
  <div class="flex gap-2 justify-center my-auto">
    <div class="grow-1 flex flex-col gap-2">
      <UiButton
        v-for="translation in translations"
        :key="translation"
        variant="outline"
        @click="toggleSelectedWord(translation)"
        size="lg"
        :class="[
          `text-xl w-full h-15 capitalize`,
          btnStyles[getTranslationStatus(translation)],
        ]"
        :disabled="getTranslationStatus(translation) === 'correct'"
      >
        {{ parseWordText(translation) }}
      </UiButton>
    </div>
    <div class="grow-1 flex flex-col gap-2">
      <UiButton
        v-for="word in shuffledWords"
        :key="word"
        variant="outline"
        @click="selectTranslation(word)"
        size="lg"
        :class="[
          `text-xl w-full h-15 capitalize`,
          btnStyles[getWordStatus(word)],
        ]"
        :disabled="getWordStatus(word) === 'correct'"
      >
        {{ parseWordText(word) }}
      </UiButton>
    </div>
  </div>
</template>
