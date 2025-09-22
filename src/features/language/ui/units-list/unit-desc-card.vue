<script setup lang="ts">
import { UiCard, CardHeader, CardContent, CardTitle } from "@/shared/ui"
import { BookText } from "lucide-vue-next"

type Props = {
  title: string
  subtitle: string
}

const props = defineProps<Props>()
</script>

<template>
  <ui-card class="flex-row gap-0 py-0">
    <card-header class="gap-0 flex-grow p-4">
      <card-title class="uppercase font-semibold text-gray-600">
        {{ props.title }}</card-title
      >
      <p class="font-bold text-lg text-gray-800">{{ props.subtitle }}</p>
    </card-header>

    <card-content class="flex items-center p-0 border-l-2 border-gray-200">
      <button class="flex items-center justify-center w-16 h-full">
        <BookText class="w-8 h-8 stroke-gray-800" />
      </button>
    </card-content>
  </ui-card>
</template>
