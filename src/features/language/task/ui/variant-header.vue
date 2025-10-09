<script setup lang="ts">
import { UiProgress } from "@/shared/ui"
import { XIcon } from "lucide-vue-next"
import { computed, toRefs } from "vue"
import { useCourseProgressStore } from "../../model/progress/store"

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
  <div class="flex items-center gap-4 w-full">
    <RouterLink :to="`/sections/${progress.section}`">
      <XIcon />
    </RouterLink>
    <UiProgress class="h-4" v-model="variantProgress" />
  </div>
</template>
