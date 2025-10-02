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
  <ui-card class="relative max-w-200 py-0 mx-auto flex-row gap-0 z-40">
    <card-header class="gap-0 flex-grow p-4">
      <card-title class="uppercase font-semibold text-gray-600">
        Section {{ sectionNumber }}, Unit {{ unitNumber }}
      </card-title>
      <p class="font-bold text-lg text-gray-800">{{ subtitle }}</p>
    </card-header>

    <GuidebookDialog :section-number="sectionNumber" :unit-number="unitNumber">
      <card-content class="flex items-center p-0 border-l-2 border-gray-200">
        <button class="flex items-center justify-center gap-2 h-full p-3">
          <BookText class="w-8 h-8 stroke-gray-800" />
          <span class="hidden md:inline text-md font-medium uppercase">
            Guidebook
          </span>
        </button>
      </card-content>
    </GuidebookDialog>
  </ui-card>
</template>
