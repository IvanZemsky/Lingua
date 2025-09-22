import type { Unit } from "@/entities/language"
import { useIntersectionObserver } from "@vueuse/core"
import { ref, shallowRef } from "vue"

type UnitDescInfo = {
  unitTitle: string
  unitNumber: number
}

export function useUnitDescCard(defaultDesc: UnitDescInfo, data: Unit[]) {
  const targetRef = shallowRef<HTMLDivElement | null>(null)

  const desc = ref<{ unitTitle: string; unitNumber: number }>(defaultDesc)

  useIntersectionObserver(
    targetRef,
    ([entry]) => {
      if (entry.isIntersecting) {
        console.log(entry)
        const unitNumber = parseInt(
          entry.target.getAttribute("data-unit") as string,
        )
        if (!unitNumber) return
        const unitTitle = data.find((unit) => unit.number === unitNumber)?.title

        if (unitNumber && unitTitle) {
          desc.value.unitNumber = unitNumber
          desc.value.unitTitle = unitTitle
        }
      }
    },
    { threshold: new Array(data.length).fill(0.7) },
  )

  return { targetRef, desc }
}
