<script setup lang="ts">
import type { Word } from "@/entities/language"
import {
  UiPopover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/ui"

type Props = {
  word: Word
}

defineProps<Props>()
</script>

<template>
  <UiPopover>
    <PopoverTrigger as-child>
      <span
        class="inline-block border-b-3 border-gray-200 border-dotted font-semibold text-gray-700 cursor-pointer"
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
