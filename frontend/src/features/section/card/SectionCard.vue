<script setup lang="ts">
import type { Section } from '@/entities/language';
import { UiCard, CardHeader, CardContent, UiProgress, CardTitle } from '@/shared/ui'
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

type Props = {
  data: Section
}

const { data } = defineProps<Props>()

const progress = ref(data.progress)

</script>

<template>
  <UiCard :as="RouterLink" to="/" class="gap-2" hoverable>
    <CardHeader>
      <CardTitle class="font-bold text-2xl text-gray-800"> {{ data.title }}</CardTitle>
    </CardHeader>
    <CardContent>
      <UiProgress class="h-4" v-model="progress" />
    </CardContent>
  </UiCard>
</template>
