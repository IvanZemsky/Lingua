import type { UnitWithProgress } from "@/entities/language"
import { watch, nextTick, shallowRef, type Ref } from "vue"
import type { UnitsList } from "../.."

export function useScrollToUnit(
  data: Ref<UnitWithProgress[] | null>,
  unitNumber: number,
) {
  const listRef = shallowRef<typeof UnitsList>()

  watch(data, async () => {
    await watchForDataAndScroll()
  })

  async function watchForDataAndScroll() {
    if (!data.value?.length) return
    if (!listRef.value?.root) return

    await nextTick()

    const rootEl = listRef.value.root as HTMLDivElement

    findElementAndScrollTo(rootEl, unitNumber)
  }

  return { listRef }
}

function findElementAndScrollTo(
  rootEl: HTMLDivElement,
  unitNumberToScrollTo: number,
) {
  const targetEl = rootEl.querySelector(`[data-unit="${unitNumberToScrollTo}"]`)
  if (targetEl) {
    targetEl.scrollIntoView({ block: "start" })
  }
}
