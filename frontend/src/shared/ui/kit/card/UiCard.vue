<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import type { PrimitiveProps } from "reka-ui"
import { cn } from '@/shared/lib/css'

type Props = PrimitiveProps & {
  class?: HTMLAttributes["class"]
  hoverable?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <Primitive data-slot="card" :as="as" :as-child="asChild" :class="cn(
    'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
    {
      'cursor-pointer hover:shadow-md transition-shadow': props.hoverable,
    },
    props.class,
  )
    ">
    <slot />
  </Primitive>
</template>
