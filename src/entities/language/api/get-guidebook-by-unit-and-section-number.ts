import type { MaybeRefOrGetter, UseFetchOptions } from "@vueuse/core"
import { useFetchClient } from "@/shared/api"
import { toValue } from "vue"
import type { Guidebook } from "../model/guidebook";

export function useGetGuidebookByUnitAndSectionNumberQuery(
  dto: MaybeRefOrGetter<{ sectionNumber: number; unitNumber: number }>,
  options: UseFetchOptions = {},
) {
  const url = () => {
    const { sectionNumber, unitNumber } = toValue(dto)
    return `/sections/${sectionNumber}/units/${unitNumber}/guidebook`
  }

  return useFetchClient<Guidebook>(url, options).json<Guidebook>()
}
