<script setup lang="ts">
import { UiCard, CardHeader, CardContent, CardTitle } from '@/shared/ui'
import { BookText } from 'lucide-vue-next';

type Props = {
  title: string
  subtitle: string
}

const props = defineProps<Props>()

</script>

<template>
  <UiCard class="flex-row gap-0 py-0">
    <CardHeader class="gap-0 flex-grow p-4">
      <CardTitle class="uppercase font-semibold text-gray-600 "> {{ props.title }}</CardTitle>
      <p class="font-bold text-lg text-gray-800 ">{{ props.subtitle }}</p>
    </CardHeader>

    <CardContent class="flex items-center p-0 border-l-2 border-gray-200">
      <button class="flex items-center justify-center w-16 h-full">
        <BookText class="w-8 h-8 stroke-gray-800" />
      </button>
    </CardContent>

  </UiCard>
</template>
