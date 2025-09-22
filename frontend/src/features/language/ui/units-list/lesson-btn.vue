<script setup lang="ts">
import { cn } from "@/shared/lib/css"
import { cva } from "class-variance-authority"
import { Star, Check } from "lucide-vue-next"
import { Primitive, type PrimitiveProps } from "reka-ui"
import { type HTMLAttributes } from "vue"

type Props = PrimitiveProps & {
  variant: "completed" | "unreached" | "active"
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
})

const icons = {
  completed: Check,
  unreached: Star,
  active: Star,
}

const variants = cva(
  "w-17 h-17 flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        active:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 [&_svg]:fill-primary-foreground",
        unreached:
          "bg-gray-200 text-gray-800 shadow-xs hover:bg-gray-300 [&_svg]:fill-gray-800",
        completed: "bg-gray-200 text-gray-800 shadow-xs hover:bg-gray-300",
      },
    },
  },
)
</script>

<template>
  <Primitive
    v-bind="props"
    :as-child="props.asChild"
    :as="props.as"
    :class="cn(variants({ variant: props.variant }), props.class)"
  >
    <component :is="icons[props.variant]" class="w-8 h-8 stroke-3" />
  </Primitive>
</template>
