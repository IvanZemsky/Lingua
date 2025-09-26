<script setup lang="ts">
import { parsePunctuation, type TaskTranslateAll } from "@/entities/language"
import TaskWord from "../task-word.vue"
import { UiTextarea } from "@/shared/ui"
import { Volume2Icon } from "lucide-vue-next"
import { TASK_TYPES_TITLES } from "."

type Props = {
  data: TaskTranslateAll
}

const { data } = defineProps<Props>()

defineEmits<{
  (e: "play-audio", text: string): void
}>()

const answer = defineModel("answer", {
  type: String,
  required: true,
})

const parsedWords = parsePunctuation(data.text)
</script>

<template>
  <div class="flex flex-col gap-4 h-full">
    <h1 class="font-bold text-[25px] font-montserrat">{{ TASK_TYPES_TITLES[data.type] }}</h1>

    <p class="flex flex-wrap items-center gap-1 text-[18px]">
      <button
        class="mr-2"
        @click="
          $emit('play-audio', parsedWords.map((word) => word.text).join(' '))
        "
      >
        <Volume2Icon class="w-7 h-7"/>
      </button>
      <TaskWord
        v-for="word in parsedWords"
        :key="word.id"
        :word="word"
        @click="$emit('play-audio', word.text)"
      />
    </p>

    <UiTextarea
      placeholder="Translation"
      class="grow-1 h-30 resize-none border-2 border-gray-200"
      v-model="answer"
    />
  </div>
</template>
