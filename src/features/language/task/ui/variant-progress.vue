<script setup lang="ts">
import { UiProgress } from "@/shared/ui"
import { X } from "lucide-vue-next"
import { ref } from "vue"

const progress = ref(0)
</script>

<template>
  <div class="flex items-center gap-4">
    <button>
      <X />
    </button>
    <UiProgress class="h-4" v-model="progress" />
  </div>
</template>
