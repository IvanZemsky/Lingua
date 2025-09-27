<script setup lang="ts">
import { cn } from "@/shared/lib/css"
import { cva } from "class-variance-authority"
import { Star, Check } from "lucide-vue-next"
import { Primitive, type PrimitiveProps } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { withDefaults, defineProps } from "vue"
import DonutChart from "@/shared/ui/kit/donut-chart.vue"

type Props = PrimitiveProps & {
  status: "completed" | "unreached" | "active"
  class?: HTMLAttributes["class"]
  percentage: number
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
})

console.log(props.percentage)

const icons = {
  completed: Check,
  unreached: Star,
  active: Star,
}

const variants = cva(
  "relative w-17 h-17 flex items-center justify-center rounded-full z-3",
  {
    variants: {
      status: {
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
    :class="cn(variants({ status: props.status }), props.class)"
  >
    <component :is="icons[props.status]" class="w-8 h-8 stroke-3" />

    <donut-chart
      v-if="props.status === 'active'"
      :percentage="percentage"
      class="absolute w-24 h-24 -z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [&_circle]:stroke-slate-700"
      stroke="red-700"
    />
  </Primitive>
</template>
