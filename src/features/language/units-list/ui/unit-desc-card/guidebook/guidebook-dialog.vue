<script setup lang="ts">
import { useGetGuidebookByUnitAndSectionNumberQuery } from "@/entities/language"
import {
  UiButton,
  UiDialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "@/shared/ui"
import { computed, ref, watch } from "vue"
import { GUIDEBOOK_CONTENT_UI } from "../../../model/guidebook"

type Props = {
  unitNumber: number
  sectionNumber: number
}

const props = defineProps<Props>()
const isOpen = ref(false)

const dto = () => ({
  unitNumber: props.unitNumber,
  sectionNumber: props.sectionNumber,
})

const { data, error, isFetching, execute } =
  useGetGuidebookByUnitAndSectionNumberQuery(dto, {
    immediate: false,
    updateDataOnError: true,
  })

const title = computed(() => {
  if (isFetching.value) return "Loading..."
  if (error.value || (!data.value && !isFetching.value)) {
    return "An error occurred"
  }
  return data.value?.title
})

watch(isOpen, (open) => {
  if (open) execute()
})
</script>

<template>
  <UiDialog v-model:open="isOpen">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent class="z-90">
      <p v-if="isFetching">Loading...</p>

      <DialogTitle>
        {{ title }}
      </DialogTitle>

      <div v-if="data" class="flex flex-col gap-4">
        <template v-for="item in data.content">
          <component
            v-if="item.type in GUIDEBOOK_CONTENT_UI"
            :key="item.id"
            :is="GUIDEBOOK_CONTENT_UI[item.type]"
            :data="item"
          />
        </template>
      </div>
      <DialogFooter>
        <div class="flex gap-4 items-center justify-center">
          <DialogClose as-child>
            <UiButton>Close</UiButton>
          </DialogClose>
        </div>
      </DialogFooter>
    </DialogContent>
  </UiDialog>
</template>
