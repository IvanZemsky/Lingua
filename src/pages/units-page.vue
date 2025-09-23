<script setup lang="ts">
import { useGetUnitsBySectionNumberQuery } from "@/entities/language"
import { useRoute } from "vue-router"
import { UnitsList } from "@/features/language"

const route = useRoute()
const sectionNumber = parseInt(route.params.sectionNumber as string)

const { data, isFetching, error } =
  useGetUnitsBySectionNumberQuery(sectionNumber)
</script>

<template>
  <div class="relative pt-25">
    <UnitsList
      :sectionNumber="sectionNumber"
      :data="data"
      :is-fetching="isFetching"
      :error="error"
    />
  </div>
</template>
