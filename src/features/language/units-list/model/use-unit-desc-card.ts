import type {  UnitWithProgress } from "@/entities/language"
import { useIntersectionObserver } from "@vueuse/core"
import { ref, shallowRef, type Ref } from "vue"



export function useUnitDescCard(data: Ref<UnitWithProgress[] | null>) {
  const targetRef = shallowRef<HTMLDivElement | null>(null)

  const desc = ref<{ unitTitle: string; unitNumber: number }>({
    unitTitle: data.value?.[0].title ?? "",
    unitNumber: data.value?.[0].number ?? 0,
  })

  useIntersectionObserver(
    targetRef,
    ([entry]) => {
      if (entry.isIntersecting) {
        const unitNumber = getDataUnit(entry.target)
        if (!unitNumber) return

        setDesc(unitNumber)
      }
    },
    { threshold: data ? new Array(data.value?.length).fill(0.7) : [] },
  )

  const setDesc = (unitNumber: number) => {
    if (!data) return

    const unitTitle = data.value?.find(
      (unit) => unit.number === unitNumber,
    )?.title

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
