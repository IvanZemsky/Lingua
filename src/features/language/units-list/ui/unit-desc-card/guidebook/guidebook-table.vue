<script setup lang="ts">
import type { GuidebookContentTable } from "@/entities/language"
import {
  UiTable,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui"

type Props = {
  data: GuidebookContentTable
}

defineProps<Props>()
</script>

<template>
  <UiTable>
    <TableCaption>{{ data.caption }}</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead v-for="(header, i) in data.headers" :key="i">
          {{ header }}
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(row, i) in data.rows" :key="i">
        <TableCell v-for="(cell, j) in row" :key="j" class="font-medium">
          {{ cell }}
        </TableCell>
      </TableRow>
    </TableBody>
  </UiTable>
</template>
