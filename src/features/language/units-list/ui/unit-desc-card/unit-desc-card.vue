<script setup lang="ts">
import { UiCard, CardHeader, CardContent, CardTitle } from "@/shared/ui"
import { BookText } from "lucide-vue-next"
import GuidebookDialog from "./guidebook/guidebook-dialog.vue"

type Props = {
  unitNumber: number
  sectionNumber: number
  subtitle: string
}

defineProps<Props>()
</script>

<template>
  <ui-card class="relative z-40 flex-row gap-0 py-0">
    <card-header class="gap-0 flex-grow p-4">
      <card-title class="uppercase font-semibold text-gray-600">
        Section {{ sectionNumber }}, Unit {{ unitNumber }}
      </card-title>
      <p class="font-bold text-lg text-gray-800">{{ subtitle }}</p>
    </card-header>

    <GuidebookDialog
      :section-number="sectionNumber"
      :unit-number="unitNumber"
    >
      <card-content class="flex items-center p-0 border-l-2 border-gray-200">
        <button class="flex items-center justify-center w-16 h-full">
          <BookText class="w-8 h-8 stroke-gray-800" />
        </button>
      </card-content>
    </GuidebookDialog>
  </ui-card>
</template>
