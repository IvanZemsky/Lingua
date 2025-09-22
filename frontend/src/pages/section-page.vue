<script setup lang="ts">
import LessonBtn from '@/features/language/ui/lesson-btn.vue';
import UnitDescCard from '@/features/language/ui/unit-desc-card.vue'
</script>

<template>
  <div class="relative pt-25">
    <UnitDescCard title="Section 1, Unit 1" subtitle="Use basic phrases" class="fixed top-5 left-4 right-4" />

    <div class="flex flex-col items-center gap-8">
      <LessonBtn variant="completed" />
      <LessonBtn variant="active" />
      <LessonBtn variant="unreached" />

    </div>
  </div>
</template>
