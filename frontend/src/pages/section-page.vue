<script setup lang="ts">
import { MOCK_COURSE } from "@/entities/language"
import { useRoute } from "vue-router"
import { UnitsList, UnitDescCard } from "@/features/language"

const route = useRoute()
const sectionNumber = parseFloat(route.params.sectionNumber as string)

const section = MOCK_COURSE.SECTIONS[sectionNumber]
const units = MOCK_COURSE.UNITS.filter(
  (unit) => unit.sectionNumber === sectionNumber,
)
</script>

<template>
  <div class="relative pt-25">
    <UnitDescCard
      :title="`Section ${sectionNumber}, Unit 1`"
      subtitle="Use basic phrases"
      class="fixed top-5 left-4 right-4"
    />

    <UnitsList :data="units" />
  </div>
</template>
