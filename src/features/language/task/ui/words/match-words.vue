<script setup lang="ts">
import type { TextWord } from "@/entities/language"
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

function isTranslationSelectedCorrectly(word: string) {
  return matches.value[word] === result[word]
}

function isTranslationSelectedIncorrectly(word: string) {
  return matches.value[word] && matches.value[word] !== result[word]
}

function isSelected(word: string) {
  return selected.value === word
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
          isSelected(translation) && 'bg-gray-400',
          isTranslationSelectedCorrectly(translation) && 'border-green-400',
          isTranslationSelectedIncorrectly(translation) && 'border-red-400',
        ]"
        :disabled="isTranslationSelectedCorrectly(translation)"
      >
        {{ translation }}
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
          matchesHasWord(word)
            ? isWordSelectedCorrectly(word)
              ? 'border-green-400'
              : 'border-red-400'
            : '',
        ]"
        :disabled="matchesHasWord(word) && isWordSelectedCorrectly(word)"
      >
        {{ word }}
      </UiButton>
    </div>
  </div>
</template>
