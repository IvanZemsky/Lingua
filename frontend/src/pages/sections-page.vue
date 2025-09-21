<script setup lang="ts">
import { UnitDescCard, SectionCard } from '@/features/language';

const data = {
  id: '1',
  title: 'Section 1',
  progress: 50
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <SectionCard :data="data" :to="`/sections/${data.id}`" />
    <UnitDescCard title="Section 1, Unit 1" subtitle="Use basic phrases" />
  </div>
</template>
