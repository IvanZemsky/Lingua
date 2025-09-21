<script setup lang="ts">
import { SectionCard } from '@/features/section/card';

</script>

<template>
  <div class="flex flex-col gap-4">
    <SectionCard :data="{ id: '1', title: 'Section 1', progress: 50 }" />
  </div>
</template>
