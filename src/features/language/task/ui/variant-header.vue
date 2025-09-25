<script setup lang="ts">
import { UiProgress } from "@/shared/ui"
import { X } from "lucide-vue-next"
import { computed, toRefs } from "vue"
import { useCourseProgressStore } from "../../progress"

type Props = {
  totalTasks: number
  currentTaskNumber: number
}

const { totalTasks, currentTaskNumber } = defineProps<Props>()

const variantProgress = computed(
  () => ((currentTaskNumber - 1) / totalTasks) * 100,
)

const { progress } = toRefs(useCourseProgressStore())
</script>

<template>
  <div class="flex items-center gap-4">
    <RouterLink :to="`/sections/${progress.section}`">
      <X />
    </RouterLink>
    <UiProgress class="h-4" v-model="variantProgress" />
  </div>
</template>
