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
        const unitNumber = getDataUnit(entry.target)
        if (!unitNumber) return

        setDesc(unitNumber)
      }
    },
    { threshold: new Array(data.length).fill(0.7) },
  )

  const setDesc = (unitNumber: number) => {
    const unitTitle = data.find((unit) => unit.number === unitNumber)?.title

    if (unitNumber && unitTitle) {
      desc.value.unitNumber = unitNumber
      desc.value.unitTitle = unitTitle
    }
  }

  const getDataUnit = (el: Element): number | null => {
    const dataUnitNumber = el.getAttribute("data-unit")
    return dataUnitNumber ? parseInt(dataUnitNumber) : null
  }

  return { targetRef, desc }
}
