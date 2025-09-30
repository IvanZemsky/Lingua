<script setup lang="ts">
import type { GuidebookContentImage } from "@/entities/language"

type Props = {
  data: GuidebookContentImage
}

defineProps<Props>()
</script>

<template>
  <img
    :src="data.url"
    :alt="data.alt"
    class="w-full rounded-xl"
    loading="lazy"
  />
</template>
