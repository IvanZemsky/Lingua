<script setup lang="ts">
import {
  UiButton,
  UiDialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "@/shared/ui"
import { useCourseProgressStore } from "../../model/progress/store"

const progress = useCourseProgressStore()
</script>

<template>
  <UiDialog>
    <DialogTrigger as-child>
      <UiButton size="sm">Reset progress</UiButton>
    </DialogTrigger>
    <DialogContent class="z-90">
      <DialogTitle>Are you sure you want to reset progress?</DialogTitle>
      <DialogFooter>
        <div class="flex gap-4 items-center justify-center">
          <DialogClose as-child>
            <UiButton>Cancel</UiButton>
          </DialogClose>
          <DialogClose as-child>
            <UiButton
              type="submit"
              variant="destructive"
              @click="progress.reset"
            >
              Yes
            </UiButton>
          </DialogClose>
        </div>
      </DialogFooter>
    </DialogContent>
  </UiDialog>
</template>
