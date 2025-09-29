<script setup lang="ts">
import { TASK_TYPES_TITLES } from "../../model"
import type { TaskMatchWords } from "@/entities/language"
import { ref, watch } from "vue"
import MatchWords from "../words/match-words.vue"

type Props = {
  data: TaskMatchWords
}

const { data } = defineProps<Props>()

defineEmits<{
  (e: "play-audio", text: string): void
}>()

// 'word1-translation1 word2-translation2'
const answer = defineModel<string>("answer", {
  required: true,
})

const result = Object.fromEntries(
  data.result
    .split(" ")
    .map((pair) => pair.split("-"))
    .map((pair) => [pair[0], pair[1]]),
)

console.log(result)

const wordMatches = ref(
  Object.fromEntries(
    data.result
      .split(" ")
      .map((pair) => pair.split("-"))
      .map((pair) => [pair[0], ""]),
  ),
)

watch(wordMatches, () => {
  const isAllMatches = Object.keys(wordMatches.value).every(
    (key) => wordMatches.value[key] === result[key],
  )
  console.log(isAllMatches)
  if (isAllMatches) {
    answer.value = data.result
  }
}, {deep: true})
</script>

<template>
  <div class="flex flex-col gap-4 grow-1">
    <h1 class="font-bold text-[25px] font-montserrat">
      {{ TASK_TYPES_TITLES[data.type] }}
    </h1>

    <MatchWords :words="data.words" :result="result" v-model="wordMatches" />
  </div>
</template>
