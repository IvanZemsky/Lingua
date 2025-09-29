<script setup lang="ts">
import type { TextWord } from "@/entities/language"
import { UiPopover, PopoverContent, PopoverTrigger } from "@/shared/ui"

type Props = {
  word: TextWord
}

defineProps<Props>()

defineEmits<{
  (e: "click", word: string): void
}>()
</script>

<template>
  <UiPopover>
    <PopoverTrigger as-child>
      <span
        @click="$emit('click', word.text)"
        class="inline-block border-b-3 border-gray-200 border-dotted font-semibold text-gray-700 cursor-pointer hover:text-gray-900"
      >
        {{ word.text }}
      </span>
    </PopoverTrigger>

    <PopoverContent class="min-w-0 w-auto">
      <div class="flex flex-col gap-2">
        <div v-for="(translation, i) in word.translations" :key="i">
          {{ translation }}
        </div>
      </div>
    </PopoverContent>
  </UiPopover>
</template>
