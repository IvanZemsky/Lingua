<script setup lang="ts">
import { useGetAllSectionsQuery } from "@/entities/language"
import { SectionCard } from "@/features/language"

const { data, isFetching, error } = useGetAllSectionsQuery().json()
</script>

<template>
  <p v-if="isFetching" class="">Loading...</p>
  <div class="flex flex-col gap-4" v-if="data">
    <SectionCard
      v-for="card in data"
      :key="card.number"
      :data="card"
      :to="`/sections/${card.number}`"
    />
  </div>
  <p v-if="error" class="text-red-500">Error: {{ error.message }}</p>
</template>
