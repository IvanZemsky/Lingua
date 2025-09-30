<script setup lang="ts">
import type { GuidebookContentParagraph } from '@/entities/language';

type Props = {
  data: GuidebookContentParagraph
}

defineProps<Props>()
</script>

<template>
  <p class="text-md">{{ data.text }}</p>
</template>


