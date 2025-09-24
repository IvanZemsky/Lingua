<script setup lang="ts">
import { useGetVariantByNumberInLessonQuery } from "@/entities/language"
import { useRoute } from "vue-router"

const route = useRoute()

const params = {
  sectionNumber: parseInt(route.params.sectionNumber as string),
  unitNumber: parseInt(route.params.unitNumber as string),
  lessonNumber: parseInt(route.params.lessonNumber as string),
  variantNumber: parseInt(route.params.variantNumber as string),
}

const { data, isFetching, error } = useGetVariantByNumberInLessonQuery(params)
</script>

<template>
  <div>Lesson page</div>
</template>

<style scoped></style>
