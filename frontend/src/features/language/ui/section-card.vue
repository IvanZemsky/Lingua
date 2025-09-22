<script setup lang="ts">
import type { Section } from "@/entities/language"
import {
  UiCard,
  CardHeader,
  CardContent,
  UiProgress,
  CardTitle,
} from "@/shared/ui"
import { ref } from "vue"
import { RouterLink } from "vue-router"

type Props = {
  data: Section
  to: string
}

const { data, to } = defineProps<Props>()

const progress = ref(data.progress)
</script>

<template>
  <ui-card :as="RouterLink" :to="to" class="gap-2" hoverable>
    <card-header>
      <card-title class="font-bold text-2xl text-gray-800">
        {{ data.title }}</card-title
      >
    </card-header>
    <card-content>
      <ui-progress class="h-4" v-model="progress" />
    </card-content>
  </ui-card>
</template>
