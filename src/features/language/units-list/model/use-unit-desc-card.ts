import type { UnitWithProgress } from "@/entities/language"
import { useIntersectionObserver } from "@vueuse/core"
import { ref, type Ref } from "vue"

export function useUnitDescCard(data: Ref<UnitWithProgress[] | null>) {
  const targetRefs = ref<HTMLElement[]>([])

  const desc = ref<{ unitTitle: string; unitNumber: number }>({
    unitTitle: data.value?.[0].title ?? "",
    unitNumber: data.value?.[0].number ?? 0,
  })

  useIntersectionObserver(
    targetRefs,
    (entries) => {
      const visible = entries.find((e) => e.isIntersecting)
      if (!visible) return

      const unitNumber = getDataUnit(visible.target)
      if (!unitNumber) return
      
      setDesc(unitNumber)
    },
    {
      threshold: 0.7,
    },
  )

  function setDesc(unitNumber: number) {
    const unitTitle = data.value?.find((u) => u.number === unitNumber)?.title
    if (!unitTitle) return
    desc.value = { unitTitle, unitNumber }
  }

  function getDataUnit(el: Element): number | null {
    const dataUnitNumber = el.getAttribute("data-unit")
    return dataUnitNumber ? parseInt(dataUnitNumber) : null
  }

  return { targetRefs, desc }
}
