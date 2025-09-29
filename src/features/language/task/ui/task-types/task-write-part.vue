<script setup lang="ts">
import {
  parsePunctuation,
  type TaskWritePart,
  isWordInput,
} from "@/entities/language"
import { TASK_TYPES_TITLES } from "../../model/index"
import TaskWord from "../words/task-word.vue"
import { UiInput } from "@/shared/ui"
import { onMounted, ref } from "vue"

type Props = {
  data: TaskWritePart
}

const { data } = defineProps<Props>()

defineEmits<{
  (e: "play-audio", text: string): void
}>()

const answer = defineModel("answer", { type: String, required: true })

const parsedWords = parsePunctuation(data.text)
const answerParts = ref<string[]>([])

const letterWidthPx = 15

function updateInput(index: number, value: string) {
  answerParts.value[index] = value
  answer.value = answerParts.value.join(" ")
}

onMounted(() => {
  answerParts.value = parsedWords.map((word) =>
    isWordInput(word) ? "" : word.text,
  )
  answer.value = answerParts.value.join(" ")
})
</script>

<template>
  <div class="flex flex-col gap-4 grow-1">
    <h1 class="font-bold text-[25px] font-montserrat">
      {{ TASK_TYPES_TITLES[data.type] }}
    </h1>

    <p class="text-lg">{{ data.translation }}</p>

    <p class="flex flex-wrap items-center gap-1 text-[18px]">
      <template v-for="(word, i) in parsedWords" :key="word.id">
        <TaskWord
          v-if="!isWordInput(word)"
          :word="word"
          @click="$emit('play-audio', word.text)"
        />
        <UiInput
          v-else
          v-model="answerParts[i]"
          @input="updateInput(i, $event.target.value)"
          class="mx-1 py-1 px-2 min-w-[45px]"
          :style="{ width: `${word.text.length * letterWidthPx}px` }"
        />
      </template>
    </p>
  </div>
</template>
