<script setup lang="ts">
import type { WordImg } from "@/entities/language"
import TaskWordCard from "../words/task-word-card.vue"

const { words } = defineProps<{ words: WordImg[] }>()

const answer = defineModel<string>({
  required: true,
})

function handleCardClick(text: string) {
  answer.value = text
}
</script>

<template>
  <div class="grid grid-cols-2 grid-rows-2 gap-3 my-auto">
    <TaskWordCard
      v-for="word in words"
      :key="word.id"
      :word="word"
      :is-selected="word.text === answer"
      @click="handleCardClick(word.text)"
    />
  </div>
</template>
