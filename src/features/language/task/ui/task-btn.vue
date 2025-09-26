<script setup lang="ts">
import { UiButton } from "@/shared/ui"
import { cva } from "class-variance-authority"

const { variant = "notChecked" } = defineProps<{
  variant: "correct" | "incorrect" | "notChecked"
}>()

defineEmits<{
  (e: "click"): void
}>()

const buttonVariants = cva(
  "relative w-full text-xl h-14 font-semibold uppercase z-2",
  {
    variants: {
      variant: {
        correct: "bg-green-600 hover:bg-green-700",
        incorrect: "bg-red-700 hover:bg-red-800",
        notChecked: "",
      },
    },
  },
)

const buttonText = {
  correct: "Next",
  incorrect: "Try again",
  notChecked: "Check",
}
</script>

<template>
  <UiButton
    size="lg"
    :class="buttonVariants({ variant })"
    @click="$emit('click')"
  >
    {{ buttonText[variant] }}
  </UiButton>
</template>
