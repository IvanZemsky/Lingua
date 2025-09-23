<script setup lang="ts">
import { MOCK_COURSE } from "@/entities/language"
import { useRoute } from "vue-router"
import { UnitsList } from "@/features/language"

const route = useRoute()
const sectionNumber = parseInt(route.params.sectionNumber as string)


// const section = MOCK_COURSE.SECTIONS[sectionNumber]
const units = MOCK_COURSE.UNITS.filter(
  (unit) => unit.sectionNumber === sectionNumber,
)
</script>

<template>
  <div class="relative pt-25">
    <UnitsList :sectionNumber="sectionNumber" :data="units" />
  </div>
</template>
